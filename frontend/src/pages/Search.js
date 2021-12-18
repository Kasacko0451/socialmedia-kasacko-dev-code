import { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components";
import receiveFetch from "../utils/receiveFetch";

const Wrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    
    input {
        margin: 3rem;
        margin-bottom: 0;
        font-size: 3rem;
        border: none;
        border-bottom: 0.3rem solid black;
        outline: none;
    }
`;

const Searchmenu = styled.div`
    display: flex;
    flex-direction: column;
    border: 0.1rem solid black;
    margin-left: 3rem;
    margin-right: 3rem;
    border-top: none;
    background-color: #f0f0f0;

    a {
        font-size: 3rem;
        color: black;
        padding-left: 3rem;

        :hover {
            background: lightgrey;
        }
    }

    div {
        font-size: 3rem;
        margin-left: 3rem;
    }
`;

const Search = () => {

    const [ searched, setSearched ] = useState([])

    async function searchUsers(e) {
        const searchterm = e.target.value
        const result = await receiveFetch("/api/search_users", "POST", { searchterm })
        setSearched(result)
    }

    return ( 
        <Wrapper> 
            <input placeholder="Search users..." type="search" onChange={searchUsers} />
            <Searchmenu>
            {searched && !searched[0]?.nousers ? searched.map(user => {
                return (
                    <Link key={user.user_id}
                          to={{pathname:`/userprofile/${user.username}`}}
                    >
                        {user.username}
                    </Link>
                )
            })
            
            :

            <div>
                {searched[0].nousers}
            </div>
        }
        </Searchmenu>
        </Wrapper>
    )
}

export default Search;
