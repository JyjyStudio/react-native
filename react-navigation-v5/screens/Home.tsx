import React from "react"
import { TouchableOpacity, StyleSheet, Text, View } from "react-native"
import { Globalstyle } from "../constants/globalStyle"
import { NavigationProps } from "../constants/types"

export default function Home({ navigation }: NavigationProps) {
	const user = {
		userId: "Toto",
		name: "Toto",
		age: 24,
	}

	const handlePress = () => {
		navigation.navigate("Portfolio", user)
	}

	return (
		<View style={styles.container}>
			<Text style={Globalstyle.bodyTxt}>Home</Text>
			<TouchableOpacity
				style={{ ...Globalstyle.btn, ...styles.btn }}
				onPress={handlePress}
				activeOpacity={0.7}
			>
				<Text style={Globalstyle.buttonTxt}>Vers Portfolio</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "lightblue",
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	btn: {
		backgroundColor: "lightseagreen",
	},
})
