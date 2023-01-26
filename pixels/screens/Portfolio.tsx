import { StyleSheet, Text, View } from "react-native"
import React from "react"
import globalStyle from "../constants/globalStyle"

export default function Portfolio() {
	return (
		<View style={{ ...globalStyle.container, ...styles.container }}>
			<Text style={globalStyle.bodyText}>Portfolio</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "orange",
	},
})
