import React from "react"
import { ImageBackground, StyleSheet, Text } from "react-native"
import colors from "../constants/colors"

export default function NoData({ children }: { children: string }) {
	return (
		<ImageBackground
			source={{
				uri: "https://img.freepik.com/vecteurs-libre/illustration-costume-astronaute_114360-8538.jpg?w=740&t=st=1676827435~exp=1676828035~hmac=df6a8892ccb9dfb357f73c59383f353689d86085eaadfbe2b34c6f91faaeeea3",
			}}
			resizeMode="contain"
			style={styles.emptyMsgWrapper}
		>
			<Text style={styles.emptyMsgText}>{children}</Text>
		</ImageBackground>
	)
}

const styles = StyleSheet.create({
	emptyMsgWrapper: {
		flex: 1,
		backgroundColor: colors.light,
		paddingTop: 10,
	},
	emptyMsgText: {
		textAlign: "center",
		marginTop: 50,
		color: colors.dark,
		fontSize: 23,
	},
})
