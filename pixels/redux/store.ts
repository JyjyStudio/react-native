import { createStore, combineReducers } from "redux"
import appReducer from "./reducers/appReducer"

const rootReducer = combineReducers({
	users: appReducer,
})

const store = createStore(rootReducer)

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
