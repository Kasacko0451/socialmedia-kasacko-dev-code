import styled from "styled-components";

const Newcomment = styled.form`
    display: flex;
    font-size: 2.2rem;
    flex-direction: column;

    textarea {
        margin: 2rem;
        font-size: 2.2rem;
    }
    
    input {
        margin-right: 2.5rem;
        align-self: flex-end;
    }
`;

const CommentNew = (props) => {

    const { createComment, handleInput, newcommentinfo } = props

    return (
        <Newcomment onSubmit={createComment}>
            <textarea 
                placeholder="Leave a comment ..."
                type="text"
                onChange={handleInput} 
                value={newcommentinfo.comment_content}
            />
            <input type="submit" value="Submit comment" />
        </Newcomment>
    )
};

export default CommentNew;
