import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import Home from "../screens/Home"
import About from "../screens/About"
import { darkColors, lightColors } from "../constants/colors"

const Stack = createStackNavigator()

const MainStackNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: lightColors.navigationBackground,
				},
				headerTintColor: darkColors.navigationText,
				headerBackTitle: "Back",
			}}
		>
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="About" component={About} />
		</Stack.Navigator>
	)
}

export { MainStackNavigator }
