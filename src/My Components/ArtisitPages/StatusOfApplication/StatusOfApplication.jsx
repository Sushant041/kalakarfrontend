import "./statusOfApplication.css";
import { useEffect, useState } from "react";
import RejectedApplicationItems from "./RejectedApplicationItems";
import HiredApplicationItems from "./HiredApplicationItems";
import InProgressApplicationItems from "./InProgressApplicationItems";
import AppliedApplicationItems from "./AppliedApplicationItems";
import SaveApplicationItems from "./SaveApplicationItems";
import Artist_navbar from "../Artist_navbar";

const navItems = [
  {
    title: "Saved",
  },
  {
    title: "Applied",
  },
  {
    title: "InProgress",
  },
  {
    title: "Hired",
  },
  {
    title: "Rejected",
  },
];

function StatusOfApplication() {
  const [currentEvent, setCurrentEvent] = useState("Saved");

  useEffect(() => {
    if (sessionStorage.getItem('currentEvent')) {

      setCurrentEvent(sessionStorage.getItem('currentEvent'));
    }
  }, [])

  useEffect(() => {
    sessionStorage.setItem('currentEvent', currentEvent);
  }, [currentEvent])

  return (
    <>
      <Artist_navbar />
      <div className="appli_Info_Wrapper">
        <div className="appli_Info_Container">
          {/* navbar  */}
          

          {/* second navbar heading */}
          <div className="appli_heading_icon_wrapper">
            <p className="appli_info_headline">APPLICATION INFORMATIONS</p>

          </div>
          {/* second navbar */}
          <nav className="appli_info_nav">
            <p className="appli_info_title">APPLICATION INFORMATIONS</p>
            <div className="appli_nav_items">
              {navItems.map((item, index) => (
                <span
                  key={index}
                  onClick={() => setCurrentEvent(item.title)}
                  className={`nav_item ${currentEvent === item.title ? "nav_item_active" : "nav_item"
                    }`}
                >
                  {item.title}
                </span>
              ))}
            </div>
          </nav>
          {currentEvent === navItems[0].title && (
            <SaveApplicationItems currentEvent={currentEvent} />
          )}
          {currentEvent === navItems[1].title && (
            <AppliedApplicationItems currentEvent={currentEvent} />
          )}
          {currentEvent === navItems[2].title && (
            <InProgressApplicationItems currentEvent={currentEvent} />
          )}
          {currentEvent === navItems[3].title && (
            <HiredApplicationItems currentEvent={currentEvent} />
          )}
          {currentEvent === navItems[4].title && (
            <RejectedApplicationItems currentEvent={currentEvent} />
          )}
        </div>

        <footer></footer>
      </div>
    </>
  );
}

export default StatusOfApplication;
