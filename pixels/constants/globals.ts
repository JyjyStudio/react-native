import { Platform } from "react-native"
import colors from "./colors"

export const isIos = Platform.OS === "ios"

export const defaultNavigationOptions = {
	defaultNavigationOptions: {
		headerStyle: {
			backgroundColor: isIos ? colors.iosHeader : colors.androidHeader,
		},
		headerTitleAlign: "center" as const,
		headerTintColor: "#fff",
		headerTitleStyle: {
			fontSize: 27,
			fontFamily: "Ubuntu_700Bold",
		},
	},
}
