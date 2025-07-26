import { createSlice } from "@reduxjs/toolkit";


const settingSlice = createSlice({
    name: 'settingSlice',
    initialState: {
        theme: 'light',
        fontSize: 16,
        language: 'en',
    },
    reducers: {
        // 
    }
});

export default settingSlice.reducer; // Initial state