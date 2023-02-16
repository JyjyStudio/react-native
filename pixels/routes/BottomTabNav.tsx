import { Text } from "react-native"
import { createAppContainer } from "react-navigation"
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs"
import { isIos } from "../constants/globals"
import HomeStackNav from "./HomeStackNav"
import colors from "../constants/colors"
import { Entypo } from "@expo/vector-icons"
import { AntDesign } from "@expo/vector-icons"
import LikesStackNav from "./LikesStackNav"
import globalStyle from "../constants/globalStyle"

const RouteConfigs = {
	Accueil: {
		screen: HomeStackNav,
		navigationOptions: {
			tabBarLabel: (
				<Text style={globalStyle.bottomTabLabel}>Accueil</Text>
			),
			tabBarIcon: ({ tintColor }: TabBarIcon) => (
				<Entypo name="home" size={24} color={tintColor} />
			),
		},
	},
	Likes: {
		screen: LikesStackNav,
		navigationOptions: {
			tabBarLabel: <Text style={globalStyle.bottomTabLabel}>Likes</Text>,
			tabBarIcon: ({ tintColor }: TabBarIcon) => (
				<AntDesign name="like1" size={24} color={tintColor} />
			),
		},
	},
}
const MaterialBottomTabNavigatorConfig = {
	activeColor: colors.activeLink,
	inactiveColor: colors.inactiveLink,
	barStyle: {
		backgroundColor: colors.bottomHeader,
		paddingBottom: isIos ? 15 : 5,
		borderTopWidth: 1,
		borderColor: colors.inactiveLink,
	},
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
