import styled from "styled-components";
import { Link } from "react-router-dom"

const Buttons = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 2rem;
    margin: 1rem;
    font-size: 2.8rem;

    a {
        text-decoration: none;
        color: black;
 
        :hover {
            background-color: lightgray;
        }
    }

    button {
        border: none;
        background-color: white;

        :hover {
            background-color: lightgray;
        }
    }
`;

const Content = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    font-size: 2rem;
    word-break: break-word;
    margin: 1rem;
`;

const CommentContent = (props) => {

    const { comment, handleEdit, deleteComment } = props

    return (
        <Content>
            {comment.comment_content}
            <Buttons>
                <Link to={{pathname:`/userprofile/${comment.username}`}}
                > {comment.username}
                </Link>
                {handleEdit && <button name={comment.id} onClick={handleEdit} className="fas fa-edit"/>}
                {deleteComment && <button name={comment.id} onClick={deleteComment} className="fas fa-trash-alt"/>}
            </Buttons>
        </Content>
    )
}

export default CommentContent;
