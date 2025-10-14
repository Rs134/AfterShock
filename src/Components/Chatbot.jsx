import { useState } from "react";
import axios from "axios";

function Chatbot() {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const sendMessage = async () => {
    if (!message) return;

    const userMessage = { role: "user", content: message };
    const updatedHistory = [...chatHistory, userMessage];

    try {
      const res = await axios.post("http://localhost:5000/api/chat", {
        message,
        history: chatHistory,
      });

      setChatHistory([...updatedHistory, { role: "assistant", content: res.data.reply }]);
      setMessage("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>AfterShock Chatbot</h1>
      <div className="chat-window">
        {chatHistory.map((msg, index) => (
          <div key={index} className={msg.role}>
            <strong>{msg.role === "user" ? "You" : "AI"}:</strong> {msg.content}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Chatbot;
