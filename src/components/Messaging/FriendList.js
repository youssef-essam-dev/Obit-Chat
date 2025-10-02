import React, { useState, useMemo, useRef, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFriends, deleteFriend, friendsSearch } from "../../slices/ChatSlice"; // adjust path

const FriendList = () => {
  const dispatch = useDispatch();
  const friends = useSelector((state) => state.chat.friends);
  const filteredFriends = useSelector((state) => state.chat.filteredFriends);

  const [addFriendsName, setAddFriendName] = useState(false);
  const [inputFriends, setInputFriends] = useState("");
  const [search, setSearch] = useState("");

  const addInputRef = useRef(null);

  // auto-focus input when shown
  useEffect(() => {
    if (addFriendsName && addInputRef.current) {
      addInputRef.current.focus();
    }
  }, [addFriendsName]);

  const handleAddFriend = useCallback(() => {
    if (!inputFriends.trim()) return;
    dispatch(addFriends({ name: inputFriends.trim(), image: "/Images/icons8-smiling-face-with-sunglasses-94.png" }));
    setInputFriends("");
    setAddFriendName(false);
  }, [dispatch, inputFriends]);

  const toggleAddFriendInput = () => setAddFriendName((p) => !p);

  const searchOnFriends = useCallback((e) => {
    const v = e.target.value;
    setSearch(v);
    dispatch(friendsSearch(v));
  }, [dispatch]);

  const displayedFriends = useMemo(() => (search ? filteredFriends : friends), [search, filteredFriends, friends]);

  return (
    <div className="w-1/3 bg-gray-100 p-4 flex flex-col border-r border-gray-300">
      <label htmlFor="friend-search" className="block text-sm font-medium text-gray-700 mb-1">
        Search friends
      </label>

      <input
        id="friend-search"
        type="search"
        value={search}
        onChange={searchOnFriends}
        placeholder="Search..."
        className="w-full px-3 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-green-300 mb-3"
      />

      {/* friend actions */}
      <div className="mb-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleAddFriendInput}
            aria-label="Add friend"
            className="w-9 h-9 flex items-center justify-center border rounded-full bg-white shadow-sm hover:bg-gray-100 transition"
          >
            <img src="/Images/icons8-add-48.png" alt="Add friend" className="w-5 h-5" />
          </button>

          {addFriendsName && (
            <div className="flex items-center gap-2">
              <input
                ref={addInputRef}
                type="text"
                value={inputFriends}
                onChange={(e) => setInputFriends(e.target.value)}
                placeholder="Enter friend name..."
                className="px-3 py-2 min-w-[140px] border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-300"
                aria-label="New friend name"
              />
              <button
                type="button"
                onClick={handleAddFriend}
                className="px-2 py-2 bg-green-600 text-white rounded-md text-sm hover:bg-green-700 transition"
              >
                Add
              </button>
              <button
                type="button"
                onClick={() => setAddFriendName(false)}
                className="text-sm text-gray-500 hover:text-gray-700 px-2"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>

      {/* friend items */}
      <ul className="h-80 overflow-y-auto pr-2 space-y-3">
        {displayedFriends.length > 0 ? (
          displayedFriends.map((friend) => (
            <li
              key={friend.id}
              className="flex justify-between items-center p-3 rounded-xl bg-white shadow hover:bg-[#ECE5DD] transition"
            >
              <div className="flex items-center gap-3">
                <img src={friend.image} alt={friend.name} className="w-12 h-12 rounded-full object-cover" />
                <span className="text-gray-800 font-medium">{friend.name}</span>
              </div>
              <button
                type="button"
                onClick={() => dispatch(deleteFriend(friend.id))}
                aria-label={`Delete ${friend.name}`}
                className="w-8 h-8 flex items-center justify-center rounded-md bg-gray-100 text-gray-500 hover:bg-red-100 hover:text-red-600 transition"
              >
                <i className="fas fa-trash text-sm"></i>
              </button>
            </li>
          ))
        ) : (
          <li className="text-gray-500 text-sm text-center py-4 bg-white rounded-xl shadow">No friends found</li>
        )}
      </ul>
    </div>
  );
};

export default FriendList;
