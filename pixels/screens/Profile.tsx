import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import globalStyle from "../constants/globalStyle"
import { NavigationStackProp } from "react-navigation-stack"
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import MaterialiconHeader from "../components/MaterialiconHeader"
import colors from "../constants/colors"
import { FlatList } from "react-native-gesture-handler"

export default function Profile({ navigation }: Props) {
	const data = navigation.state.params
	const renderItem = ({ item }: { item: string }) => (
		<View style={styles.imgContainer}>
			<Image
				source={{ uri: item }}
				style={globalStyle.portfolioPicture}
			/>
		</View>
	)

	return (
		<View style={{ ...globalStyle.container, ...styles.container }}>
			<Text style={{ ...globalStyle.bodyText, ...styles.textInfo }}>
				Photos de {navigation.getParam("name")}:
			</Text>
			<FlatList
				data={data?.pics}
				renderItem={renderItem}
				style={globalStyle.flatlist}
			/>
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
		paddingTop: 30,
	},
	textInfo: {
		alignSelf: "flex-start",
		marginBottom: 10,
		marginLeft: "5%",
	},
	imgContainer: {
		alignItems: "center",
	},
})

type Props = {
	navigation: NavigationStackProp
}
