import { useState } from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: whitesmoke;
    font-size: 3rem;
    padding: 1rem;
`;

const Down = styled.div`
    display: flex;
    font-size: 3rem;
`;

const Updiv = styled.div`
    display: flex;
`;

const Avatar = styled.div`
    display: flex;
    border-radius: 50%;
    background-color: lightblue;
    padding: 3rem;
`;

const Username = styled.div`
    font-size: 3rem;
    align-self: center;
    margin-left: 1rem;
`;

const Bio = styled.div`
    display: flex;
    padding: 1rem;
`;

const Age = styled.div`
    display: flex;
    padding: 1rem;
`;

const Sex = styled.div`
    display: flex;
    padding: 1rem;
`;

const Follow = styled.div`
    display: flex;
    font-size: 3rem;
    align-self: flex-end;
    margin-right: 10rem;
    font-weight: bolder;

    button {
        font-weight: bolder;
        border: none;
        border-radius: 3rem;
        background: #4B5C77;
        padding: 1rem;

        :hover {
            background: #525255;
        }
    }
`;

const First = styled.div`
    padding: 2rem;
`;

const Second = styled.div`
    padding: 2rem;
`;

const Userprofile = (props) => {

    const user = props.user

    const [ userinfo, setUserinfo ] = useState(props.userdata)

    function followUser() {
        fetch("/api/follow_user", {
            method: "POST",
            mode: "cors",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ user })    
        })
        setUserinfo(prevInfo => {
            return { ...prevInfo, follows: true }
        })
    }

    function unfollowUser() {
        fetch("/api/unfollow_user", {
            method: "POST",
            mode: "cors",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ user })    
        })
        setUserinfo(prevInfo => {
            return { ...prevInfo, follows: false }
        })
    }

    return (
        <Wrapper> 
                <Updiv>
                    <Username>{userinfo.username}</Username>
                </Updiv>
                <Bio>
                    {userinfo.bio}
                </Bio>
                <Follow>
                    <First></First>
                    <Second></Second>
                {userinfo && user != localStorage.getItem("user") &&
                <>
                {userinfo.follows === true ?
                    <button onClick={unfollowUser}>Unfollow</button>
                    : 
                    <button onClick={followUser}>Follow</button>
                }
                </>
                }   
                </Follow>
                <Down>
                    <Age>{userinfo.age}</Age>
                    <Sex>{userinfo.sex}</Sex>         
                </Down>
        </Wrapper>
    )
}

export default Userprofile;
