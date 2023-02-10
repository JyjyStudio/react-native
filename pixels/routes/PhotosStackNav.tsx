import { createStackNavigator } from "react-navigation-stack"
import { defaultNavigationOptions } from "../constants/globals"
import Home from "../screens/Home"
import Photos from "../screens/Photos"
import Likes from "../screens/Likes"

const screens = {
	Photos: {
		screen: Photos,
	},
	Likes: {
		screen: Likes,
	},
	Accueil: {
		screen: Home,
	},
}

const PhotosStackNav = createStackNavigator(screens, defaultNavigationOptions)

export default PhotosStackNav
