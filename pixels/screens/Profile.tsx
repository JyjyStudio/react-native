import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import React from "react"
import globalStyle from "../constants/globalStyle"
import { NavigationStackProp } from "react-navigation-stack"

export default function Profile({ navigation }: Props) {
	return (
		<View style={{ ...globalStyle.container, ...styles.container }}>
			<Text style={globalStyle.bodyText}>
				{navigation.getParam("name")}
			</Text>
			<Text style={globalStyle.bodyText}>
				{navigation.getParam("country")}
			</Text>
		</View>
	)
}

Profile.navigationOptions = (navigationData: Props) => {
	const name = navigationData.navigation.getParam("name")
	const favColor = navigationData.navigation.getParam("favColor")

	return {
		title: `Profil de ${name}`,
		headerStyle: {
			backgroundColor: favColor,
		},
		headerRight: () => (
			<TouchableOpacity onPress={() => alert(`Je m'appelle ${name} !`)}>
				<Text style={styles.textInfo}>Infos</Text>
			</TouchableOpacity>
		),
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "orange",
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: "flex-start",
		paddingTop: 50,
	},
	textInfo: {
		fontWeight: "bold",
		paddingRight: 20,
	},
})

type Props = {
	navigation: NavigationStackProp
}
