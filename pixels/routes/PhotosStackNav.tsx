import { createStackNavigator } from "react-navigation-stack"
import colors from "../constants/colors"
import { isIos } from "../constants/globals"
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

const defaultNavigationOptions = {
	defaultNavigationOptions: {
		headerStyle: {
			backgroundColor: isIos ? colors.iosHeader : colors.androidHeader,
		},
		headerTitleAlign: "center" as const,
		headerTintColor: "#fff",
		headerTitleStyle: {
			fontSize: 27,
			fontFamily: "Ubuntu_700Bold",
		},
	},
}

const PhotosStackNav = createStackNavigator(screens, defaultNavigationOptions)

export default PhotosStackNav
