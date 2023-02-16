import { createStackNavigator } from "react-navigation-stack"
import { defaultNavigationOptions } from "../constants/globals"
import Home from "../screens/Home"
import Likes from "../screens/Likes"

const screens = {
	Likes: {
		screen: Likes,
	},
	Accueil: {
		screen: Home,
	},
}

const LikesStackNav = createStackNavigator(screens, defaultNavigationOptions)

export default LikesStackNav
