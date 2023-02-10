import { createStackNavigator } from "react-navigation-stack"
import { defaultNavigationOptions, isIos } from "../constants/globals"
import Home from "../screens/Home"
import Likes from "../screens/Likes"
import Photos from "../screens/Photos"

const screens = {
	Likes: {
		screen: Likes,
	},
	Accueil: {
		screen: Home,
	},
	Photos: {
		screen: Photos,
	},
}

const LikesStackNav = createStackNavigator(screens, defaultNavigationOptions)

export default LikesStackNav
