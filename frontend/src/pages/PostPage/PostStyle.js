import PostVote from "../../components/PostComponents/Vote"
import PostContent from "../../components/PostComponents/Content";
import EditPost from "../../components/PostComponents/Edit";
import SkeletonPost from "../../components/SkeletonPost";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    font-size: 4rem;
    word-break: break-word;
    flex-direction: column;
`;

const Post = styled.div`
    flex: 1;
    display: flex;
    margin: 1rem;
    border-bottom: solid 0.4rem rgb(190, 194, 192);
`;

const PostStyle = (props) => {

    const { setEdit, copyClip, handleInput, votePost, sendEdit, deletePost, loggedInUser,
            postinfo, isedit
    } = props

    return (
        <Wrapper>
            {postinfo ? isedit && postinfo ?
            <EditPost 
                postinfo={postinfo}
                setEdit={setEdit}
                sendEdit={sendEdit}
                handleInput={handleInput}
            />

            : 

            <Post>
                <PostVote 
                    votePost={votePost}
                    postinfo={postinfo}
                />
                <PostContent
                    postinfo={postinfo}
                    copyClip={copyClip}
                    deletePost={loggedInUser === postinfo.username && deletePost}
                    setEdit={loggedInUser === postinfo.username && setEdit}
                />
            </Post>

            :

            <SkeletonPost />
            }  
        </Wrapper>
    )
};

export default PostStyle;
