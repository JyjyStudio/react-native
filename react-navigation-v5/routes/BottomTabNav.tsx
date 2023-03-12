import React, { useContext } from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeStackNav from "./HomeStackNav"
import { ThemeContext } from "../context/ThemeProvider"
import { MaterialIcons } from "@expo/vector-icons"
import Settings from "../screens/Settings"

const Tab = createBottomTabNavigator()

export default function BottomTabNav() {
	const { colors } = useContext(ThemeContext)

	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					size = focused ? 35 : 30
					let iconName = null
					if (route.name === "Home") {
						iconName = "home"
					} else if (route.name === "Settings") {
						iconName = "settings"
					}
					return <MaterialIcons name={iconName} size={size} color={color} />
				},
			})}
			tabBarOptions={{
				showLabel: false,
				activeTintColor: colors.active,
				inactiveTintColor: colors.inactive,
				tabStyle: { height: 65 },
				style: { height: 65, backgroundColor: colors.navigationBackground },
			}}
		>
			<Tab.Screen
				name="Home"
				component={HomeStackNav}
				options={{
					tabBarBadge: 3,
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
