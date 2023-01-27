import { StyleSheet, Text, View, Button } from "react-native"
import React from "react"
import globalStyle from "../constants/globalStyle"
import { NavigationStackProp } from "react-navigation-stack"
import LinkButton from "../components/LinkButton"

export default function Photos({ navigation }: Props) {
	return (
		<View style={{ ...globalStyle.container, ...styles.container }}>
			<Text
				style={{ ...globalStyle.bodyTitle, ...globalStyle.currentLink }}
			>
				Photos
			</Text>
			<LinkButton title="Home" onPress={() => navigation.popToTop()} />
			<LinkButton
				title="Portfolio"
				onPress={() => navigation.navigate("Portfolio")}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "lightgreen",
	},
})

type Props = {
	navigation: NavigationStackProp
}
