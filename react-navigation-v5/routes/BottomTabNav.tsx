import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import DrawerStackNav from "./HomeStackNav"
import Settings from "../screens/Settings"
import { MaterialIcons } from "@expo/vector-icons"
import { Colors } from "../constants/colors"

const Tab = createBottomTabNavigator()

export default function BottomTabNav() {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName = null
					if (route.name === "Home") {
						iconName = "home"
						size = focused ? 30 : 25
					} else if (route.name === "Settings") {
						iconName = "settings"
						size = focused ? 30 : 25
					}
					return <MaterialIcons name={iconName} size={size} color={color} />
				},
			})}
			tabBarOptions={{
				showLabel: false,
				activeTintColor: Colors.active,
				inactiveTintColor: Colors.inactive,
			}}
		>
			<Tab.Screen
				name="Home"
				component={DrawerStackNav}
				options={{
					title: "Accueil BottomTabNav",
					tabBarBadge: 8,
				}}
			/>
			<Tab.Screen name="Settings" component={Settings} />
		</Tab.Navigator>
	)
}
