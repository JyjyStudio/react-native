import React from "react"
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native"

const Settings = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Settings</Text>
		</View>
	)
}

export default Settings

const styles = StyleSheet.create({
	container: {
		backgroundColor: "orange",
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontSize: 24,
	},
})
