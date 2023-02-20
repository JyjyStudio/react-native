import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { DATA } from "../../data/data"
import { InitialState, saved_settings, User } from "../constants"

const initialState: InitialState = {
	users: DATA,
	likedUsers: [],
	selectedCategories: DATA,
}

const userSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		like: (state, action: PayloadAction<User>) => {
			state.likedUsers.push(action.payload)
		},
		unlike: (state, action: PayloadAction<string>) => {
			state.likedUsers = state.likedUsers.filter(
				(user) => JSON.parse(JSON.stringify(user)).id !== action.payload
			)
		},
		save_settings: (state, action: PayloadAction<saved_settings>) => {
			const usedSettings = action.payload
			state.selectedCategories = state.users.filter((user) => {
				if (usedSettings.animals && user.category === "animals") {
					return true
				}
				if (usedSettings.travel && user.category === "travel") {
					return true
				}
				if (usedSettings.cars && user.category === "cars") {
					return true
				}
			})
		},
	},
})
export const { like, unlike, save_settings } = userSlice.actions

export default userSlice.reducer
