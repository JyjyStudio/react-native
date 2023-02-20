import React from "react"
import { StyleSheet, Text, View, Switch } from "react-native"
import colors from "../constants/colors"

const CustomSwitch = ({ label, state, handleSwitch }: Props) => {
	return (
		<View style={styles.settingContainer}>
			<Text style={styles.settingsLabel}>{label}</Text>
			<Switch
				value={state}
				onValueChange={handleSwitch}
				trackColor={{
					false: colors.inactiveLink,
					true: colors.activeLink,
				}}
				thumbColor={colors.light}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	settingContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 25,
		marginBottom: 14,
	},
	settingsLabel: {
		fontSize: 19,
	},
})

type Props = {
	label: string
	state: boolean
	handleSwitch: ((value: boolean) => Promise<void> | void) | null | undefined
}

export default CustomSwitch
