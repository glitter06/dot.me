import { configureStore } from '@reduxjs/toolkit'
import ThemeSlice from '../Slices/Themeslice.ts' 

export const store = configureStore({
    reducer: {
        Theme : ThemeSlice,
    }
})

export type Rootstate = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch