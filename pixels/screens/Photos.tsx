import { StyleSheet, Text, View, Button } from "react-native"
import React from "react"
import globalStyle from "../constants/globalStyle"
import { NavigationStackProp } from "react-navigation-stack"
import LinkButton from "../components/LinkButton"

export default function Photos({ navigation }: Props) {
	return (
		<View style={{ ...globalStyle.container, ...styles.container }}>
			<Text style={globalStyle.bodyTitle}>Photos</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})

type Props = {
	navigation: NavigationStackProp
}
