import React, { useState, useLayoutEffect } from "react"
import { Text, View, TouchableOpacity, StyleSheet } from "react-native"
import { NavigationProps } from "../constants/types"
import { Globalstyle } from "../constants/globalStyle"
import CounterBtn from "../components/CounterBtn"

export default function Portfolio({ navigation, route }: NavigationProps) {
	const [count, setCount] = useState(0)

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<CounterBtn
					addOne={() => setCount((prevCount) => prevCount + 1)}
					removeOne={() => setCount((prevCount) => prevCount - 1)}
				/>
			),
		})
	}, [navigation])

	return (
		<View style={styles.container}>
			<Text style={Globalstyle.bodyTxt}>Compteur: {count}</Text>
			<TouchableOpacity
				style={{ ...Globalstyle.btn, backgroundColor: "lightgreen" }}
				onPress={() => navigation.navigate("Home")}
				activeOpacity={0.7}
			>
				<Text style={{ ...Globalstyle.buttonTxt, color: "black" }}>
					Retourner vers Home
				</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
})
