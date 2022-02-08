import Userprofile from "../components/UserprofileComponents/Userprofile"
import Usersettings from "../components/UserprofileComponents/Usersettings"
import Followrequests from "../components/UserprofileComponents/Followrequests"
import Userposts from "../components/UserprofileComponents/Userposts"
import UserprofileNavbar from "../components/UserprofileComponents/UserprofileNavbar"
import Loading from "../components/Loading"
import { useParams, Route, Switch } from "react-router-dom"
import { useEffect, useState } from "react"
import styled from "styled-components"
import receiveFetch from "../utils/receiveFetch"

const Wrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    font-size: 4rem;
`;

const UserprofileRender = () => {

    const { id } = useParams()

    const user = id
    
    const [ userdata, setUserdata ] = useState()
    const [ isLoaded, setIsLoaded ] = useState(false)

    useEffect(() => {
        setIsLoaded(false)
        setUserdata()

        async function fetchData() {
            const res = await receiveFetch("/api/display_userprofile", "POST", { user })
            setUserdata(res)
            setIsLoaded(true)
        }
      
        fetchData()
    }, [user])

    if (!isLoaded) return <Loading />
    if (!Object.keys(userdata).length) return  <Wrapper>User not found...</Wrapper>  

    return (    
        <Wrapper>

            <Userprofile userdata={userdata} user={user}/>
            <UserprofileNavbar userdata={userdata} user={user}/>

            <Switch>
                <Route exact path="/userprofile/:id"><Userposts/></Route>
                <Route path="/userprofile/:id/followrequests"><Followrequests /></Route>
                <Route path="/userprofile/:id/usersettings" render={(props) => <Usersettings {...props} />}/>
            </Switch>
        </Wrapper>         
    ) 
}

export default UserprofileRender;
