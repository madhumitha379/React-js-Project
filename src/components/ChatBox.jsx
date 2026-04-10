import React, { useState } from "react";

function ChatBox() {

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([]);

  const sendMessage = () => {

    if (message.trim() !== "") {
      setMessages([...messages, message]);
      setMessage("");
    }

  };

  return (
    <div className="chatbox">

      <h3>Chat</h3>

      <div className="messages">

        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}

      </div>

      <input
        type="text"
        value={message}
        placeholder="Type message..."
        onChange={(e) => setMessage(e.target.value)}
      />

      <button onClick={sendMessage}>
        Send
      </button>

    </div>
  );
}

export default ChatBox;