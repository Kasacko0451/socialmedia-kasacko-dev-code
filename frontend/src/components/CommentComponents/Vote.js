import styled from "styled-components"

const Reactionbuttons = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    font-size: 2.2rem;
`;

const Like = styled.div`
    font-size: 2rem;

    ${({ active }) => active && `color: red`};
`;

const Dislike = styled.div`
    font-size: 2rem;
    
    ${({ active }) => active && `color: purple`};
`;

const CommentVote = (props) => {

    const { comment, voteComment } = props

    return (
        <Reactionbuttons>
            <Like
                className="fas fa-heart"
                active={comment.liked}
                id={comment.id} 
                name="true" 
                onClick={voteComment}
            />       
            {comment.votes}
            <Dislike
                className="fas fa-heart-broken"
                active={comment.liked != null && !comment.liked} 
                id={comment.id}                       
                name="false" 
                onClick={voteComment}
            /> 
        </Reactionbuttons>
    )
}

export default CommentVote;
