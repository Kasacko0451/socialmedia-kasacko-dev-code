import CommentVote from "../../components/CommentComponents/Vote"
import CommentContent from "../../components/CommentComponents/Content"
import CommentNew from "../../components/CommentComponents/New"
import CommentEdit from "../../components/CommentComponents/Edit"
import styled from "styled-components"
import SkeletonPost from "../../components/SkeletonPost"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Maindiv = styled.div`
    display: flex;
`;

const Commentwrap = styled.div`
    display: flex;
    font-size: 2rem;
    flex-direction: row;
    border: 0.1rem solid rgb(179, 175, 175);
    border-bottom-right-radius: 5rem;
    margin: 2rem;
    width: 90%;
`;

const Nocomments = styled.div`
    font-size: 3rem;
    margin: 2rem;
`;

const CommentStyle = (props) => {

    const { createComment, handleInput, newcommentinfo, commentsinfo, sendEdit, handleEdit, 
            handleInputEdit, voteComment, deleteComment, post_id, iseditid, user
    } = props

    return (
        <Wrapper>
            <CommentNew 
                createComment={createComment}
                handleInput={handleInput}
                newcommentinfo={newcommentinfo}
            />

            {commentsinfo ? commentsinfo?.length ? commentsinfo.map((comment => {
                return (
                    <Maindiv key={comment.id}>             
                        {comment.id == iseditid ?
                        <CommentEdit 
                            sendEdit={sendEdit}
                            handleEdit={handleEdit}
                            handleInputEdit={handleInputEdit}
                        />

                        :

                        <Commentwrap>
                            <CommentVote 
                                comment={comment}
                                voteComment={voteComment}
                            />
                            <CommentContent 
                                comment={comment}
                                post_id={post_id}
                                handleEdit={comment.username === user && handleEdit}
                                deleteComment={comment.username === user && deleteComment}
                            />
                        </Commentwrap>           
                        }
                    </Maindiv>
                )
            }))

            :

            <Nocomments>
                Be the first to comment ...
            </Nocomments>

            :

            <>
                <SkeletonPost />
                <SkeletonPost />
                <SkeletonPost />
                <SkeletonPost />
            </>
            }
        </Wrapper>
    )
}

export default CommentStyle;
