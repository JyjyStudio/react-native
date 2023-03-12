import React, { useContext } from "react"
import { StyleSheet, Text, View } from "react-native"
import { ThemeContext } from "../context/ThemeProvider"

const Moments = () => {
	const { colors } = useContext(ThemeContext)
	return (
		<View style={[styles.container, { backgroundColor: colors.background }]}>
			<Text style={[styles.text, { color: colors.primary }]}>Moments</Text>
		</View>
	)
}

export default Moments

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
