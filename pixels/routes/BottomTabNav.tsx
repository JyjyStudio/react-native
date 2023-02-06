import { createAppContainer } from "react-navigation"
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs"
import HomeStackNav from "./HomeStackNav"
import colors from "../constants/colors"
import Likes from "../screens/Likes"
import { Entypo } from "@expo/vector-icons"
import { AntDesign } from "@expo/vector-icons"

const RouteConfigs = {
	Home: {
		screen: HomeStackNav,
		navigationOptions: {
			tabBarLabel: "Accueil",
			tabBarIcon: ({ tintColor }: TabBarIcon) => (
				<Entypo name="home" size={24} color={tintColor} />
			),
		},
	},
	Likes: {
		screen: Likes,
		navigationOptions: {
			title: "Likes",
			tabBarIcon: ({ tintColor }: TabBarIcon) => (
				<AntDesign name="like1" size={24} color={tintColor} />
			),
		},
	},
}
const MaterialBottomTabNavigatorConfig = {
	activeColor: colors.selected,
	inactiveColor: colors.light,
	// headerLayoutPreset: 'center'
}

const BottomTabNav = createMaterialBottomTabNavigator(
	RouteConfigs,
	MaterialBottomTabNavigatorConfig
)

interface TabBarIcon {
	focused?: boolean
	horizontal?: boolean
	tintColor?: string
}

export default createAppContainer(BottomTabNav)
