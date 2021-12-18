import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import PostStyle from "./PostStyle"
import sendFetch from "../../utils/sendFetch"
import receiveFetch from "../../utils/receiveFetch"
import renderSingleVoteChange from "../../utils/renderSingleVoteChange"

const Postdetails = () => {

    const loggedInUser = localStorage.getItem("user");

    const { id } = useParams();
    const post_id = id

    const [ isedit, setIsedit ] = useState(false)
    const [ postinfo, setPostinfo ] = useState();
    
    useEffect(() => {
        async function fetchData() {
            const result = await receiveFetch("/api/post_info", "POST", { post_id })
            setPostinfo(result)
        }
        
        fetchData()
    }, [post_id])

    function sendEdit() {
        sendFetch("/api/edit_post", "POST", postinfo)
        setPostinfo({ ...postinfo })
        setIsedit(false)
    }

    function deletePost() {
        sendFetch("/api/delete_post", "POST", { post_id })
        window.location.href = "/"
    }
 
    async function votePost(e) {
        const islike = e.target.getAttribute("name")
        sendFetch("/api/vote_post", "PUT", { post_id, islike })
        const result = await renderSingleVoteChange(islike, postinfo)
        setPostinfo({ ...result })
    }

    function handleInput(e) { 
        setPostinfo(prevInfo => ({ ...prevInfo, post_content: e.target.value }))
    }

    const copyClip = () => navigator.clipboard.writeText(window.location.href) 

    const setEdit = () => setIsedit(!isedit) 

    return (
        <PostStyle 
        setEdit={setEdit}
        copyClip={copyClip}
        handleInput={handleInput}
        votePost={votePost}
        sendEdit={sendEdit}
        deletePost={deletePost}
        loggedInUser={loggedInUser}
        isedit={isedit}
        postinfo={postinfo}
    />
    )
}

export default Postdetails;
