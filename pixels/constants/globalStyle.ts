import { StyleSheet } from "react-native"
import colors from "./colors"

export default StyleSheet.create({
	container: {
		flex: 1,
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
	portfolioPicture: {
		width: "100%",
		height: 300,
		margin: 15,
	},
	descriptionContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "50%",
		paddingTop: 10,
	},
	titleText: {
		fontSize: 25,
		padding: 9,
		fontFamily: "Ubuntu_700Bold",
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
	bottomTabLabel: {
		fontSize: 15,
		fontFamily: "Ubuntu_500Medium",
	},
	flatlist: {
		width: "100%",
	},
	infoContainer: {
		width: "100%",
		paddingVertical: 20,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
	},
	infos: {
		fontSize: 20,
		fontFamily: "Ubuntu_300Light",
	},
	profileImg: {
		width: 350,
		height: 350,
		borderRadius: 14,
	},
	profileItem: {
		padding: 15,
		alignItems: "center",
	},
})
