import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import userSlice from "./slices/userSlice"

const rootReducer = combineReducers({
	users: userSlice,
})
export const store = configureStore({
	reducer: rootReducer,
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
