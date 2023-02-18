import React from "react"
import { StyleSheet, Text, View, Switch } from "react-native"
import colors from "../constants/colors"

const CustomSwitch = (props: any) => {
	return (
		<View style={styles.settingContainer}>
			<Text style={styles.settingsLabel}>{props.label}</Text>
			<Switch
				value={props.state}
				onValueChange={props.handleSwitch}
				trackColor={{ false: colors.lightGrey, true: colors.selected }}
				thumbColor={props.state && colors.light}
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

export default CustomSwitch
