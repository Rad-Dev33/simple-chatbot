import { useState } from "react";
import { Chatbot } from "supersimpledev";
import "./ChatInput.css";

export function ChatInput({ setChatMessages, chatMessages }) {
  const [input, setInput] = useState("");
  async function sendMessage() {
    const msg = [
      ...chatMessages,
      {
        message: input,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];

    setChatMessages([
      ...msg,
      {
        message: "...loading",
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);
    setInput("");

    //here we saved a previous array along with the new message in msg and then give that to setmessages along with new message html get renders and generate html3

    const response = await Chatbot.getResponseAsync(input);
    setChatMessages([
      ...msg,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);
  }

  function userInput(event) {
    setInput(event.target.value);
  }

  function userKeyPress(event) {
    if (event.key === "Enter") sendMessage();
    else if (event.key === "Escape") setInput("");
  }

  function clearMessages() {
    localStorage.clear();
    setChatMessages([{}]);
  }

  return (
    <div className="chat-input-container">
      <input
        placeholder="Whats on your mind"
        size="25"
        onChange={userInput}
        value={input}
        onKeyDown={userKeyPress}
        className="chat-input"
      />
      <button onClick={sendMessage} className="send-button">
        Send
      </button>
      <button className="send-button" onClick={clearMessages}>
        Clear
      </button>
    </div>
  );
}
