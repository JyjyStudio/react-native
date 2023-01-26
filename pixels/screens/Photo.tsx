import { StyleSheet, Text, View } from "react-native"
import React from "react"
import globalStyle from "../constants/globalStyle"

export default function Photo() {
	return (
		<View style={{ ...globalStyle.container, ...styles.container }}>
			<Text style={globalStyle.bodyText}>Photo</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "lightgreen",
	},
})
