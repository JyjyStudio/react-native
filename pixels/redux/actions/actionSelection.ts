import { SET_SELECTION } from "../constants"

export const setSelection = (id: number) => {
	return {
		type: SET_SELECTION,
		userId: id,
	}
}
