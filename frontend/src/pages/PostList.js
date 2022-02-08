import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components";
import PostVote from "../components/PostComponents/Vote"
import SkeletonPost from "../components/SkeletonPost"
import useFetchGet from "../hooks/useFetchGet";
import renderMultiVoteChange from "../utils/rendeMultiVoteChange";
import sendFetch from "../utils/sendFetch"

const PostsDiv = styled.div`
    display: flex;
    margin: 1rem;
    border:  solid rgb(179, 175, 175) 0.1rem;
    border-bottom-right-radius: 2rem;
    text-decoration: none;
    color: black;

    :hover {
        background: lightgray;
    }
`;

const Content = styled.div`
    display: flex;
    text-align: start;
    flex-direction: column;
    padding-top: 1rem;
    padding-bottom: 1rem;
    align-items: flex-start;

    a {
        text-decoration: none;
        color: black;
        font-size: 1.5rem;
    }

    a:hover  {
        opacity: 0.5;
    }
`;

const Row = styled.div`
    display: flex;
    margin-top: auto;

    a {
        margin-left: 1rem;
    }
`;

const Title = styled(Link)`
    font-size: 2rem;
    word-break: break-all;
`;

const Number = styled.div`
    font-size: 1.5rem;
    margin-right: 1rem;
`;

const Noposts = styled.div`
    font-size: 3rem;
    margin: 2rem;
`;

const Post = () => {

    const [ loading, setLoading ] = useState(false)
    const [ posts, setPosts ] = useState([]);

    const fetchData = useFetchGet("/api/display_posts")

    useEffect(() => {

        setPosts(fetchData)
        if (fetchData) setLoading(true)

    }, [fetchData])

    async function votePost(e) {
        const post_id = e.target.getAttribute("id")
        const islike = e.target.getAttribute("name")
        sendFetch(`/api/vote_post`, "PUT", { islike, post_id })
        const result = await renderMultiVoteChange(islike, post_id, posts)
        setPosts([ ...result ])
    }
   
    return ( 
        <> 
            {loading ? posts && posts.length ? posts.map(post => { 
                return (
                    <PostsDiv key={post.id}>
                        <PostVote 
                            votePost={votePost}
                            postinfo={post}
                        />
                        <Content>
                            <Title to={{ pathname: `/post/${post.id}` }}>
                                {post.post_title}
                            </Title>
                            <Row>
                                <Number>{post.num_of_comments} comment/s</Number>         
                                <Link to={{ pathname: `/userprofile/${post.username}` }}>     
                                    {post.username}      
                                </Link>
                            </Row>
                        </Content>                                       
                    </PostsDiv>
                )    
            }) 

            : 

            <Noposts>Create a post or follow someone too see some...</Noposts>

            :
            
            <>
                <SkeletonPost />
                <SkeletonPost />
                <SkeletonPost />
                <SkeletonPost />
                <SkeletonPost />
            </>
        }
        </>
    )
}

export default Post;
