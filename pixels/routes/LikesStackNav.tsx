import { createStackNavigator } from "react-navigation-stack"
import colors from "../constants/colors"
import { isIos } from "../constants/globals"
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

const LikesStackNav = createStackNavigator(screens, defaultNavigationOptions)

export default LikesStackNav