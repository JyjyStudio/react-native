import { createStackNavigator } from "react-navigation-stack"
import Home from "../screens/Home"
import Likes from "../screens/Likes"
import Profile from "../screens/Profile"

const screens = {
	Home: {
		screen: Home,
	},
	Profile: {
		screen: Profile,
	},
	Likes: {
		screen: Likes,
	},
}

const defaultNavigationOptions = {
	defaultNavigationOptions: {
		headerStyle: {
			backgroundColor: "salmon",
		},
		headerTitleAlign: "center" as const,
		headerTintColor: "#fff",
		headerTitleStyle: {
			fontSize: 27,
			fontFamily: "Ubuntu_700Bold",
		},
	},
}

const HomeStackNav = createStackNavigator(screens, defaultNavigationOptions)

export default HomeStackNav
