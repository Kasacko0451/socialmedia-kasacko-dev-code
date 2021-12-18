import styled from "styled-components"
import { Link } from "react-router-dom";

const Content = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    font-size: 2rem;
    word-break: break-word;
    margin: 1rem;
    cursor: pointer;
`;

const Title = styled.div`
    font-size: 1.5rem;
`;

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

const PostContent = (props) => {

    const { postinfo, setEdit, deletePost, copyClip } = props

    return (
        <Content>   
            <Title>{postinfo.post_title}</Title>
            {postinfo.post_content}
            <Buttons>
                <Link
                    to={{pathname:`/userprofile/${postinfo.username}`}}
                > {postinfo.username}
                </Link>
                <Link
                    to={{pathname:`/post/${postinfo.id}`}}
                    className="fas fa-level-up-alt"
                /> 
                <button onClick={copyClip} className="fas fa-share-square"/>
                {setEdit && <button onClick={setEdit} className="fas fa-edit"/>}
                {deletePost && <button onClick={deletePost} className="fas fa-trash-alt"/>}
            </Buttons>
        </Content>  
    )
}

export default PostContent;
