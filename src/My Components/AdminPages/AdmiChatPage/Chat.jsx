import React, { useState } from "react";
import "./Chat.css";
import SearchPeople from "./SearchPeople/SearchPeople";
import ChatScreen from "./ChatScreen/ChatScreen";
import Avatar from "../AdminComponent/Avatar/Avatar";

function Chat() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="root-admin-cont">
      <div className="top-admin-cont">
        <div className="admin-status-btn-container ad-chat">
          <Avatar styling={{ alignSelf: "center", width: "150px" }} />
          <button
            className={
              activeTab === 1
                ? `admin-status-btn active-btnn`
                : `admin-status-btn`
            }
            onClick={() => setActiveTab(1)}
          >
            Dashboard
          </button>
          <button
            className={
              activeTab === 2
                ? `admin-status-btn active-btnn`
                : `admin-status-btn`
            }
            onClick={() => setActiveTab(2)}
          >
            View Artist
          </button>
          <button
            className={
              activeTab === 3
                ? `admin-status-btn active-btnn`
                : `admin-status-btn`
            }
            onClick={() => setActiveTab(3)}
          >
            View Applicants
          </button>
          <button
            className={
              activeTab === 4
                ? `admin-status-btn active-btnn`
                : `admin-status-btn`
            }
            onClick={() => setActiveTab(4)}
          >
            View Courses and Products
          </button>
          <button
            className={
              activeTab === 5
                ? `admin-status-btn active-btnn`
                : `admin-status-btn`
            }
            onClick={() => setActiveTab(5)}
          >
            Contact
          </button>
        </div>

        {activeTab === 5 && (
          <div className="admin-chat-section">
            <div className="admin-search-section">
              <div className="search-cont">
                <input type="text" placeholder="Search" />
              </div>
              <div className="people-cont">
                <h1>People</h1>
                <SearchPeople
                  name="freedy"
                  unread="2"
                  msg="hlo"
                  time="Today,9:12pm"
                />
                <SearchPeople
                  name="Dael Steyn"
                  unread="2"
                  msg="hellleo"
                  time="Yesterday,9:12pm"
                />
                <SearchPeople
                  name="Clark"
                  unread="1"
                  msg="hlo"
                  time="Today,1:12pm"
                />
              </div>
            </div>
            <div className="admin-chat-cc">
              <ChatScreen />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Chat;
