import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import colors from '../constants/colors'
import globalStyle from '../constants/globalStyle'

export default function Header() {
	return (
		<LinearGradient
			colors={[colors.info, colors.lightInfo]}
			style={styles.headerContainer}
		>
			<Text style={globalStyle.logo}>My Shopping List</Text>
		</LinearGradient>
	)
}

const styles = StyleSheet.create({
	headerContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		minHeight: 30,
		paddingTop: 40,
		paddingBottom: 15,
	},
})
