import React, { useContext } from "react"
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import { ThemeContext } from "../context/ThemeProvider"

export default function CounterBtn({ increment, decrement }) {
	const { colors } = useContext(ThemeContext)
	const styles = StyleSheet.create({
		container: {
			flexDirection: "row",
			width: 90,
			justifyContent: "space-evenly",
		},
		btn: {
			color: colors.primary,
			fontSize: 20,
			fontWeight: "bold",
		},
	})

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={increment}>
				<Text style={styles.btn}>+1</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={decrement}>
				<Text style={styles.btn}>-1</Text>
			</TouchableOpacity>
		</View>
	)
}
