import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import Home from "../screens/Home"
import Photos from "../screens/Photos"
import Portfolio from "../screens/Portfolio"

const screens = {
	Home: {
		screen: Home,
	},
	Portfolio: {
		screen: Portfolio,
	},
	Photos: {
		screen: Photos,
	},
}
const StackNav = createStackNavigator(screens)

export default createAppContainer(StackNav)
