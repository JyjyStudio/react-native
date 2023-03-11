import React, { useContext } from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeStackNav from "./HomeStackNav"
import Settings from "../screens/Settings"
import { MaterialIcons } from "@expo/vector-icons"
import { ThemeContext } from "../context/ThemeProvider"

const Tab = createBottomTabNavigator()

export default function BottomTabNav() {
	const { colors } = useContext(ThemeContext)

	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName = null
					if (route.name === "Home") {
						iconName = "home"
						size = focused ? 35 : 30
					} else if (route.name === "Settings") {
						iconName = "settings"
						size = focused ? 35 : 30
					}
					return <MaterialIcons name={iconName} size={size} color={color} />
				},
			})}
			tabBarOptions={{
				showLabel: false,
				activeTintColor: colors.active,
				inactiveTintColor: colors.inactive,
				tabStyle: { height: 65 },
				style: { height: 60, backgroundColor: colors.background },
			}}
		>
			<Tab.Screen
				name="Home"
				component={HomeStackNav}
				options={{
					tabBarBadge: 1,
					tabBarBadgeStyle: {
						fontSize: 12,
						backgroundColor: colors.tabBarBadge,
					},
				}}
			/>
			<Tab.Screen name="Settings" component={Settings} options={{ title: "Réglages" }} />
		</Tab.Navigator>
	)
}
