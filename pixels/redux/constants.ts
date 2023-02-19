// Types
export type InitialState = {
	users: Users
	selectedUsers: Users
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
	already_liked?: boolean
}
export type Users = User[]
export type Photo = {
	id: number
	photoDesc: string
	title: string
	url: string
}

export type saved_settings = {
	animals: boolean
	travel: boolean
	cars: boolean
}
