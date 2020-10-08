import React from "react";
import Scroll from "react-scroll-to-bottom";
import "./Messages.css";
import Message from "../Message";

const Messages = ({ messages, name }) => {
    return (
        <Scroll className="messages">
            {messages.map((message, i) => (
                <div key={i}>
                    {" "}
                    <Message message={message} name={name} />{" "}
                </div>
            ))}
        </Scroll>
    );
};

export default Messages;
