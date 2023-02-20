import React, { useCallback, useEffect } from "react"
import { Text, View, ScrollView, StyleSheet, Image, Alert } from "react-native"
import { NavigationStackProp } from "react-navigation-stack"
import { RootState } from "../redux/store"
import MaterialIconsHeader from "../components/MaterialIconHeader"
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import TouchableImage from "../components/TouchableImage"
import { Photo } from "../redux/constants"
import { useTsDispatch, useTsSelector } from "../redux/hooks"
import { like, unlike } from "../redux/slices/userSlice"
import globalStyle from "../constants/globalStyle"
import colors from "../constants/colors"

const Portfolio = ({ navigation }: Props) => {
	const dispatch = useTsDispatch()

	const user = JSON.parse(JSON.stringify(navigation.state.params))
	const favColor = navigation.getParam("favColor")
	const name = navigation.getParam("name")
	const profilImg = navigation.getParam("img")
	const desc = navigation.getParam("desc")
	const photoArray = navigation.getParam("photos")
	const userId = navigation.getParam("id")

	const already_liked = useTsSelector((state: RootState) =>
		state.users.likedUsers?.some((user) => user.id === userId)
	)

	const handleLike = useCallback(() => {
		if (already_liked) {
			dispatch(unlike(user.id))
			Alert.alert(
				"Photos effacées",
				`Les photos de ${name} sont effacées`,
				[{ text: "OK" }]
			)
		} else {
			dispatch(like(user))
			Alert.alert(
				"Photos enregistrées",
				"Elles sont disponibles dans votre sélection",
				[{ text: "OK" }]
			)
		}
	}, [dispatch, userId, already_liked])

	useEffect(() => {
		navigation.setParams({ handleLike })
	}, [handleLike])

	useEffect(() => {
		navigation.setParams({ already_liked })
	}, [already_liked])

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
	const already_liked = navigationData.navigation.getParam("already_liked")

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
					iconName={already_liked ? "delete" : "thumb-up"}
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
