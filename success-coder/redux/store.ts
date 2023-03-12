import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import coursesSlice from "./slices/courses"

const rootReducer = combineReducers({
	courses: coursesSlice,
})
export const store = configureStore({
	reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
