import { Link } from "react-router-dom"
import styled from "styled-components"

const Styledlink = styled(Link)`
    color: black;
    margin-top: 3rem;
    margin-right: 1rem;
    padding: 1.5rem;
    font-size: 2rem;
    text-decoration: none;
    border-radius: 4rem;
    color: white;
    text-align: end;

    :hover {
        background: #525255;
    }

    i {
        padding: 2rem;
        font-size: 2.5rem;
    }
`;

const Navbar = () => {

    const user = localStorage.getItem("user")

    return (
        <>
            <Styledlink to="/"><i className="fas fa-home"/>HOME</Styledlink>
            <Styledlink to="/createpost"><i className="fas fa-marker"/>CREATE A POST</Styledlink>
            <Styledlink to="/chatlist"><i className="fas fa-comments"/>CHAT</Styledlink>
            <Styledlink to="/search"><i className="fas fa-search"/>SEARCH</Styledlink>
            <Styledlink to={{pathname:`/userprofile/${user}`}}><i className="fas fa-user-circle"/>MY PROFILE</Styledlink>
        </>

    )
}

export default Navbar;
