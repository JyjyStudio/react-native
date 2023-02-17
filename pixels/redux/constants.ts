export const SET_SELECTION = "SET_SELECTION"
export const SET_SETTINGS = "SET_SETTINGS"

// Types
export type InitialState = {
	users: Users
	selectedUsers: [] | Users
	selectedCategories: Users
}
export type User = {
	id: string
	name: string
	desc: string
	country: string
	category: string
	img: string
	favColor: string
	photos: Photo[]
}
export type Users = User[]
export type Photo = {
	id: number
	photoDesc: string
	title: string
	url: string
}
