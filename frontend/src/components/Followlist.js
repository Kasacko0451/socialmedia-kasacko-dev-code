import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components";
import useFetchGet from "../hooks/useFetchGet";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background: #303E2B;
    margin: 1rem;

    h2 {
        font-weight: lighter;
        font-size: 3rem;
        padding: 2rem;
        color: white;
    }
`;

const Styledlink = styled(Link)`
    color: white;
    padding: 1.5rem;
    margin: 0.5rem;
    font-size: 2rem;
    border-radius: 3rem;
    align-self: flex-start;
    
    :hover {
        background: #525255;
    }
`;

const Userlist = () => {
    
    const fetchData = useFetchGet("/api/display_follows")

    const [ users, setUsers ] = useState();

    useEffect(() => {                  
        setUsers(fetchData)
    }, [fetchData])

    return (
        <Wrapper>
            <h2>Who To Follow</h2>
            {users && users.map(user => {
                return ( 
                        <Styledlink 
                            key={user.id} 
                            to={{
                                pathname: `/userprofile/${user.username}`,
                                state: user.username
                            }}
                        >
                            {user.username}
                        </Styledlink>
                )
            })}
        </Wrapper>
    )
};

export default Userlist;
