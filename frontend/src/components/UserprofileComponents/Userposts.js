import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    margin: 1rem;
`;

const Postdiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem;
    padding: 1rem;
    border-radius: 1rem;
    color: white;
    background: #4B5C77;
`;

const Content = styled.div`
    display: flex;
    font-size: 2rem;
    margin: 1rem;
    padding: 1rem;
    border-radius: 1rem;
    color: white;
    background: #4B5C77;
`;

const Title = styled.div`
    display: flex;
    font-size: 2rem;
    margin: 1rem;
    padding: 1rem;
    border-radius: 1rem;
    color: white;
    background: #4B5C77;
`;

const Noposts = styled.div`
    display: flex;
    margin: 4rem;
    padding: 1rem;
    font-size: 3rem;
    align-self: center;
    border-radius: 15%;
    background: rgb(209, 212, 227);
    margin-bottom: auto;
`;

const Userposts = () => {

    const { id } = useParams()

    const username = id

    const [ posts, setPosts ] = useState([])

    useEffect(() => {
        fetch("/api/get_users_posts", {
            method: "POST",
            mode: "cors",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ username })    
        })
        .then(res => res.json())
        .then(res => setPosts(res))
    }, [])

    return (
        <Wrapper>
            Posts made by user:
            {posts && posts.length ? posts.map(post => {
            return (
                <Postdiv key={post.id}>
                    <Title>{post.post_title}</Title>
                    <Content>{post.post_content}</Content>
                </Postdiv>
            )})
            :
            <Noposts>
                No posts to show...
            </Noposts>
            }
        </Wrapper>
    )
}

export default Userposts;
