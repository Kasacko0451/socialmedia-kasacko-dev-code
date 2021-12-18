import { Link } from "react-router-dom"
import { useState } from "react";
import styled from "styled-components"

const Navstyle = styled.nav`
    display: flex;
    justify-content: flex-end;
    background: #ffffff;
    z-index: 2;
    position: sticky;
    top: 0;
`;

const Rightnav = styled.div`
    display: flex;
`;

const Comname = styled.div`
    margin-right: auto;
    margin-top: 1rem;
`;

const Styledlink = styled(Link)`
    align-self: center;
    display: flex;
    color: black;
    margin: 2rem;
    padding-left: 3rem;
    padding-right: 3rem;
    font-size: 3rem;
    text-decoration: none;
    border-radius: 4rem;
    background: rgb(166, 173, 179);

    :hover {
        background: rgb(111, 116, 120);
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

const Burgerbar = styled.div`
    font-size: 3rem;
    padding: 1rem;
    z-index: 1;

    :focus {
      outline: none;
    }

    .div1, .div2, .div3 {
        margin: 1rem;
        width: 3.5rem;
        height: 0.5rem;
        background: black;
        transition: 0.5s;
    }

    .div1 {
        ${({ open }) => open && `-webkit-transform: rotate(-45deg) translate(-1.1rem, 1rem);
                                 transform: rotate(-45deg) translate(-1.1rem, 1rem);`};
    }
    .div2 {
        ${({ open }) => open && `opacity: 0`};
    }
    .div3 {
        ${({ open }) => open && `-webkit-transform: rotate(45deg) translate(-1.1rem, -1rem);
                                 transform: rotate(45deg) translate(-1.1rem, -1rem);`};
    }

    @media (min-width: 769px) {
        display: none;
    }
`;

const StyledMenu = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #4B5C77;
    height: 100vh;
    padding: 2.5rem;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => open ? `translateY(0)` : `translateY(-100%)`};

    @media (min-width: 769px) {
        transform: translateY(-100%);
    }

    a {
        text-decoration: none;
        font-size: 3.5rem;
        text-align: center;
        padding: 3rem;
        color: #ffffff;
    }
  
`;

const Logolink = styled(Link)`
    margin: 4rem;
    padding: 1rem;
    border: none;
    border-radius: 2rem;
    text-decoration: none;
    font-size: 4rem;
    color: #4B5C77;

    :hover {
        background-color: aliceblue;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

const Navbar = () => {

    const [ open, setOpen ] = useState(false)

    function openBurger() {
        setOpen(!open)
    }

    return (
        <Navstyle>
            <Comname>
                <Logolink to="/">KASACKO</Logolink>
            </Comname>
            <Rightnav>
                <Styledlink to="/login">LOGIN</Styledlink>
                <Styledlink to="/register">REGISTER</Styledlink>
            </Rightnav>
            
            <Burgerbar open={open} onClick={openBurger}>
      	        <div className="div1"/>
      	        <div className="div2"/>
      	        <div className="div3"/>
            </Burgerbar>
            <StyledMenu open={open}>
                <Link onClick={openBurger} to="/">WELCOME</Link>
                <Link onClick={openBurger} to="/login">LOGIN</Link>
                <Link onClick={openBurger} to="/register">REGISTER</Link>
            </StyledMenu>
        </Navstyle>
    )
}

export default Navbar;
