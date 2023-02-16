import React from "react"
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	ImageBackground,
} from "react-native"
import colors from "../constants/colors"

const TouchableImage = ({ onSelectPhoto, imgUrl, imgTitle }: Props) => {
	return (
		<View style={styles.photoContainer}>
			<TouchableOpacity onPress={onSelectPhoto}>
				<ImageBackground
					source={{ uri: imgUrl }}
					style={styles.bgPhoto}
				>
					<View style={styles.photoTitle}>
						<Text style={styles.photoTitleText}>{imgTitle}</Text>
					</View>
				</ImageBackground>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	photoContainer: {
		width: "100%",
		height: 350,
		marginBottom: 19,
	},
	bgPhoto: {
		width: "100%",
		height: "100%",
		justifyContent: "flex-end",
	},
	photoTitle: {
		backgroundColor: "rgba(0,0,0,0.6)",
		padding: 15,
	},
	photoTitleText: {
		fontFamily: "Ubuntu_400Regular",
		fontSize: 19,
		color: colors.light,
	},
})

export default TouchableImage

interface Props {
	onSelectPhoto: any
	imgUrl: string
	imgTitle: string
}
