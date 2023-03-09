import { useState } from "react";
import "./App.css";
import io from "socket.io-client";

const socket = io.connect("http://localhost:4000");

function App() {
  const [username, setUsername] = useState("");
  const [roomId, setRoomId] = useState("");
  const joinRoom = () => {
    if (username !== "" && roomId !== "") {
      socket.emit("join_room", roomId);
    }
  };
  return (
    <div className="App">
      <h1>Join a Chat</h1>
      <div style={{ marginBottom: 10 }}>
        <input
          type="text"
          placeholder="Enter your username"
          style={{ marginRight: 10, height: 30 }}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          style={{ height: 30 }}
          type="text"
          placeholder="Enter a room id"
          onChange={(e) => setRoomId(e.target.value)}
        />
      </div>
      <button onClick={joinRoom}>Join a chat</button>
    </div>
  );
}

export default App;
