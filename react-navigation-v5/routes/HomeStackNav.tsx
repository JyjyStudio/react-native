import React from "react"
import {
	CardStyleInterpolators,
	createStackNavigator,
	StackNavigationOptions,
} from "@react-navigation/stack"
import { HomeScreenNavigationProp, RootStackParamList } from "./types"
import { MaterialIcons } from "@expo/vector-icons"
import Home from "../screens/Home"
import Profil from "../screens/Profil"
import Listes from "../screens/Listes"
import Sujets from "../screens/Sujets"
import Signets from "../screens/Signets"
import Moments from "../screens/Moments"
import Settings from "../screens/Settings"
import { Colors } from "../constants/colors"

const StackNav = createStackNavigator<RootStackParamList>()

export default function HomeStackNav({ navigation }) {
	return (
		<StackNav.Navigator screenOptions={defaultScreenOptions}>
			<StackNav.Screen
				name="Home"
				component={Home}
				options={{
					title: "Accueil",
					headerLeft: () => (
						<MaterialIcons
							name="menu"
							size={25}
							color="black"
							style={{ paddingLeft: 20 }}
							onPress={() => navigation.openDrawer()}
						/>
					),
				}}
			/>
			<StackNav.Screen name="Profil" component={Profil} />
			<StackNav.Screen name="Listes" component={Listes} />
			<StackNav.Screen name="Sujets" component={Sujets} />
			<StackNav.Screen name="Signets" component={Signets} />
			<StackNav.Screen name="Moments" component={Moments} />
			<StackNav.Screen name="Settings" component={Settings} options={{ title: "Réglages" }} />
		</StackNav.Navigator>
	)
}

const defaultScreenOptions = ({
	navigation,
}: {
	navigation: HomeScreenNavigationProp
}): StackNavigationOptions => {
	return {
		headerStyle: {
			backgroundColor: Colors.homeHeader,
		},
		headerTitleStyle: {
			fontSize: 22,
			color: Colors.dark,
		},
		headerTitleAlign: "center",
		gestureEnabled: true,
		gestureDirection: "horizontal",
		cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
	}
}
