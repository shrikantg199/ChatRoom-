import ChatBox from "../components/ChatBox";
import Sendmsg from "../components/Sendmsg";
function ChatRoom() {
  return (
    <>
      <div className="bg-gray-800 containerWrap linear backgra">
        <ChatBox />
      </div>
      <Sendmsg></Sendmsg>
    </>
  );
}

export default ChatRoom;
