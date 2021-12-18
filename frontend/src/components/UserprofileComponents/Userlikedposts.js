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

const Userliked = () => {

    const { id } = useParams()

    const username = id

    const [ liked, setLiked ] = useState([])

    useEffect(() => {
        fetch("/api/get_liked_posts", {
            method: "POST",
            mode: "cors",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ username })    
        })
        .then(res => res.json())
        .then(res => setLiked(res))
    }, [])

    return (
        <Wrapper>
            Posts liked by user:
            {liked && liked.length ? liked.map(l => {
                return (
                    <Postdiv key={l.id}>
                        <Title>{l.post_title}</Title>
                        <Content>{l.post_content}</Content>
                    </Postdiv>
                )
            })

            :

            <Noposts>
                No liked posts...
            </Noposts>
            }
        </Wrapper>
    )
}

export default Userliked;
