import React, { useContext, useLayoutEffect, useReducer } from "react"
import { Text, View, TouchableOpacity, StyleSheet } from "react-native"
import { NavigationProps } from "../routes/types"
import { Globalstyle } from "../constants/globalStyle"
import CounterBtn from "../components/CounterBtn"
import { ThemeContext } from "../context/ThemeProvider"

const ACTIONS = {
	INCREMENT: "increment",
	DECREMENT: "decrement",
}

const reducer = (state: { count: number }, action: string) => {
	switch (action) {
		case ACTIONS.INCREMENT:
			return { count: state.count + 1 }
		case ACTIONS.DECREMENT:
			return { count: state.count - 1 }
		default:
			return state
	}
}

export default function Profil({ navigation, route }: NavigationProps) {
	const [state, dispatch] = useReducer(reducer, { count: 0 })
	const { colors } = useContext(ThemeContext)

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<CounterBtn
					increment={() => dispatch(ACTIONS.INCREMENT)}
					decrement={() => dispatch(ACTIONS.DECREMENT)}
				/>
			),
		})
	}, [navigation])

	return (
		<View style={[styles.container, { backgroundColor: colors.background }]}>
			<Text style={[Globalstyle.bodyTxt, { color: colors.primary }]}>
				Compteur: {state.count}
			</Text>
			<TouchableOpacity
				style={{ ...Globalstyle.btn, backgroundColor: "lightgreen" }}
				onPress={() => navigation.navigate("Home")}
				activeOpacity={0.7}
			>
				<Text style={{ ...Globalstyle.buttonTxt, color: colors.primary }}>
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
