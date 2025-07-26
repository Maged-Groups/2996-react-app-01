import { createSlice } from '@reduxjs/toolkit'


const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        username: 'Guest',
        isLoggedin: false
    },
    reducers: {
        // 
    }
});


export default userSlice.reducer; // Inital State