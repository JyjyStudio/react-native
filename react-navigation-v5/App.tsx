import * as React from "react"
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"
import { RootStackParamList } from "./constants/types"
import Home from "./screens/Home"
import Portfolio from "./screens/Portfolio"

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
					}}
				/>
				<Stack.Screen name="Portfolio" component={Portfolio} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

const defaultScreenOptions: StackNavigationOptions = {
	headerStyle: {
		backgroundColor: "#f4511e",
	},
	headerTitleAlign: "center",
	headerTintColor: "#fff",
	headerTitleStyle: {
		fontWeight: "bold",
	},
}

export default App

