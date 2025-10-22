import { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false); 

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true); 

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage.text }),
      });

      if (!res.ok) {
        console.error("Server error", res.status);
        setIsTyping(false);
        return;
      }

      const data = await res.json();
      const botMessage = { sender: "bot", text: data.reply };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error("Network error:", err);
    } finally {
      setIsTyping(false); 
    }
  };

  return (
    <div className="chatbot-container">
      <h1 className="bot-header">AfterShock Chatbot</h1>

      <div className="chatbox">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={msg.sender === "user" ? "message user" : "message bot"}
          >
            {msg.text}
          </div>
        ))}

        {isTyping && (
          <div className="typing-indicator">
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
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
