import React from "react"
import { createDrawerNavigator } from "react-navigation-drawer"
import { createAppContainer } from "react-navigation"
import Faq from "../screens/Faq"
import BottomTabNav from "./BottomTabNav"
import colors from "../constants/colors"

const RouteConfig = {
	Home: {
		screen: BottomTabNav,
		navigationOptions: {
			drawerLabel: "Accueil",
		},
	},
	Faq: {
		screen: Faq,
		navigationOptions: {
			drawerLabel: "FAQ",
		},
	},
}

const DrawerNavigatorConfig = {
	hideStatusBar: true,
	drawerBackgroundColor: colors.dark,
	drawerWidth: 110,
	drawerType: "slide",
	contentOptions: {
		labelStyle: {
			fontSize: 19,
		},
		inactiveTintColor: colors.light,
		activeTintColor: colors.selected,
	},
}

const MainNavigator = createDrawerNavigator(RouteConfig, DrawerNavigatorConfig)
export default createAppContainer(MainNavigator)
