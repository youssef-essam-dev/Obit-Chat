import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCommentsApi, fetchUsersApi, addMessage } from '../../slices/ChatSlice';
import { nanoid } from '@reduxjs/toolkit';

import ChatHeader from './ChatHeader';
import FriendList from './FriendList';
import MessageList from './MessageList';
import MessageForm from './MessageForm';

const ChatBox = () => {
  const messages = useSelector((state) => state.chat.messages);
  const friends = useSelector((state) => state.chat.friends);
  const messagesStatus = useSelector((state) => state.chat.messagesStatus);
  const friendsStatus = useSelector((state) => state.chat.friendsStatus);

  const dispatch = useDispatch();
  const lastMessageRef = useRef(null);

  const [input, setInput] = useState('');

  useEffect(() => {
    if (messagesStatus === 'idle') {
      dispatch(fetchCommentsApi());
    }
    if (friendsStatus === 'idle') {
      dispatch(fetchUsersApi());
    }
  }, [messagesStatus, friendsStatus, dispatch]);

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      const newId = nanoid();
      const timestamp = new Date().toLocaleTimeString();
      dispatch(addMessage({ id: newId, author: 'User', content: input, timestamp }));
      setInput('');
    }
  };
  return (
    <div className="flex flex-col w-full max-w-[1000px] h-auto rounded-lg bg-[#ECE5DD] shadow-md mx-auto my-4">
      {/* Header */}
      <ChatHeader />

      <div className="flex border border-gray-300 rounded-lg overflow-hidden h-[70vh]">
        {/* Sidebar */}
        <FriendList />

        {/* Chat area */}
        <div className="flex flex-col flex-1 bg-white p-4">
          <div className="flex-1 overflow-y-auto pr-2 mb-2">
            <MessageList messages={messages} lastMessageRef={lastMessageRef} />
          </div>
          <MessageForm input={input} setInput={setInput} handleSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
