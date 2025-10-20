import { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input) return;

    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);
    setInput("");

    // Call backend API
    try {
        const res = await fetch("/api/chat", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ message: userMessage.text })
});

if (!res.ok) {
  console.error("Server error", res.status);
  return;
}

const data = await res.json();
const botMessage = { sender: "bot", text: data.reply };
setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
        console.error("Network error:", err);
    }
  };

  return (
    <div className="chatbot-container">
      <h1>AfterShock Chatbot</h1>
      <div className="chatbox">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={msg.sender === "user" ? "message user" : "message bot"}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          placeholder="Type a message..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}
