import React from "react";

const ChatHeader = ({ friendName }) => {
  return (
    <div className="flex items-center justify-between bg-[#075E54] p-3 border-b border-gray-300 shadow-sm">
      <div className="text-white font-semibold flex items-center gap-2">
        <img src="/Images/noto--person.svg" alt="Friend" className="w-6 h-6" />
        {friendName}
      </div>
      <div className="flex gap-3">
        <img
          src="/Images/flat-color-icons--search.svg"
          alt="Search"
          className="w-6 h-6 cursor-pointer hover:opacity-70"
        />
        <img
          src="/Images/icons8-menu-vertical-100.png"
          alt="Menu"
          className="w-6 h-6 cursor-pointer hover:opacity-70"
        />
      </div>
    </div>
  );
};

export default ChatHeader;
