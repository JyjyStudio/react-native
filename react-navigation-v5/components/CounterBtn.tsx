import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import React from "react"
import { Colors } from "../constants/colors"

export default function CounterBtn({ addOne, removeOne }) {
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={addOne}>
				<Text style={styles.btn}>+1</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={removeOne}>
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
		color: Colors.light,
		fontSize: 20,
		fontWeight: "bold",
	},
})
