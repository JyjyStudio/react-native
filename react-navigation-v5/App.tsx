import * as React from "react"
import {
	createStackNavigator,
	StackNavigationOptions,
	CardStyleInterpolators,
} from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"
import { RootStackParamList } from "./constants/types"
import Home from "./screens/Home"
import Portfolio from "./screens/Portfolio"
import { Colors } from "./constants/colors"

const Stack = createStackNavigator<RootStackParamList>()

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={defaultScreenOptions}>
				<Stack.Screen
					name="Home"
					component={Home}
					options={{
						title: "Accueil",
						headerStyle: { backgroundColor: Colors.homeHeader },
						headerTitleStyle: {
							...(defaultScreenOptions.headerTitleStyle as {}),
							color: Colors.light,
						},
					}}
				/>
				<Stack.Screen
					name="Portfolio"
					component={Portfolio}
					options={{
						headerStyle: { backgroundColor: Colors.light },
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

const defaultScreenOptions: StackNavigationOptions = {
	headerStyle: {
		backgroundColor: "#f4511e",
	},
	headerTitleStyle: {
		fontSize: 22,
		fontWeight: "bold",
	},
	headerTitleAlign: "center",
	headerTintColor: "#000",
	gestureEnabled: true,
	gestureDirection: "horizontal",
	cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
}

export default App

