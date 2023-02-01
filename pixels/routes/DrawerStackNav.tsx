import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"
import Faq from "../screens/Faq"
import Home from "../screens/Home"


const Drawer = createDrawerNavigator()

export default function DrawerStackNav() {
	return (
		<NavigationContainer>
			<Drawer.Navigator initialRouteName="Home">
				<Drawer.Screen name="Home" component={Home} />
				<Drawer.Screen
					name="FAQ"
					component={Faq}
				/>
			</Drawer.Navigator>
		</NavigationContainer>
	)
}
