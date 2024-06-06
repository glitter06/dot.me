import { createSlice } from "@reduxjs/toolkit";

const initialState : boolean = false;


const ThemeSlice = createSlice({
    name : "theme",
    initialState,
    reducers: {
        handleToggle: (state) => {
            return !state 
        },
    }
})

export const { handleToggle } = ThemeSlice.actions;
export default ThemeSlice.reducer;