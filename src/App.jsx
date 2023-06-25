import { useState } from "react";
import "./App.css";
import io from "socket.io-client";
import ChatPage from "./pages/ChatPage";
import { Link, redirect, useNavigate } from "react-router-dom";

const socket = io.connect("http://localhost:4000");

function App() {
  const [username, setUsername] = useState("");
  const [roomId, setRoomId] = useState("");
  const [showChat, setShowChat] = useState(false);
  const joinRoom = () => {
    if (username !== "" && roomId !== "") {
      socket.emit("join_room", roomId);
    }
  };
  function handleSubmit(e) {
    e.preventDefault();
    if (username && roomId !== "") {
      socket.emit("join_room", roomId);
      setShowChat(true);
    }
  }
  return (
    <div>
      {!showChat ? (
        <div
          className="App"
          style={{
            border: "1px solid lightgrey",
            padding: 40,
            borderRadius: 15,
            height: 300,
          }}
        >
          <h1>Join a Chat</h1>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: 10 }}>
              <input
                type="text"
                placeholder="Enter your username"
                style={{
                  marginRight: 10,
                  height: 50,
                  borderRadius: 10,
                  textAlign: "center",
                  border: "none",
                  outline: "none",
                }}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                style={{
                  height: 50,
                  textAlign: "center",
                  borderRadius: 10,
                  border: "none",
                  outline: "none",
                }}
                type="text"
                placeholder="Enter a room id"
                onChange={(e) => setRoomId(e.target.value)}
              />
            </div>
            {/* <Link to={"/chat"}> */}
            <button style={{ height: 40, borderRadius: 10 }}>
              Join a chat
            </button>
            {/* </Link> */}
          </form>
        </div>
      ) : (
        <ChatPage socket={socket} username={username} room={roomId} />
      )}
    </div>
  );
}

export default App;
