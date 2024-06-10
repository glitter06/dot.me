import { configureStore } from '@reduxjs/toolkit'
import ThemeSlice from '../Slices/Themeslice.ts' 
import TodoSlices from '../Slices/Todoslices.ts'

export const store = configureStore({
    reducer: {
        Theme : ThemeSlice,
        Todo : TodoSlices,
    }
})

export type Rootstate = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch