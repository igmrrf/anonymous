import React, { useState, useEffect } from "react";
import Query from "query-string";
import io from "socket.io-client";
import "./Chat.css";
import InfoBar from "../InfoBar";
import Messages from "../Messages";
import Input from "../Input";
// import TextContainer from "../TextContainer";

let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const ENDPOINT = "https://contact-chat.herokuapp.com";

    useEffect(() => {
        const { room, name } = Query.parse(location.search);

        socket = io(ENDPOINT);
        setName(name);
        setRoom(room);

        socket.emit("join", { name, room }, () => {});
        return () => {
            socket.emit("disconnect");
            socket.off();
        };
    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on("message", (message) => {
            setMessages([...messages, message]);
        });
    }, [messages]);
    

    const sendMessage = (event) => {
        event.preventDefault();
        if (message) {
            socket.emit("sendMessage", message, () => setMessage(""));
        }
    };

    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBar room={room} />
                <Messages messages={messages} name={name} />
                <Input
                    message={message}
                    sendMessage={sendMessage}
                    setMessage={setMessage}
                />
                {/* <TextContainer users={users} /> */}
            </div>
        </div>
    );
};

export default Chat;
