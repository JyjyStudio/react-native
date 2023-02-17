import { StyleSheet, Text, View, Image, Pressable } from "react-native"
import React from "react"
import colors from "../constants/colors"
import globalStyle from "../constants/globalStyle"
import { NavigationStackProp } from "react-navigation-stack"
import { Photo, User } from "../redux/constants"

export default function LikedPictures({ items, navigation }: Props) {
	return (
		<View>
			{items.item.photos.map((photo: Photo) => (
				<View key={photo.id}>
					<Pressable
						onPress={() => navigation.navigate("Photos", photo)}
						style={({ pressed }) => [
							{
								backgroundColor: pressed
									? colors.selected
									: colors.light,
							},
							styles.photoContainer,
						]}
					>
						<Image
							style={globalStyle.profilePicture}
							source={{ uri: photo.url }}
						/>
						<Text style={styles.selectedPhotoText}>
							{photo.title}
						</Text>
					</Pressable>
				</View>
			))}
		</View>
	)
}

const styles = StyleSheet.create({
	photoContainer: {
		marginVertical: 9,
		alignItems: "center",
		padding: 20,
	},
	selectedPhotoText: {
		fontSize: 19,
		fontFamily: "Ubuntu_300Light",
		margin: 9,
	},
})

type Props = {
	items: { item: User }
	navigation: NavigationStackProp
}
