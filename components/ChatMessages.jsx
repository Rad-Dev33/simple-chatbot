import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage"; //default export
import "./ChatMessages.css";
import dayjs from "dayjs";

export function ChatMessages({ chatMessages }) {
  const chatMessageElement = useRef(null); // here we want to get chat-message-container to manupulate data in js we used dom queryselector to target html element in react use ref we pass the object in the ref in html element

  const time = dayjs().valueOf();
  const displaytime = dayjs(time).format("h:mma");

  useEffect(() => {
    const containerele = chatMessageElement.current;

    if (containerele) {
      containerele.scrollTop = containerele.scrollHeight;
    }

    //whenever ChatMessage updates/renders useEfferect runs everytime/once/when prop updates based on condition where we pass in dependency array
  }, [chatMessages]); //this is dependency array [] if its empty runs once
  //if we dont pass dependency array runs every time
  //chatMessage prop it runs only when chatMessage is updated

  return (
    <div className="chat-message-container" ref={chatMessageElement}>
      {chatMessages.map(
        (
          chatMessages //instead of using return explistly just us =>() implictly return
        ) =>
          chatMessages.message && chatMessages.sender ? (
            <ChatMessage
              message={chatMessages.message}
              sender={chatMessages.sender}
              postedtime={displaytime}
              key={chatMessages.id}
            />
          ) : null
      )}
    </div>
  );
}
