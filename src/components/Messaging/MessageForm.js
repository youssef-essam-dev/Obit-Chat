import React, { useState, useRef, useEffect } from "react";
import Picker from "@emoji-mart/react";

const MessageForm = ({ input, setInput, handleSubmit }) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const pickerRef = useRef();

  const handleEmojiSelect = (emoji) => {
    setInput((prevMessage) => prevMessage + emoji.native);
    setShowEmojiPicker(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (pickerRef.current && !pickerRef.current.contains(e.target)) {
        setShowEmojiPicker(false);
      }
    };
    if (showEmojiPicker) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showEmojiPicker]);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 p-3 bg-gray-100 border-t border-gray-300"
    >
      {/* Emoji button */}
      <div className="relative">
        <button
          type="button"
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          className="px-3 py-2 border rounded-full bg-white shadow hover:bg-gray-200"
        >
          😊
        </button>
        {showEmojiPicker && (
          <div ref={pickerRef} className="absolute bottom-12 left-0 z-10">
            <Picker
              onEmojiSelect={handleEmojiSelect}
              theme="light"
              emojiSize={24}
              title="Pick emoji"
            />
          </div>
        )}
      </div>

      {/* Input field */}
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 px-4 py-2 border rounded-full focus:ring-2 focus:ring-green-400 outline-none"
      />

      {/* Send button */}
      <button
        type="submit"
        className="px-4 py-2 border bg-green-600 text-white rounded-full shadow hover:bg-green-700"
      >
        <i className="fas fa-paper-plane"></i>
      </button>
    </form>
  );
};

export default MessageForm;
