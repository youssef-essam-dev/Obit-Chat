import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCommentsApi = createAsyncThunk('chatSlice/fetchCommentsApi', async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments");
    const data = await response.json();
    const limitedData = data.slice(0, 10);
    return limitedData.map(comment => ({
        id: comment.id,
        author: comment.email.split('@')[0], // Simulate an author from email
        content: comment.body,
        timestamp: new Date().toISOString(), 
    })); 
});


export const fetchUsersApi = createAsyncThunk( 'chatSlice/fetchUsersApi' , async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        const limitedData = data.slice(0, 10);
        return limitedData.map(user => ({
            id: user.id,
            name: user.name,
            image: 'default-image-url', // Placeholder for user images
        }));
    });

const chatSlice = createSlice({
    name: 'chatSlice',
    initialState: {
        messages: JSON.parse(localStorage.getItem("messages")) || [],
        friends: JSON.parse(localStorage.getItem("friends")) || [],
        filteredFriends: [],
        messagesStatus: 'idle',
        friendsStatus: 'idle',
        error: null
    }
    ,
    reducers: {
        addMessage: (state, action) => {
            state.messages.push({
                ...action.payload,
            });
        }
        ,
        deleteMessage: (state, action) => {
            const id = action.payload;
            state.messages = state.messages.filter((message) => (message.id !== id))
        }
        ,
        clearMessages: (state, action) => {
            state.messages = [];
        }
        ,
        friendsSearch: (state, action) => {
            const searchValue = action.payload.toLowerCase();
            state.filteredFriends = state.friends.filter(friend => //store the filtered list of friends in a separate variable (not mutate the friends array)
                friend.name.toLowerCase().includes(searchValue)
            );
        },
        addFriends: (state, action) => {

            state.friends.push({ ...action.payload });
        },
        deleteFriend: (state, action) => {
            const id = action.payload;
            state.friends = state.friends.filter((friend) => (friend.id !== id))
        },

        clearFriends: (state, action) => {
            state.friends = [];
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsApi.pending, (state) => {
                state.messagesStatus = 'loading';
            })
            .addCase(fetchCommentsApi.fulfilled, (state, action) => {
                state.messagesStatus = 'succeeded';
                state.messages = action.payload;
                console.log('Fetched Comments:', action.payload);
            })
            .addCase(fetchCommentsApi.rejected, (state, action) => {
                state.messagesStatus = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchUsersApi.pending, (state) => {
                state.friendsStatus = 'loading';
            })
            .addCase(fetchUsersApi.fulfilled, (state, action) => {
                state.friendsStatus = 'succeeded';
                state.friends = action.payload;
            })
            .addCase(fetchUsersApi.rejected, (state, action) => {
                state.friendsStatus = 'failed';
                state.error = action.error.message;
            });
    },

});

export const { addMessage, clearMessages, deleteMessage, friendsSearch, addFriends, clearFriends, deleteFriend } = chatSlice.actions;

export default chatSlice.reducer;


/*


  messages: [
            
            { author: 'Alice', content: 'Hello, how are you?', timestamp: '12:58:25 AM', id: 1 },
            { author: 'Bob', content: 'I’m good, thanks! How about you?', timestamp: '5:38:11 AM' , id: 2 },
            { author: 'Alice', content: 'I’m doing well. Thanks for asking! ', timestamp: '1:28:45 PM' , id: 3 }
             
        ],
        
         messages: {
            1: [
                { author: 'Alice', content: 'Hey Bob!', timestamp: '10:00 AM', id: 1 },
                { author: 'Bob', content: 'Hi Alice!', timestamp: '10:02 AM', id: 2 }
            ],
            2: [
                { author: 'Alice', content: 'Hello, how are you?', timestamp: '12:58 AM', id: 1 },
                { author: 'Bob', content: 'I’m good, thanks! How about you?', timestamp: '5:38 AM', id: 2 },
            
            ],
            3: [
                { author: 'Alice', content: 'Hello, how are you?', timestamp: '12:58 AM', id: 1 },
                { author: 'Bob', content: 'I’m good, thanks! How about you?', timestamp: '5:38 AM', id: 2 },
                
            ]
        }
        
    ,
         
        friends: [
            
            { name: 'Alice', image: '/Images/fluent-emoji--person.svg' , id: 1 },
            { name: 'Bob', image: '/Images/fluent-emoji-flat--person-light.svg', id: 2 },
            { name: 'Charlie', image: '/Images/twemoji--person.svg' , id: 3},
             
        
        filteredFriends: [],

*/