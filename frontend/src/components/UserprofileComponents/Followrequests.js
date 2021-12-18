import { useState, useEffect } from "react"
import styled from "styled-components"
import sendFetch from "../../utils/sendFetch"
import useFetchGet from "../../hooks/useFetchGet"

const Wrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
`;

const Request = styled.div`
    display: flex;
    font-size: 3rem;
    margin: 1rem;
    padding: 1rem;
    border-radius: 1rem;
    color: white;
    background: #4B5C77;
    align-items: center;

    p {
        margin: 1rem;
    }

    button {

        margin: 1rem;
        border: none;
        border-radius: 1rem;
    }
`;

const Nofollows = styled.div`
    display: flex;
    margin: 4rem;
    padding: 1rem;
    font-size: 3rem;
    align-self: center;
    border-radius: 15%;
    background: rgb(209, 212, 227);
    margin-bottom: auto;

    i {
        margin: 1rem;
        font-size: 4rem;
        color: #4B5C77;
    }
`;

const Followrequests = () => {

    const [ follow_requests, setRequests ] = useState()

    const fetchData = useFetchGet("/api/display_follow_requests")
    
    useEffect(() => setRequests(fetchData), [fetchData])
    
    function accept_follow(e) {
        const user_id = e.target.name
        sendFetch("/api/accept_follow", "POST", { user_id })
        removeFromList(user_id)
    }
    
    function decline_follow(e) {
        const user_id = e.target.name
        sendFetch("/api/decline_follow", "POST", { user_id })
        removeFromList(user_id)
    }

    function removeFromList(e) {
        const array = follow_requests.filter(p => p.id != e)
        setRequests([...array])
    }
    
    return (
        <Wrapper>
        {follow_requests && follow_requests.length ? follow_requests.map(request => {
            return (
                <Request key={request.id}>
                    <p>Request from {request.username}</p>
                    <button name={request.id} onClick={accept_follow}>
                        Accept
                    </button>
                    <button name={request.id} onClick={decline_follow}>
                        Decline
                    </button>
                </Request>
            )
        })
        :
        <Nofollows>
            No follow requests...
            <i className="fas fa-sad-tear"></i>
        </Nofollows>
        }
        </Wrapper>
    )
}

export default Followrequests;
