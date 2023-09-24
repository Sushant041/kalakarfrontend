import React from "react";
import Chat from "../AdmiChatPage/Chat";
import { useLocation } from "react-router-dom";
import RootContact from "./ContactComponent/Root/RootContact";

function Contact() {
  const { pathname } = useLocation();

  return (
    <div>
      {pathname == "/admin/contact" && <RootContact />}
      {pathname == "/admin/contact/chat" && <Chat />}
    </div>
  );
}

export default Contact;
