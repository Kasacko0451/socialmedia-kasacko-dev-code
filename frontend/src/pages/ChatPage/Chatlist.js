import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"
import useFetchGet from "../../hooks/useFetchGet";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Styledlink = styled(Link)`
    font-size: 3rem;
    color: black;
    margin: 1rem;
    background-color: rgba(220, 220, 220, 0.5);
    border-radius: 1.5rem;
    padding: 1.5rem;

    :hover {
        background-color: rgba(220, 220, 220, 1);
    }
`;

const Chatlist = () => {   
    
    const [users, setUsers] = useState([]);
    
    const fetchData = useFetchGet("/api/display_follows")

    useEffect(() => setUsers(fetchData), [fetchData]);

    return ( 
        <Wrapper>
            {users && users.map(user => {
              return (
              	<Styledlink
                  to={{pathname:`/chatbox/${user.username}`}}
              	  key={user.id}
              	  className="user-link-chat"
              	  name={user.username}
              	>
          			Chat with {user.username}
              	</Styledlink>
              )
            })}
        </Wrapper>
    )
}

export default Chatlist;
