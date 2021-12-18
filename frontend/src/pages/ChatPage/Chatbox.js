import { useState, useEffect, useRef } from "react";
import { useParams, useHistory } from "react-router-dom";
import receiveFetch from "../../utils/receiveFetch";
import styled from "styled-components";
import { io } from "socket.io-client"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 100vh;

	* {
    	font-size: 2.1rem;
		  display: flex;
  	}
`;

const Title = styled.div`
  background-color: lightgray;
  position: sticky;
  top: 0;
  word-break: break-all;
  justify-content: space-between;
`;

const Chat = styled.div`
	flex-direction: column;
  padding-top: 1rem;
`;

const Chatdiv = styled.div`
  flex:1;
`;

const Mess = styled.div`
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
	  max-width: 60%;
	  border-radius: 1rem;
    padding: 0.5rem;
	  word-break: break-all;
    flex-direction: column;
`;

const Rightmess = styled(Mess)`
  margin-right: 0.5rem;
  margin-left: auto;
  color: white;
  background: #4B5C77;
  
`;

const Leftmess = styled(Mess)`
  margin-left: 0.5rem;
  color: black;
  background: #acb0ad;
`;

const Date = styled.div`
  font-size: 1.2rem;
`;

const Formstyled = styled.form`
  margin-top: auto;
  position: sticky;
  bottom: 0;
  border: solid gray 0.2rem;

  input[type=text] {
    width: 100%;
    border: none;
    outline: none;
  }

  button {
    background: white;
    border: none;
    align-self: center;
    font-size: 3.5rem;
  }
`;

const Chatbox = () => {

  const socket = io.connect()

  const sendername = localStorage.getItem("user");

  const history = useHistory()
  const fieldRef = useRef(null);
  const { id } = useParams()

  const [ chat, setChat ] = useState([]);
  const [ newMessage, setNewMessage ] = useState({ username: id, msg: "", sendername });

  useEffect(() => {
    async function getData() {
      const info = { id, sendername }
      const res = await receiveFetch("/api/get_chat", "POST", info)
      setChat(res)
      fieldRef.current.scrollIntoView();
    }
    
    getData()

    socket.on("message", message => {
      if (message.sendername == id || sendername)
        setChat(prev => [...prev, message])
        fieldRef.current.scrollIntoView();
    })
  }, [])

  function sendMessage(e) {
    e.preventDefault()
    if (newMessage.msg) {
      socket.emit("send_chat_message", newMessage)
      setNewMessage(prev => ({ ...prev, msg: "" }))
      setChat(prev => [...prev, newMessage])
    }
  }

  const handleInput = e => setNewMessage((prevInfo) => ({ ...prevInfo, msg: e.target.value }))
    
  const goBack = () => history.goBack()
  
  return (
    <Wrapper>
            <Title>Chatting with {newMessage.username} <button onClick={goBack}>Back</button></Title>

			      <Chat>
                  	{chat.length ? chat.map(message => {
                  	    return (
                  	      	<Chatdiv key={message.id}>
                  	      		{sendername == message.sendername ? 

                  	      		<Rightmess>
                                <Date>{message.to_char}</Date>
                                <div>{message.msg}</div>
                              </Rightmess>
                       
                  	      		: 

                              <Leftmess>
                                <Date>{message.to_char}</Date>
                                <div>{message.msg}</div>
                              </Leftmess>
                  	      		           
                  	      		}
                  	      	</Chatdiv>
                  	    )
                  	})	
                  
                  	:
                  
                  	<div>
                  	  No chat messages...
                  	</div>
                  	}
			      </Chat>
            <div ref={fieldRef}></div>
            <Formstyled onSubmit={sendMessage}>
              <input 
                autoComplete="off" 
                type="text" 
                placeholder="Write a message..." 
                name="msg" 
                value={newMessage.msg} 
                onChange={handleInput} 
              />
              <button type="submit" className="fas fa-arrow-circle-right"/>
            </Formstyled>
    </Wrapper>
  )
};

export default Chatbox;
