import {
	useFonts,
	Bellota_300Light,
	Bellota_300Light_Italic,
	Bellota_400Regular,
	Bellota_400Regular_Italic,
	Bellota_700Bold,
	Bellota_700Bold_Italic,
} from "@expo-google-fonts/bellota"
import StackNav from "./routes/HomeStackNav"

export default function App() {
	let [fontsLoaded] = useFonts({
		Bellota_300Light,
		Bellota_300Light_Italic,
		Bellota_400Regular,
		Bellota_400Regular_Italic,
		Bellota_700Bold,
		Bellota_700Bold_Italic,
	})
	if (!fontsLoaded) {
		return null
	} else {
		return <StackNav />
	}
}

