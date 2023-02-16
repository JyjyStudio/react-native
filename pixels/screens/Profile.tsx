import React from "react"
import { Text, View, ScrollView, StyleSheet, Image, Alert } from "react-native"
import globalStyle from "../constants/globalStyle"
import colors from "../constants/colors"
import MaterialIconsHeader from "../components/MaterialIconHeader"
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import TouchableImage from "../components/TouchableImage"
import { NavigationStackProp } from "react-navigation-stack"

const Portfolio = ({ navigation }: Props) => {
	const favColor = navigation.getParam("favColor")
	const name = navigation.getParam("name")
	const profilImg = navigation.getParam("img")
	const desc = navigation.getParam("desc")
	const photoArray = navigation.getParam("photos")

	const selectPhoto = (photo: Photo) => {
		navigation.navigate("Photos", photo)
	}

	return (
		<ScrollView style={globalStyle.container}>
			<View style={{ backgroundColor: favColor, ...styles.profilInfos }}>
				<Image
					style={styles.smallprofileImg}
					source={{ uri: profilImg }}
				/>
				<Text style={styles.profilName}>{name}</Text>
			</View>
			<View style={styles.profilDescription}>
				<Text style={styles.titleBioText}>Bio: </Text>
				<Text style={styles.textBio}>{desc}</Text>
			</View>
			<View>
				{photoArray.map((photo: Photo) => (
					<TouchableImage
						key={photo.id}
						imgUrl={photo.url}
						imgTitle={photo.title}
						onSelectPhoto={() => selectPhoto(photo)}
					/>
				))}
			</View>
		</ScrollView>
	)
}

Portfolio.navigationOptions = (navigationData: Props) => {
	const name = navigationData.navigation.getParam("name")
	const favColor = navigationData.navigation.getParam("favColor")
	const handleLike = navigationData.navigation.getParam("handleLike")
	const isSelected = navigationData.navigation.getParam("isSelected")

	return {
		headerTitle: `Profil de ${name}`,
		headerStyle: {
			backgroundColor: favColor,
		},
		headerTintColor: colors.light,
		headerRight: () => (
			<HeaderButtons HeaderButtonComponent={MaterialIconsHeader}>
				<Item
					title="Ajouter"
					iconName={isSelected ? "delete" : "thumb-up"}
					onPress={handleLike}
				/>
			</HeaderButtons>
		),
	}
}

const styles = StyleSheet.create({
	profilInfos: {
		alignItems: "center",
		padding: 10,
	},
	smallprofileImg: {
		width: 150,
		height: 150,
		borderRadius: 150 / 2,
		margin: 9,
		borderWidth: 6,
		borderColor: colors.light,
	},
	profilName: {
		fontFamily: "Ubuntu_700Bold",
		color: colors.light,
		fontSize: 25,
	},
	profilDescription: {
		backgroundColor: colors.ghost,
		padding: 15,
		fontSize: 25,
		fontFamily: "Ubuntu_400Regular",
	},
	titleBioText: {
		fontSize: 25,
		padding: 9,
		fontFamily: "Ubuntu_700Bold",
	},
	textBio: {
		fontFamily: "Ubuntu_400Regular",
		fontSize: 20,
		padding: 9,
	},
})

export default Portfolio

type Props = {
	navigation: NavigationStackProp
}

type Photo = {
	id: number
	url: string
	title: string
}
