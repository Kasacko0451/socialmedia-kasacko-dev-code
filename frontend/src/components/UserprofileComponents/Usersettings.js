import { useState } from "react"
import styled from "styled-components"
import sendFetch from "../../utils/sendFetch";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Formstyled = styled.form`
    border-bottom: solid 0.2rem rgb(40, 40, 40);
    margin: 2rem;
    display: flex;
    flex-direction: column;
    font-size: 3rem;

    input {
        margin: 1rem;
        align-self: flex-start;
    }

    input[type=submit] {
        border: none;
        border-radius: 2rem;
        background-color:  #4B5C77;
        transition: background-color 0.1s ease-in-out;
        padding: 1rem;
        color: white;

        :hover {
            background-color: #525255;
        }
    }
`;  

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 3rem;
    align-items: center;

    button {
        color: rgb(230, 244, 245);
        margin: 2rem;
        padding: 1rem;
        border: none;
        border-radius: 3rem;
        background-color:  #4B5C77;
        transition: background-color 0.1s ease-in-out;;

        :hover {
            background-color: #525255;
        }
    }
`;

const Usersettings = (props) => {

    const [ userdata, setUserdata ] = useState(props.location.state)

    function submitUserprofile() {
        sendFetch("/api/edit_user", "PUT", userdata)
    }

    function privateUser() {
        fetch("/api/private_user")
    }

    function unprivateUser() {
        fetch("/api/unprivate_user")
    }

    function deleteAccount() {
        fetch("/api/delete_account")
    }

    function logOut() {
        fetch("/auth/logout")
        localStorage.clear()
        window.location.href="/"
    }

    function handleInput(e) {
        const { name, value }  = e.target
        setUserdata(prev => ({ ...prev, [name]: value }))
    }

    return (
        <Wrapper>
            {userdata &&
            <Wrapper>
            <Formstyled onSubmit={submitUserprofile}>
                <label>Bio:</label>
                <input type="text" value={userdata.bio} onChange={handleInput} name="bio"/>
                <label>Age:</label>
                <input type="number" value={userdata.age} onChange={handleInput} name="age"/>
                <label>Sex:</label>
                <input type="text" value={userdata.sex} onChange={handleInput} name="sex"/>
                <input type="submit" />
            </Formstyled>
            <Buttons>
                {userdata.private_profile ?
                <button onClick={unprivateUser}>Open Profile</button>
                :
                <button onClick={privateUser}>Private Profile</button>
                }   
                <button onClick={deleteAccount}>Delete Account</button>
                <button onClick={logOut}>Log Out</button>
            </Buttons>
            </Wrapper>
            }
        </Wrapper>
    )
}

export default Usersettings;
