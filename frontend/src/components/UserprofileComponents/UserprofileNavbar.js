import { Link, useLocation } from "react-router-dom"
import styled from "styled-components"
import { useState } from "react";

const Styleddiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;

const Styledlink = styled(Link)`
    display: flex;
    list-style: none;
    word-break: break-word;
    color: black;
    font-size: 3rem;
    padding: 2rem;
    color: gray;
    text-decoration: none;

    ${({active}) => active && `color: black`};
`;

const UserprofileNavbar = (props) => {

    const location = useLocation()

    const userdata = props.userdata

    const user = props.user

    const [ list , setList ] = useState([location.pathname])

    function setActive(e) {
        setList([e.target.name])
    }

    return (   
        <Styleddiv>
                <Styledlink 
                    to={{pathname:`/userprofile/${user}`}}  
                    className="fas fa-book" 
                    active={list.includes(`/userprofile/${user}`)}
                    name={`/userprofile/${user}`}
                    onClick={setActive}
                />
                <Styledlink 
                    to={{pathname:`/userprofile/${user}/likedposts`}} 
                    className="fas fa-vote-yea" 
                    active={list.includes(`/userprofile/${user}/likedposts`)}
                    name={`/userprofile/${user}/likedposts`}
                    onClick={setActive}
                />
                <Styledlink 
                    to={{pathname:`/userprofile/${user}/likedcomments`}} 
                    className="fas fa-comment-medical" 
                    active={list.includes(`/userprofile/${user}/likedcomments`)}
                    name={`/userprofile/${user}/likedcomments`}
                    onClick={setActive}
                />
                {localStorage.getItem("user") == user &&
                <>
                <Styledlink 
                    to={{
                        pathname:`/userprofile/${user}/usersettings`,
                        state: userdata
                    }} 
                    className="fas fa-cogs"
                    active={list.includes(`/userprofile/${user}/usersettings`)}
                    name={`/userprofile/${user}/usersettings`}
                    onClick={setActive}
                /> 
                <Styledlink 
                    to={{pathname:`/userprofile/${user}/followrequests`}} 
                    className="fas fa-user-clock" 
                    active={list.includes(`/userprofile/${user}/followrequests`)}
                    name={`/userprofile/${user}/followrequests`}
                    onClick={setActive}
                />
                </>
                }
        </Styleddiv>          
    )
}

export default UserprofileNavbar;
