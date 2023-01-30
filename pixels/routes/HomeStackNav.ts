import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import Home from "../screens/Home"
import Photos from "../screens/Photos"
import Profile from "../screens/Profile"

const screens = {
	Home: {
		screen: Home,
	},
	Profile: {
		screen: Profile,
	},
	Photos: {
		screen: Photos,
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

const StackNav = createStackNavigator(screens, defaultNavigationOptions)

export default createAppContainer(StackNav)
