import styled from "styled-components";

const Editmode = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    font-size: 3rem;
    margin: 3rem;

    button {
        align-self: flex-end;
        margin: 1rem;
    }
`;

const CommentEdit = (props) => {

    const { sendEdit, handleEdit, handleInputEdit } = props

    return (
        <Editmode>
            Edit comment:
            <textarea type="text" onChange={handleInputEdit}/>
            <button onClick={sendEdit}>Send edit</button>
            <button onClick={handleEdit}>Cancel edit</button>
        </Editmode> 
    )
};

export default CommentEdit;
