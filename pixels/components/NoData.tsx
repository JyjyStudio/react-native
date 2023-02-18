import React from "react"
import { ImageBackground, StyleSheet, Text } from "react-native"
import colors from "../constants/colors"

export default function NoData({ children }: { children: string }) {
	return (
		<ImageBackground
			source={{
				uri: "https://cdn.pixabay.com/photo/2016/11/29/08/27/fog-1868416_960_720.jpg",
			}}
			style={styles.emptyMsgWrapper}
		>
			<Text style={styles.emptyMsgText}>{children}</Text>
		</ImageBackground>
	)
}

const styles = StyleSheet.create({
	emptyMsgWrapper: {
		flex: 1,
		backgroundColor: colors.brown,
	},
	emptyMsgText: {
		textAlign: "center",
		marginTop: 50,
		color: colors.dark,
		fontSize: 23,
	},
})
