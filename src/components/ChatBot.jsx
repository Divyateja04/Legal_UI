import { useState, useContext, useRef, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import "../App.css";

function ChatBot() {
  const { extractedText } = useContext(DataContext);
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const msgEndRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    msgEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    setInput("");

    try {
      const response = await fetch("http://127.0.0.1:5000/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: input,
          context: extractedText,
        }),
      });

      const data = await response.json();
      const botMsg = { sender: "bot", text: data.answer };

      setMessages((prev) => [...prev, botMsg]);

    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠ Network error. Try again." },
      ]);
    }
  };

  return (
    <>
      {!open && (
        <div className="chatbot-bubble" onClick={() => setOpen(true)}>
          🤖
        </div>
      )}

      {open && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            Legal AI Assistant
            <span className="chatbot-close" onClick={() => setOpen(false)}>
              ✖
            </span>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`msg ${msg.sender === "user" ? "msg-user" : "msg-bot"}`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={msgEndRef}></div>
          </div>

          <div className="chatbot-input">
            <input
              placeholder="Ask something about the judgment..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatBot;
