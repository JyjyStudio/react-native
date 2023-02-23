import React from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import { NavigationProps } from "../constants/types"

export default function ({ navigation }: NavigationProps) {
	const handlePress = () => {
		navigation.navigate("Portfolio")
	}

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Home</Text>
			<Pressable
				style={({ pressed }) => ({
					backgroundColor: pressed ? "lightseagreen" : "rebeccapurple",
					...styles.pressable,
				})}
				onPress={handlePress}
			>
				<Text style={styles.btn}>Vers Portfolio</Text>
			</Pressable>
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
	pressable: {
		marginVertical: 15,
		borderRadius: 15,
	},
	text: {
		fontSize: 24,
	},
	btn: {
		paddingVertical: 7,
		paddingHorizontal: 16,
		color: "white",
		fontSize: 18,
	},
})
