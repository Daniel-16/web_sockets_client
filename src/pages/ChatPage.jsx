import React, { useState } from "react";

const ChatPage = ({ socket, username, room }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const sendMessage = async (e) => {
    e.preventDefault();
    const messageData = {
      room,
      author: username,
      message: currentMessage,
      time:
        new Date(Date.now()).getHours() +
        ":" +
        new Date(Date.now()).getMinutes(),
    };
    await socket.emit("send_message", messageData);
  };
  return (
    <div>
      <h1>Live Chat</h1>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          style={{ height: 38, marginRight: 10 }}
          placeholder="Enter a message"
          onChange={(e) => setCurrentMessage(e.target.value)}
          required
        />
        <button style={{}}>Send</button>
      </form>
    </div>
  );
};

export default ChatPage;
