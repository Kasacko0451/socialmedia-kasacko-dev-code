import styled from "styled-components";

const Edit = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 3rem;
    margin: 3rem;

    button {
        align-self: flex-end;
        margin: 1rem;
    }
`;

const EditPost = (props) => {

    const { postinfo, sendEdit, setEdit, handleInput } = props

    return (
        <Edit>
            Edit post:
            <textarea type="text" onChange={handleInput} value={postinfo.post_content}/>
            <button onClick={setEdit}>Cancel edit</button>
            <button onClick={sendEdit} >Submit edit</button>
        </Edit> 
    )
}

export default EditPost;
