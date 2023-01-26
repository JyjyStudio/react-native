import { StyleSheet, Text, View } from "react-native"
import React from "react"
import globalStyle from "../constants/globalStyle"

export default function Home() {
	return (
		<View style={{ ...globalStyle.container, ...styles.container }}>
			<Text style={globalStyle.bodyText}>Home</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "lightblue",
	},
})
