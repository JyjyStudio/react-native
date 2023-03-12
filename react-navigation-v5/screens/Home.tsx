import React, { useContext } from "react"
import { TouchableOpacity, StyleSheet, Text, View } from "react-native"
import { Globalstyle } from "../constants/globalStyle"
import { NavigationProps } from "../routes/types"
import { ThemeContext } from "../context/ThemeProvider"

export default function Home({ navigation }: NavigationProps) {
	const user = {
		userId: 1,
		name: "Jyhad",
		age: 24,
		favColor: "royalblue",
	}
	const { colors } = useContext(ThemeContext)

	const handlePress = () => {
		navigation.navigate("Profil", { user })
	}

	return (
		<View style={[styles.container, { backgroundColor: colors.background }]}>
			<Text style={[Globalstyle.bodyTxt, { color: colors.primary }]}>Home</Text>
			<TouchableOpacity
				style={{ ...Globalstyle.btn, ...styles.btn }}
				onPress={handlePress}
				activeOpacity={0.7}
			>
				<Text style={Globalstyle.buttonTxt}>Vers Profil</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	btn: {
		backgroundColor: "lightseagreen",
	},
})
