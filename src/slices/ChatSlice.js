import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        messages: [
            { author: 'Alice', content: 'Hello, how are you?', timestamp: '12:58:25 AM', id: 1 },
            { author: 'Bob', content: 'I’m good, thanks! How about you?', timestamp: '5:38:11 AM' , id: 2 },
            { author: 'Alice', content: 'I’m doing well. Thanks for asking! ', timestamp: '1:28:45 PM' , id: 3 }
        ],
        friends: [
            { name: 'Alice', image: '/images/fluent-emoji--person.svg' , id: 1 },
            { name: 'Bob', image: '/images/fluent-emoji-flat--person-light.svg', id: 2 },
            { name: 'Charlie', image: '/images/twemoji--person.svg' , id: 3},
        ],
        filteredFriends: []
    }
    ,
    reducers: {
        addMessage: (state, action) => {
            state.messages.push({
                ...action.payload,
            });
        }
        ,
        deleteMessage : (state , action) => {
            const id = action.payload;
            state.messages =  state.messages.filter(( message ) => ( message.id !== id ))
        }
        ,
        clearMessages: (state, action) => {
            state.messages = [];
        }
        ,
        friendsSearch: (state, action) => {
            const searchValue = action.payload.toLowerCase();
            state.filteredFriends  = state.friends.filter(friend => //store the filtered list of friends in a separate variable (not mutate the friends array)
                friend.name.toLowerCase().includes(searchValue)
            );
        },
        addFriends: (state , action) => {

            state.friends.push({  ...action.payload  });
        },
        deleteFriend :  (state , action) => {
            const id = action.payload;
            state.friends =  state.friends.filter(( friend ) => ( friend.id !== id ))
        },

        clearFriends: (state, action) => {
            state.friends = [];
        }
        
       
    }
});

export const { addMessage, clearMessages , deleteMessage ,friendsSearch ,addFriends ,clearFriends ,deleteFriend} = chatSlice.actions;

export default chatSlice.reducer;