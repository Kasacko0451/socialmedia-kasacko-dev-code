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

const PostVote = (props) => {

    const { votePost, postinfo } = props

    return (
        <Reactionbuttons>
            <Like
                className="fas fa-heart"
                active={postinfo.liked}
                id={postinfo.id}
                name="true"
                onClick={votePost}
            />      
            {postinfo.votes}
            <Dislike
                className="fas fa-heart-broken"
                active={postinfo.liked != null && !postinfo.liked}
                id={postinfo.id}
                name="false"
                onClick={votePost}
            /> 
        </Reactionbuttons>
    )
}

export default PostVote;
