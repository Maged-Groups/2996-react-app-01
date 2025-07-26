import { configureStore } from '@reduxjs/toolkit'

import userSlice from './slices/userSlice';
import settingSlice from './slices/settingSlice';

const store = configureStore({
    reducer: {
        userSlice,
        settingSlice
    }
});


export default store;