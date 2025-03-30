import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import { messages } from "../assets/assets";
import { useParams } from "react-router-dom";
 
interface MessageProps{
  messageId:string;
  sender:string;
  subject: string;
  email:string;
  phone:string
}
function ViewMessage() {
  const [ message, setMessage ] = useState<MessageProps>();
  const { messageId } = useParams();
  async function fetchMessage() {
    const newMessage = messages.find(message => message.messageId === messageId)
    setMessage(newMessage)
  }
  useEffect(() => {
    fetchMessage();
  }, [messageId]);
  return (
    <div>
      <div>
        <Title text1="" text2="MESSAGE STATUS" size="heading3 text-green-900" />
        <div className="text-center,w-md border mt-10 rounded-sm border-green-300 p-2 bg-green-50">
          <p className="">
            Sender: <span className="text-green-900">Boris Ayam Ndoh</span>
          </p>
          <p>Message ID: <span className="text-green-900">{messageId}</span></p>
          <p> Email: <span className="text-green-900">borisndoh@gmail.com</span></p>
          <p>Tel: <span className="text-green-900">653775159</span></p>
        </div>
        <div>
          <p className="border shadow shadow-green-100 mt-10 p-5 border-green-100 h-24">
{}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ViewMessage;
