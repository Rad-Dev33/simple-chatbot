import { useState, useEffect } from "react";
import { ChatInput } from "../components/ChatInput"; //named export
import { ChatMessages } from "../components/ChatMessages";
import { Chatbot } from "supersimpledev";
//not need to mention fileextension like .jsx or.js vite automatically does it for u

import "./App.css";

function App() {
  const [chatMessages, setChatMessages] = useState(() => {
    return JSON.parse(localStorage.getItem("message")) || null;
  });

  //const[chatMessages,setChatMessages]=arr; //array destructuring  same as below
  //const chatMessages = arr[0];
  //const setChatMessages = arr[1];
  //instead of using the state in ChatMessages we used in app so that the state can be accessed through different components using the props

  useEffect(() => {
    Chatbot.addResponses({
      "fuck you": "please mind your words before u say anything",
      "who are u?": "i am a chatBot",
    });
  }, []); //this is the custom function where chatbot respose for given input leftsite is the property in which user provides the chatbot response with the valie which is on the right

  useEffect(() => {
    localStorage.setItem("message", JSON.stringify(chatMessages));
  }, [chatMessages]);

  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        setChatMessages={setChatMessages}
        chatMessages={chatMessages}
      />
    </div>
  );
}
export default App;
