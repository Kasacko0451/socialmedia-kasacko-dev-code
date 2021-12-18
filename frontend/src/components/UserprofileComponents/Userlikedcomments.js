import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Userliked = () => {

    const { id } = useParams()

    const username = id

    const [ liked, setLiked ] = useState([])

    useEffect(() => {
        fetch("/api/get_liked_comments", {
            method: "POST",
            mode: "cors",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ username })    
        })
        .then(res => res.json())
        .then(res => setLiked(res))
    }, [])

    return (
        <div>
            Comments liked by user:
            {liked && liked.length ? liked.map(l => {
                return (
                    <div>
                        {l.comment_content}
                    </div>
                )
            })

            :

            <div>
                No liked comments...
            </div>
        }
        </div>
    )
}

export default Userliked;
