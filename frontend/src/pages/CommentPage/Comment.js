import CommentStyle from "./CommentStyle";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import fetchSend from "../../utils/sendFetch";
import receiveFetch from "../../utils/receiveFetch";
import renderMultiVoteChange from "../../utils/rendeMultiVoteChange";

const Comment = () => {

    const user = localStorage.getItem("user");
    
    const { id } = useParams()

    const post_id = id

    const [ commentsinfo, setCommentsinfo ] = useState();
    const [ newcommentinfo, setNewcommentinfo ] = useState({ comment_content: "", post_id: post_id });
    const [ EditedComment, setEditedComment ] = useState({ edit_comment_content: "", comment_id: "" });
    const [ iseditid, setIseditid ] = useState()

    useEffect(() => {
        async function fetchData() {
            const result = await receiveFetch("/api/get_comments", "POST", { post_id })
            setCommentsinfo(result)
        }

        fetchData()
    }, [])

    function createComment() {
        fetchSend("/api/create_comment", "POST", newcommentinfo)
        setNewcommentinfo(prev => { return { ...prev, comment_content: "" }})
    }   

    function sendEdit() {
        fetchSend("/api/edit_comment", "PUT", EditedComment)
        setIseditid()
        setEditedComment()
    }

    function deleteComment(e) {
        const comment_id = e.target.name
        fetchSend("/api/delete_comment", "DELETE", { comment_id })
    }

    async function voteComment(e) {
        const comment_id = e.target.getAttribute("id")
        const islike = e.target.getAttribute("name")
        fetchSend("/api/vote_comment", "PUT", { islike, comment_id })
        const result = await renderMultiVoteChange(islike, comment_id, commentsinfo)
        setCommentsinfo([ ...result ])
    }

    function handleInput(e) { 
        setNewcommentinfo(prev => ({ ...prev, comment_content: e.target.value }))
    }

    function handleInputEdit(e) { 
        setEditedComment(prev => ({ ...prev, edit_comment_content: e.target.value }))
    }

    function handleEdit(e) {
        setIseditid(e.target.name)
        setEditedComment(prev => ({ ...prev, comment_id: e.target.name })) 
    }

    return (
        <CommentStyle 
            createComment={createComment}
            handleInput={handleInput}
            newcommentinfo={newcommentinfo}
            commentsinfo={commentsinfo}
            sendEdit={sendEdit}
            handleEdit={handleEdit}
            handleInputEdit={handleInputEdit}
            voteComment={voteComment}
            deleteComment={deleteComment}
            post_id={post_id}
            iseditid={iseditid}
            user={user}
        />
    )
}

export default Comment;
