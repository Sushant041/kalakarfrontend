import React from "react";
import "./ChatScreen.css";
import Avatar from "../../AdminComponent/Avatar/Avatar";
import menu from "../../assets/menu.svg";
import call from "../../assets/call.svg";
import video from "../../assets/video.svg";
import file from "../../assets/fileshare.svg";
import mic from "../../assets/mic.svg";
import camera from "../../assets/camera.svg";
import emoji from "../../assets/emoji.svg";

function ChatScreen() {
  return (
    <div className="admin-chat-screen">
      <div className="chat-header-cont">
        <Avatar styling={{ width: "60px" }} />
        <div className="search-name-last-msg">
          <h2>Freedy</h2>
          <p>Online</p>
        </div>
        <div className="call-icons">
          <img src={call} alt="" width={20} />
          <img src={video} alt="" width={20} />
          <img src={menu} alt="" width={20} />
        </div>
      </div>
      <div className="chat-content-cont">
        <div className="chat-message-cont ">
          <h2>How are You</h2>
          <p>Today,9:12pm</p>
        </div>
        <div className="chat-message-cont recieved-chat">
          <h2>Fine You</h2>
          <p>Today,9:12pm</p>
        </div>
      </div>
      <div className="chat-input-cont">
        <div className="input-cc-left">
          <img src={file} alt="" width="30" />
          <input type="text" placeholder="Type your message here..." />
          <img src={emoji} alt="" width="30" />
          <img src={camera} alt="" width="30" />
        </div>
        <div className="input-cc-right">
          <img src={mic} alt="" width="25" />
        </div>
      </div>
    </div>
  );
}

export default ChatScreen;
