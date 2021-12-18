import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 0;
    background-color: white;
    font-size: 8rem;

    @media(min-width: 769px) {
        display: none;
    }
`;

const Styledlink = styled(Link)`
    margin: 1rem;
    text-decoration: none;
    color: black;
`;

const MobileNav = () => {
    return (    
        <Wrapper>
            <Styledlink
                to={{pathname:`/createpost`}} 
                className="fas fa-pencil-alt"
            />
            <Styledlink
                to={{pathname:`/search`}} 
                className="fas fa-search"
            />
        </Wrapper>
    )
};

export default MobileNav;
