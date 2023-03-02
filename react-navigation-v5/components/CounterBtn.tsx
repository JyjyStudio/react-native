import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import React from "react"
import { Colors } from "../constants/colors"

export default function CounterBtn({ increment, decrement }) {
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

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		width: 90,
		justifyContent: "space-evenly",
	},
	btn: {
		color: Colors.dark,
		fontSize: 20,
		fontWeight: "bold",
	},
})
