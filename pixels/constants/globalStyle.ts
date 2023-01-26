import { StyleSheet } from "react-native"
import colors from "./colors"

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	bodyText: {
		fontSize: 20,
		color: colors.dark,
	},
})
