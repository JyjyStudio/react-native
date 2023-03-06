import React, { useContext } from "react"
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack"
import { HomeNavigationProps, RootStackParamList } from "./types"
import { MaterialIcons } from "@expo/vector-icons"
import { ThemeContext } from "../context/ThemeContext"
import Home from "../screens/Home"
import Profil from "../screens/Profil"
import Listes from "../screens/Listes"
import Sujets from "../screens/Sujets"
import Signets from "../screens/Signets"
import Moments from "../screens/Moments"
import Settings from "../screens/Settings"
import BottomTabNav from "./BottomTabNav"
import { Colors } from "../constants/colors"

const HomeStack = createStackNavigator<RootStackParamList>()

export default function HomeStackNav({ navigation }: HomeNavigationProps) {
	const { isDark } = useContext(ThemeContext)

	return (
		<HomeStack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: isDark ? Colors.darkHomeHeader : Colors.lightHomeHeader,
				},
				headerTitleStyle: {
					fontSize: 22,
					color: Colors.dark,
				},
				headerTitleAlign: "center",
				gestureEnabled: true,
				gestureDirection: "horizontal",
				cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
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
		>
			<HomeStack.Screen name="Home" component={Home} options={{ title: "Accueil" }} />
			<HomeStack.Screen name="Profil" component={Profil} />
			<HomeStack.Screen name="Listes" component={Listes} />
			<HomeStack.Screen name="Sujets" component={Sujets} />
			<HomeStack.Screen name="Signets" component={Signets} />
			<HomeStack.Screen name="Moments" component={Moments} />
			{/* <HomeStack.Screen name="Settings" component={Settings} options={{ title: "Réglages" }} /> */}
		</HomeStack.Navigator>
	)
}
