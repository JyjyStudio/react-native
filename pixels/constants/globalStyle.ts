import { StyleSheet } from "react-native"
import colors from "./colors"

export default StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
	},
	linksContainer: {
		flexDirection: "row",
		justifyContent: "space-evenly",
		width: "100%",
		borderBottomWidth: 4,
	},
	cardContainer: {
		marginVertical: 20,
		borderBottomWidth: 1,
		alignItems: "center",
		paddingBottom: 20,
	},
	cardTitle: {
		fontWeight: "bold",
		fontSize: 30,
		textAlign: "center",
		paddingBottom: 10,
	},
	profilePicture: {
		width: 300,
		height: 300,
		borderRadius: 150,
	},
	descriptionContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	bodyTitle: {
		fontSize: 30,
		color: colors.dark,
		fontFamily: "Bellota_700Bold_Italic",
	},
	bodyText: {
		fontSize: 22,
		color: colors.dark,
		fontFamily: "Bellota_700Bold_Italic",
	},
	currentLink: {
		borderBottomWidth: 4,
		borderBottomLeftRadius: 5,
	},
	goBackLink: {
		alignSelf: "flex-start",
		fontFamily: "Bellota_700Bold",
		fontSize: 40,
	},
})