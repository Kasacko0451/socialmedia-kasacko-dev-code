import Post from "./PostPage/Post";
import Comment from "./CommentPage/Comment";
import { useParams } from "react-router-dom"

const PostRender = () => {

    const { id } = useParams()

    return (
        <>
            <Post post_id={id} />
            <Comment post_id={id} /> 
        </>
    )
}

export default PostRender;
