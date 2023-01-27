import { Pressable, StyleSheet, Text } from "react-native"
import React from "react"
import globalStyle from "../constants/globalStyle"

export default function LinkButton({ title, onPress, style }: Props) {
	return (
		<Pressable
			style={{ ...styles.linkContainer, ...style }}
			onPress={onPress}
		>
			<Text style={{ ...globalStyle.bodyTitle, ...style }}>{title}</Text>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	linkContainer: {
		margin: 10,
	},
})

type Props = {
	title: string
	onPress: any
	style?: any
}
