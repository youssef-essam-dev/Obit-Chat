import React from "react";
import { useDispatch } from "react-redux";
import { deleteMessage } from "../../slices/ChatSlice";

const MessageList = ({ messages, lastMessageRef }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-3">
      {messages.map((msg, index) => {
        const isUser = msg.author === "User";
        return (
          <div
            key={msg.id}
            ref={index === messages.length - 1 ? lastMessageRef : null}
            className={`max-w-[70%] p-3 rounded-lg shadow relative ${
              isUser
                ? "ml-auto bg-green-200 text-right"
                : "mr-auto bg-gray-200 text-left"
            }`}
          >
            <div className="flex justify-between items-center mb-1">
              <span className="font-semibold text-sm">{msg.author}</span>
              <i
                className="fas fa-trash text-red-500 text-xs cursor-pointer ml-2 hover:opacity-80"
                onClick={() => dispatch(deleteMessage(msg.id))}
              ></i>
            </div>

            <div className="text-gray-800 text-sm break-words">{msg.content}</div>

            <div className="flex justify-end gap-2 mt-1 text-xs text-gray-500">
              <span>{msg.timestamp.split(" ")[0]}</span>
              <span>{msg.timestamp.split(" ")[1]}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MessageList;
