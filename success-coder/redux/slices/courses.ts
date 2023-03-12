import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { COURSES } from "../../data/mockedData"
import { InitialState } from "../constants"

const initialState: InitialState = {
	courses: COURSES,
}

const courses = createSlice({
	name: "users",
	initialState,
	reducers: {
		like: (state, action: PayloadAction<any>) => {
			state.courses.push(action.payload)
		},
		unlike: (state, action: PayloadAction<string>) => {
			state.courses = state.courses.filter(
				(user) => JSON.parse(JSON.stringify(user)).id !== action.payload
			)
		},
	},
})
export const { like, unlike } = courses.actions

export default courses.reducer
