import React from "react"
import { StyleSheet, Text, View, ScrollView, Image } from "react-native"
import { NavigationProps } from "../constants/globals"
import globalStyle from "../constants/globalStyle"

const Photo = ({ navigation }: NavigationProps) => {
	const url = navigation.getParam("url")
	const title = navigation.getParam("title")
	const photoDesc = navigation.getParam("photoDesc")

	return (
		<ScrollView style={globalStyle.container}>
			<Image style={styles.selectedImage} source={{ uri: url }} />
			<View style={styles.photoDescription}>
				<Text style={globalStyle.titleText}>{title}</Text>

				<Text style={styles.textDescription}>{photoDesc}</Text>
				<Text style={styles.textDescription}>{photoDesc}</Text>
			</View>
		</ScrollView>
	)
}

Photo.navigationOptions = ({ navigation }: NavigationProps) => {
	const photoTitle = navigation.getParam("title")
	return {
		headerTitle: photoTitle.toUpperCase(),
	}
}

const styles = StyleSheet.create({
	selectedImage: {
		width: "100%",
		height: 300,
	},
	photoDescription: {
		padding: 15,
		fontSize: 25,
		fontFamily: "Ubuntu_400Regular",
	},
	textDescription: {
		fontFamily: "Ubuntu_400Regular",
		fontSize: 20,
		padding: 9,
	},
})

export default Photo
