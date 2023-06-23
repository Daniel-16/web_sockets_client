import React, { useState, useEffect } from "react";

const ChatPage = ({ socket, username, room }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [receivedMessage, setReceivedMessage] = useState([]);
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
    setReceivedMessage((list) => [...list, messageData.message]);
    setCurrentMessage("");
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log(data);
      setReceivedMessage((list) => [...list, data.message]);
    });
  }, []);

  return (
    <div>
      <h1>Live Chat</h1>
      <ul>
        {receivedMessage.map((message) => (
          <li key={Math.random()}>{message}</li>
        ))}
      </ul>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={currentMessage}
          style={{ height: 38, marginRight: 10, borderRadius:10, outline: "none", border: "none", textAlign: "center" }}
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
