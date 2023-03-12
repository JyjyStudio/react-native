import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { InitialState } from "../constants"

const initialState: InitialState = {
	theme: "dark",
}

const theme = createSlice({
	name: "users",
	initialState,
	reducers: {
		toggleTheme: (state, action: PayloadAction<any>) => {
			state.courses.push(action.payload)
		},
	},
})
export const { toggleTheme } = theme.actions

export default theme.reducer
