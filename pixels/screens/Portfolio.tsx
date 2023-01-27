import { StyleSheet, Text, View, Button } from "react-native"
import React from "react"
import globalStyle from "../constants/globalStyle"
import { NavigationStackProp } from "react-navigation-stack"
import LinkButton from "../components/LinkButton"

export default function Portfolio({ navigation }: Props) {
	const data = navigation.state.params
	return (
		<View style={{ ...globalStyle.container, ...styles.container }}>
			<Text
				style={{ ...globalStyle.bodyTitle, ...globalStyle.currentLink }}
			>
				Portfolio
			</Text>
			<LinkButton title="Home" onPress={() => navigation.popToTop()} />
			<LinkButton
				title="Photos"
				onPress={() => navigation.navigate("Photos")}
			/>
			<Text>{data?.name}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "orange",
	},
})

type Props = {
	navigation: NavigationStackProp
}
