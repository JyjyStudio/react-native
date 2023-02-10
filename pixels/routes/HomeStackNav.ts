import { createStackNavigator } from "react-navigation-stack"
import Home from "../screens/Home"
import Likes from "../screens/Likes"
import Photos from "../screens/Photos"
import Profile from "../screens/Profile"
import { defaultNavigationOptions } from "../constants/globals"

const screens = {
	Accueil: {
		screen: Home,
	},
	Profile: {
		screen: Profile,
	},
	Likes: {
		screen: Likes,
	},
	Photos: {
		screen: Photos,
	},
}

const HomeStackNav = createStackNavigator(screens, defaultNavigationOptions)

export default HomeStackNav
