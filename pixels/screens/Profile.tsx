import React from "react"
import { StyleSheet, Text, View } from "react-native"
import globalStyle from "../constants/globalStyle"
import { NavigationStackProp } from "react-navigation-stack"
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import MaterialiconHeader from "../components/MaterialiconHeader"
import colors from "../constants/colors"

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
			<HeaderButtons HeaderButtonComponent={MaterialiconHeader}>
				<Item
					title="info"
					iconName="info-outline"
					onPress={() => alert(`Profil de ${name}`)}
				/>
			</HeaderButtons>
		),
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.background,
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
