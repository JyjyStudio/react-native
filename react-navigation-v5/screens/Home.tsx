import { StyleSheet, Text, View } from "react-native"
import React from "react"
import { Link } from "@react-navigation/native"

export default function Home() {
	return (
		<View
			style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
		>
			<Text>Home Screen</Text>
			<Link to="/Portfolio">Portfolio Screen</Link>
		</View>
	)
}

const styles = StyleSheet.create({})
