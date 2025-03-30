import { Title } from "./exporComp";
import { messages } from "../assets/assets.ts";
import { Link } from "react-router-dom";

function Messages() {
  return (
    <div className=" max-w-full">
      <Title text1="" text2="MESSAGES" size="heading4 text-green-900" />
      <h3 className="text-lg p-2 lg:text-2xl ">Year: 2025</h3>
      <table className="border border-green-100 w-full lg:w-5xl mx-auto p-5">
        <thead>
          <tr className="flex items-center justify-between border border-green-200 p-4 bg-green-100 text-green-900 text-md text-center text-sm md:text-[18px] ">
            <td className="">MessageId</td>
            <td>Sender</td>
            <td>Subject</td>
            <td>Date</td>
          </tr>
        </thead>
        <tbody>
          {messages.map((message) => (
            <Link to={`/message/${message.messageId}`}>
              <tr
                title="View message"
                key={message.messageId}
                className="flex hover:bg-green-100 cursor-pointer items-center justify-between p-4 bg-green-50 border border-green-100 text-green-900 text-md text-center text-sm md:text-[18px] "
              >
                <td>{message.messageId}</td>
                <td>{message.sender}</td>
                <td>{message.subject}</td>
                <td>{message.Date}</td>
              </tr>
            </Link>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Messages;
