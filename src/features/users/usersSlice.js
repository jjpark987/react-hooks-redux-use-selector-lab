import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: []
    },
    reducers: {
        add: (state, action) => {
            console.log('adding ', action.payload)
            state.users.push(action.payload);
        }
    }
});

export const { add } = usersSlice.actions;
export default usersSlice.reducer;
