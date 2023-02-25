import { Text, View, TouchableOpacity } from "react-native"
import React from "react"
import { NavigationProps } from "../constants/types"
import { Globalstyle } from "../constants/globalStyle"

export default function Portfolio({ navigation, route }: NavigationProps) {
	const { user } = route.params
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text style={Globalstyle.bodyTxt}>Profil de {user.name}</Text>
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
