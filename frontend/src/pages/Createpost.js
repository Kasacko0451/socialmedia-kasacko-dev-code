import { useState } from "react"
import styled from "styled-components";
import sendFetch from "../utils/sendFetch"

const Form = styled.form`
    display: flex;
    font-size: 3rem;
    flex-direction: column;
    margin: 2rem;

    h1 {
        font-size: 4rem;
        align-self: center;
        padding: 1rem;
    }

    textarea {
        height: 15rem;
    }

    input[type=text] {
        border: none;
        border-bottom: solid 0.2rem black;
        outline: none;
    }

    input[type=submit] {
        border: none;
        border-radius: 2rem;
        background-color: #4B5C77;
        transition: background-color 0.2s ease-in-out;
        padding: 1rem;
        align-self: flex-end;
        margin-right: 1rem;
        padding-left: 2rem;
        padding-right: 2rem;
        color: white;

        :hover {
            background-color: #525255;
        }
    }

    div {
        color: red;
        font-size: 3rem;
        align-self: center;
    }
`;

const Createpost = () => {
    
    const [ postinfo, setPostinfo ] = useState({ post_title: "", post_content: "" });
    const [ errorinfo, setErrorinfo ] = useState("")

    function sendpostinfo(e) {
        e.preventDefault()
        if (postinfo.post_content && postinfo.post_title) {
            sendFetch("/api/create_post", "POST", postinfo)
            window.location.href = "/"
        } else {
            setErrorinfo("One of the fields is empty*")
        }
    }

    function handleInput(e) {
        const { name, value } = e.target
        setPostinfo(prevInfo =>  ({ ...prevInfo, [name]: value }))
    }

    return ( 
        <Form onSubmit={sendpostinfo} enctype="multipart/form-data">
            <h1>Create a new post</h1>
            Title:
            <input 
                type="text" 
                name="post_title" 
                onChange={handleInput}
            />
            Content:
            <textarea 
                placeholder="Be nice..."
                type="text" 
                name="post_content" 
                onChange={handleInput}
            />
            <br/>
            <input type="Submit" defaultValue="Submit Post" />
            <div>{errorinfo}</div>
        </Form>
    )
}

export default Createpost;
