import Userprofile from "../components/UserprofileComponents/Userprofile"
import Usersettings from "../components/UserprofileComponents/Usersettings"
import Followrequests from "../components/UserprofileComponents/Followrequests"
import Userposts from "../components/UserprofileComponents/Userposts"
import UserprofileNavbar from "../components/UserprofileComponents/UserprofileNavbar"
import Userlikedposts from "../components/UserprofileComponents/Userlikedposts"
import Userlikedcomments from "../components/UserprofileComponents/Userlikedcomments"
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
    const [ isLoading, setIsLoading ] = useState(false)

    useEffect(() => {
        setIsLoading(false)
        setUserdata()

        async function fetchData() {
            const res = await receiveFetch("/api/display_userprofile", "POST", { user })
            setUserdata(res)
            setIsLoading(true)
        }
      
        fetchData()
    }, [user])

    return (
        <>
            {isLoading ? userdata ?
            <Wrapper>

                <Userprofile userdata={userdata} user={user}/>

                <UserprofileNavbar userdata={userdata} user={user}/>

                <Switch>
                    <Route exact path="/userprofile/:id" render={(props) => <Userposts {...props} />}/>
                    <Route exact path="/userprofile/:id/likedposts" render={(props) => <Userlikedposts {...props} />}/>
                    <Route exact path="/userprofile/:id/likedcomments" render={(props) => <Userlikedcomments {...props} />}/>
                    <Route path="/userprofile/:id/followrequests" render={(props) => <Followrequests {...props} />}/>
                    <Route path="/userprofile/:id/usersettings" render={(props) => <Usersettings {...props} />}/>
                </Switch>

            </Wrapper>

            :

            <Wrapper>
                User not found...
            </Wrapper>

            :

            <Loading />
            }
        </>
    )
}

export default UserprofileRender;
