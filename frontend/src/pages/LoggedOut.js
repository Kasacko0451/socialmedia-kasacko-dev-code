import Entrypage from "./LandingPage";
import Login from "./AuthPage/Login.js";
import Register from "./AuthPage/Register.js";
import Navbar from "../components/DesktopNavs/NavbarOut";
import NotFound from "../components/NotFound.js";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components"

const Wrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

const Main = styled.main`
    display: flex;
    background: #e1edf2;
    flex: 1;
`;

const LoggedOut = () => {

    return (
        <Wrapper>

            <Navbar />

            <Main>
                <Switch>
                  <Route exact path="/"><Entrypage /></Route>
                  <Route path="/login"><Login /></Route>
                  <Route path="/register"><Register /></Route>
                  <Route><NotFound /></Route>
                </Switch>
            </Main>

        </Wrapper>
    );
};

export default LoggedOut;
