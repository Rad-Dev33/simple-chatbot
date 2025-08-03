import Robotimg from "../src/assets/robot.png";
import Userimg from "../src/assets/user.png";
import "./ChatMessage.css";

function ChatMessage({ message, sender, postedtime }) {
  //shotcut of destructuring which we are giving parameters in the function
  //const mes = prop.message; //prop is dom means prop is an object message and sender are properties and when we prop.message we get value of the property
  //const sender = prop.sender;
  //const{message,sender}=prop; //shotcut for the above destructuring

  return (
    <div
      className={sender === "user" ? "chat-message-user" : "chat-message-robot"}
    >
      {sender === "robot" && <img src={Robotimg} className="image-icon" />}
      <div className="chat-message-text">
        {message}
        {message ? <div>{postedtime}</div> : ""}
        {console.log(message)}
      </div>

      {sender === "user" && <img src={Userimg} className="image-icon" />}
    </div>
  );
}

export default ChatMessage;
