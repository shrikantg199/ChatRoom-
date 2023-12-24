import PropTypes from "prop-types";
import { UserAuth } from "../context/AuthContext";

function Message({ message }) {
  const { currentUser } = UserAuth();
  return (
    <>
      <div
        className={`chat ${
          message.uid === currentUser.uid ? "chat-end mr-2 " : "chat-start"
        } ml-2`}
      >
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src={message.avatar}
            />
          </div>
        </div>
        <div className="chat-header">{message.name}</div>
        <div className="chat-bubble ">{message.chatText}</div>
      </div>
      <div className=" chat chat-end"></div>
    </>
  );
}

Message.propTypes = {
  message: PropTypes.shape({
    uid: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    chatText: PropTypes.string.isRequired,
  }).isRequired,
};

export default Message;
