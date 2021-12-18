import styled from "styled-components";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Wrapper = styled.nav`
    display: flex;
    justify-content: space-evenly;
    position: sticky;
    bottom: 0;
    background-color: white;
    font-size: 8rem;

    @media(min-width: 769px) {
        display: none;
    }
`;

const Styledlink = styled(Link)`
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    text-decoration: none;
    color: lightgray;
    ${({active}) => active && `color: black`};
`;

const MobileNav = () => {
    
    const location = useLocation()

    const user = localStorage.getItem("user");

    const [ list, setList ] = useState([location.pathname])

    function addList(e) {
        setList([e.target.name])
    }

    return (    
        <Wrapper>
            <Styledlink
                onClick={addList} 
                name="/" 
                active={list.includes("/")} 
                to="/" 
                className="fas fa-home" 
            />
            <Styledlink
                onClick={addList} 
                name={`/userprofile/${user}`}
                active={list.includes(`/userprofile/${user}`)} 
                to={{pathname:`/userprofile/${user}`}} 
                className="fas fa-user-circle"
            />
            <Styledlink
                onClick={addList} 
                name="/userplace" 
                active={list.includes("/userplace")} 
                to="/userplace" 
                className="fas fa-users"
            />
            <Styledlink
                onClick={addList} 
                name="/chatlist" 
                active={list.includes("/chatlist")} 
                to="/chatlist" 
                className="fas fa-comments"
            />
        </Wrapper>
    )
};

export default MobileNav;
