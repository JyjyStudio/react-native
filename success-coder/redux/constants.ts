// Types
export type InitialState = {
	courses?: Courses
	theme?: "dark" | "light"
}
export type Courses = {
	id: string
	title: string
	description: string
	image: string
	price: number
	selected: boolean
	instructorId: string
}[]
