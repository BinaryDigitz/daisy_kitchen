import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import { messages } from "../assets/assets";
import { useParams } from "react-router-dom";

interface MessageProps {
  messageId: string;
  sender: string;
  subject: string;
  email: string;
  phone: string;
  message: string;
}
function ViewMessage() {
  const [message, setMessage] = useState<MessageProps>();
  const { messageId } = useParams();
  async function fetchMessage() {
    const newMessage = messages.find(
      (message) => message.messageId === messageId
    );
    setMessage(newMessage);
  }
  useEffect(() => {
    fetchMessage();
  }, [messageId]);
  return (
    <div className="mb-24">
      <div>
        <Title text1="" text2="MESSAGE STATUS" size="heading3 text-green-900" />
        <div className="text-center,w-md border mt-10 rounded-sm border-green-300 p-2 px-4 bg-green-50 lg:w-lg mx-auto">
          <p className="py-1 flex gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="green"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
            Sender: <span className="text-green-900">{message?.sender}</span>
          </p>
          <p className="flex gap-3 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="green"><path d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/></svg>
            Message ID: <span className="text-green-900">{messageId}</span>
          </p>
          <p className="py-1 flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="green"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
            Email: <span className="text-green-900">{message?.email}</span>
          </p>
          <p className="flex gap-3 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="green"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>
            Tel:
            <span className="text-green-900">{message?.phone}</span>
          </p>
        </div>
        <div>
          <div className="border shadow shadow-green-100 mt-10 p-5 border-green-100 lg:w-3xl mx-auto">
            <p className="text-gray-500">
              Subject:{" "}
              <span className="text-gray-700 ">{message?.subject}</span>
            </p>
            <p className="mt-5 text-gray-700">{message?.message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewMessage;
