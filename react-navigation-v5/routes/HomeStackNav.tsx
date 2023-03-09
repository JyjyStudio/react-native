import React, { useContext } from "react"
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack"
import { NavigationProps, RootStackParamList } from "./types"
import { MaterialIcons } from "@expo/vector-icons"
import { ThemeContext } from "../context/ThemeProvider"
import Home from "../screens/Home"
import Profil from "../screens/Profil"
import Listes from "../screens/Listes"
import Sujets from "../screens/Sujets"
import Signets from "../screens/Signets"
import Moments from "../screens/Moments"
import Settings from "../screens/Settings"
import BottomTabNav from "./BottomTabNav"

const HomeStack = createStackNavigator<RootStackParamList>()

export default function HomeStackNav({ navigation }: NavigationProps) {
	const { colors } = useContext(ThemeContext)

	return (
		<HomeStack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: colors.background,
				},
				headerTitleStyle: {
					fontSize: 22,
					color: colors.primary,
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
