import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client'

export default function Chat() {
    const [message, setMessage] = useState()
    const [room, setRoom] = useState()
    const [messages, setMessages] = useState([])
    const [isJoined, setIsJoined] = useState(false)
    const socket = io("http://localhost:3000", { transports: ["websocket"] })

useEffect(()=>{
    socket.on("joined", () =>{
        setIsJoined(true)
    })
    socket.on("message", (msg) =>{
        setMessages((prev)=>[...prev,msg])
    })
},[room])  //dependency array

    function send() {
        socket.emit("message", message, room)
    }

    function join() {
        socket.emit("join", room)
    }

    return (
        <div>
            {
                !isJoined ?
            <div>
                <input value={room} type="text" placeholder='Enter Room Id' onChange={(e) => setRoom(e.target.value)} />
                <button onClick={ join }>Join</button>
            </div>
            :

            <div>
                {
                    messages.map((mess,index)=>{
                        return(
                            <p key={index}>
                                {mess}
                            </p>
                        )
                    })
                }
            <input value={message} type="text" placeholder='Enter Message' onChange={(e) => setMessage(e.target.value)} />
                <button onClick={ send }>Send</button>
            </div>
            }
        </div>
    )
}
