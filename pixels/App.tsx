import {
	useFonts,
	Bellota_300Light,
	Bellota_300Light_Italic,
	Bellota_400Regular,
	Bellota_400Regular_Italic,
	Bellota_700Bold,
	Bellota_700Bold_Italic,
} from "@expo-google-fonts/bellota"

import {
	Ubuntu_300Light,
	Ubuntu_300Light_Italic,
	Ubuntu_400Regular,
	Ubuntu_400Regular_Italic,
	Ubuntu_500Medium,
	Ubuntu_500Medium_Italic,
	Ubuntu_700Bold,
	Ubuntu_700Bold_Italic,
} from "@expo-google-fonts/ubuntu"

import BottomTabNav from "./routes/BottomTabNav"

export default function App() {
	let [fontsLoaded] = useFonts({
		Bellota_300Light,
		Bellota_300Light_Italic,
		Bellota_400Regular,
		Bellota_400Regular_Italic,
		Bellota_700Bold,
		Bellota_700Bold_Italic,
		Ubuntu_300Light,
		Ubuntu_300Light_Italic,
		Ubuntu_400Regular,
		Ubuntu_400Regular_Italic,
		Ubuntu_500Medium,
		Ubuntu_500Medium_Italic,
		Ubuntu_700Bold,
		Ubuntu_700Bold_Italic,
	})
	if (!fontsLoaded) {
		return null
	} else {
		return <BottomTabNav />
	}
}
