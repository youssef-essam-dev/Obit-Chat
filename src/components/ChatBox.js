import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './ChatBox.css'; // Import the CSS file
import { addMessage, deleteMessage, friendsSearch, clearMessages, addFriends, clearFriends, deleteFriend } from '../slices/ChatSlice';
import Picker from '@emoji-mart/react';



const ChatBox = () => {
    const messages = useSelector((state) => state.chat.messages); // Access messages from Redux store
    const friends = useSelector((state) => state.chat.friends); // Access friends from Redux store
    const filteredFriends = useSelector((state) => state.chat.filteredFriends);
    const [addFriendsName, setAddFriendName] = useState(false);
    const [inputFriends, setInputFriends] = useState("")
    const [input, setInput] = useState('');
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    // Reference to the last message    
    const lastMessageRef = useRef(null)

    // Automatically scroll to the latest message
    useEffect(() => {

        if (lastMessageRef.current) {
            lastMessageRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }, [messages])


    useEffect(() => {
        // Load saved messages and friends from localStorage if Redux store has no messages and friends
        const savedMessages = JSON.parse(localStorage.getItem("messages"));
        const savedFriends = JSON.parse(localStorage.getItem("friends"));

        if (savedMessages && savedMessages.length > 0) {
            // Clear current Redux state and load messages from localStorage
            dispatch(clearMessages());
            // Dispatch saved messages to Redux store if Redux store is empty
            savedMessages.forEach((msg) => {
                dispatch(addMessage(msg));
            });
        }

        if (savedFriends && savedFriends.length > 0) {
            // Dispatch saved friends to Redux store if Redux store is empty
            dispatch(clearFriends());
            // Dispatch saved friends to Redux store if Redux store is empty
            savedFriends.forEach((frn) => {
                dispatch(addFriends(frn));
            });
        }

    }
        , [dispatch]);  // Run whenever `messages.length` changes

    // Save messages to local storage whenever `messages` updates
    useEffect(() => {
        // Only save messages , friends to localStorage if they have changed
        if (messages.length > 0 || friends.length > 0) {
            localStorage.setItem("messages", JSON.stringify(messages));
            localStorage.setItem("friends", JSON.stringify(friends));
        }
    }, [messages, friends]);


    /*
    Before the Reload:

        You type a message, submit it, and Redux updates via dispatch(addMessage(newMessage)).
        The message is added to local storage using localStorage.setItem("messages", JSON.stringify(messages)).
        messages in Redux and messages in local storage are both up-to-date.
        After the Reload:

        Redux state resets and loses all previous data; messages in Redux is empty.
        savedMessages is retrieved from local storage, but it’s not part of Redux yet—it's just a regular variable in the component.
        savedMessages.forEach((msg) => dispatch(addMessage(msg))); dispatches each saved message to Redux, making Redux “aware” of these messages again.
    */
    // Load messages from local storage when component mounts


    // Handle sending a new message
    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            // Generate the new message ID based on the current messages
            const maxId = messages.length > 0 ? Math.max(...messages.map(msg => msg.id)) : 0;
            const newId = maxId + 1;
            const timestamp = new Date().toLocaleTimeString();
            dispatch(addMessage({
                id: newId,
                author: 'User',
                content: input,
                timestamp: timestamp
            }));
            setInput('');           // Clear the input field after sending the message
        }
    };

    const handleAddFriend = () => {
        if (inputFriends.trim()) {
            dispatch(addFriends({ name: inputFriends, image: '/Images/icons8-smiling-face-with-sunglasses-94.png' }));
            setInputFriends('');
            setAddFriendName(false); // Optionally, hide the input after adding
        }
    };
    // Handle the search input change
    const searchOnFriends = (e) => {
        const searchValue = e.target.value;
        setSearch(searchValue);
        dispatch(friendsSearch(searchValue)); // Dispatch the search value to filter friends
    };

    const displayedFriends = search ? filteredFriends : friends; // Conditionally display full or filtered list


    const toggleAddFriendInput = () => {
        setAddFriendName((prev) => !prev);
    };

    const handleEmojiSelect = (emoji) => {

        setInput((prevMessage) => (prevMessage + emoji.native))
        setShowEmojiPicker(false) // Close the picker after selection
    }



    return (
        <div className="chat-container"  >
            {/* Header with profile image and icons */}
            <div className="chat-header">
                <div className="chat-header-friends">
                    <img src="/Images/fluent-emoji--person.svg" className="profile-image" />
                    <div className="chat-header-icons">
                        <img src="/Images/flat-color-icons--search.svg" className="header-icon" />
                        <img src="/Images/icons8-menu-vertical-100.png" className="header-icon" />
                    </div>
                </div>
                <div className="chat-header-messages">
                    <div><img src="/Images/noto--person.svg" className="header-icon" /></div>
                    <div><img src="/Images/icons8-menu-vertical-100.png" className="header-icon" /></div>
                </div>
            </div>

            {/* Main content area */}
            <div className="chat-main">
                {/* Friend List */}
                <div className="friend-list">
                    <input
                        className="searchBar_friends"
                        type="search"
                        onChange={searchOnFriends}
                        value={search}
                        placeholder="Search..."
                    />

                    <ul>
                        <img
                            src='/Images/icons8-add-48.png'
                            className='blusIcon'
                            onClick={toggleAddFriendInput}
                        />
                        {addFriendsName && (
                            <>
                                <input
                                    type='text'
                                    value={inputFriends}
                                    onChange={(e) => setInputFriends(e.target.value)}
                                    placeholder='Enter friend name...'
                                  
                                />
                                <button onClick={handleAddFriend} className='btn-rounded'>Add Friend</button>
                            </>
                        )}
                        <div className="friend-list-container"

                        >
                            {displayedFriends.length > 0 ? displayedFriends.map((friend, index) => (

                                <li key={friend.id} className="friend-item">
                                    <div>
                                        <img src={friend.image} className="friend-image" />
                                        {friend.name}
                                    </div>
                                    
                                    <img
                                        className="friend-img"
                                        src="/Images/delete (1).png"
                                        onClick={() => dispatch(deleteFriend(friend.id))}
                                    />
                                </li>
                            )) : (
                                <li>No friends found</li>
                            )
                            }
                        </div>
                    </ul>

                </div>

                {/* Chat Messages */}
                <div className="chat-messages">
                    {messages.map((msg, index) => (
                        <div key={msg.id}
                            className="chat-message"
                            ref={index === messages.length - 1 ? lastMessageRef : null} // Set ref to last message
                        >
                            <div className="sub-chat-message-1">
                                <div className="message-author"> <strong>{msg.author}</strong></div>
                                <img
                                    className="message-img"
                                    src="/Images/delete (1).png"
                                    onClick={() => dispatch(deleteMessage(msg.id))}
                                />
                            </div>
                            <div className="sub-chat-message-2">
                                <div className="message-content">{msg.content}</div>
                                <div className="message-time">{msg.timestamp}</div>
                            </div>
                        </div>
                    ))}

                    {/* Message input form */}
                    <form onSubmit={handleSubmit}>
                        <div className="message-input-container">
                            <img
                                src="/Images/marketeq--mic.svg"
                                className="header-icon mic"
                                alt="Microphone"
                            />
                            <img
                                src="/Images/noto-v1--paperclip.svg"
                                className="header-icon paperclip"
                                alt="Attach"
                            />
                            <button
                                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                                className="emoji-picker-toggle"
                                type="button"
                            >
                                😊
                            </button>
                            {showEmojiPicker && (
                                <Picker
                                    onEmojiSelect={handleEmojiSelect}
                                    theme="light" // or "dark"
                                    emojiSize={24}
                                    title="Pick your emoji"
                                />
                            )}
                        </div>
                        <div className="message-input-line">
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Type a message..."
                            />
                            <button type="submit" className='btn-rounded'>Send</button>
                        </div>


                    </form>

                </div>
            </div>
        </div>
    );
};

export default ChatBox;
