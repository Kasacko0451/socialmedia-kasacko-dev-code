import Posts from "./PostList.js";
import Createpost from "./Createpost.js";
import PostRender from "./PostRender.js";
import Navbar from "../components/DesktopNavs/NavbarIn";
import Followlist from "../components/Followlist";
import UserprofileRender from "./UserprofileRender.js";
import NotFound from "../components/NotFound.js";
import Chatlist from "./ChatPage/Chatlist.js";
import Chatbox from "./ChatPage/Chatbox.js";
import MobileNavTop from "../components/MobileNavs/MobileNavTop"
import MobileNavBottom from "../components/MobileNavs/MobileNavBottom"
import Search from "./Search"
import styled from "styled-components"
import { Route, Switch, withRouter } from "react-router-dom";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: row;

    @media(max-width: 768px) {
      flex-direction: column;
    }
`;

const Nav = styled.nav`
    min-height: 100vh;
    height:100%;
    flex: 1;
    position: sticky;
    top: 0;
    background-color: #4B5C77;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  
    @media(max-width: 768px) {
      display: none;
    }
`;

const Main = styled.main`
    display: flex;
    flex-direction: column;
    flex: 2.5;
    border: rgb(219, 213, 213) solid 0.1rem;
    background: #ffffff;
`;

const Aside = styled.aside`
    min-height: 100vh;
    flex: 1;
    max-height: 100vh;
    position: sticky;
    display: flex;
    top: 0;
    flex-direction: column;
    background-color: #4B5C77;
    
    @media (max-width: 768px) {
      display: none;
    }
`;

const LoggedIn = () => {

  const [ chatScreen, setChatScreen] = useState(false)

  useEffect(() => {
    if (window.location.href.includes("/chatbox")) setChatScreen(() => true)
    else setChatScreen(() => false)
  })

  return (     
      <Wrapper>
        {chatScreen ? null : <MobileNavTop />}
        <Nav>
          <Navbar />
        </Nav>
        <Main>
          <Switch>
            <Route exact path="/"><Posts /></Route>              
            <Route exact path="/createpost"><Createpost /></Route>
            <Route path="/post/:id" render={(props) => <PostRender {...props} />}/>
            <Route path="/userprofile/:id" render={(props) => <UserprofileRender {...props} />}/>
            <Route path="/userplace"><Followlist /></Route>
            <Route path="/chatlist" render={(props) => <Chatlist {...props} />}/>
            <Route path="/chatbox/:id" render={(props) => <Chatbox {...props} />}/>
            <Route path="/search"><Search /></Route>
            <Route><NotFound /></Route>
          </Switch>
        </Main>
        <Aside>
          <Followlist />
        </Aside>
        {chatScreen ? null : <MobileNavBottom />}
      </Wrapper>
  );
};

export default withRouter(LoggedIn);
