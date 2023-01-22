import {
	GestureResponderEvent,
	TouchableOpacity,
	StyleSheet,
	Text,
} from 'react-native'
import React from 'react'
import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient'

export default function ButtonComponent({
	title,
	onPress,
	style,
	gradient,
	colors,
	start,
	end,
}: Props) {
	return (
		<>
			{gradient ? (
				<TouchableOpacity style={style && style} onPress={onPress}>
					<LinearGradient
						style={[[styles.button]]}
						colors={colors}
						start={start}
						end={end}
					>
						<Text style={styles.buttonText}>
							{title.toUpperCase()}
						</Text>
					</LinearGradient>
				</TouchableOpacity>
			) : (
				<TouchableOpacity
					style={[styles.button, style && style]}
					onPress={onPress}
				>
					<Text style={styles.buttonText}>{title.toUpperCase()}</Text>
				</TouchableOpacity>
			)}
		</>
	)
}

const styles = StyleSheet.create({
	button: {
		borderRadius: 20,
		alignItems: 'center',
		borderWidth: 1,
		borderColor: 'black',
		paddingVertical: 10,
	},
	buttonText: {
		fontSize: 17,
		color: 'white',
		fontWeight: 'bold',
	},
})

type ArrayOfTwoValuesMin<T> = {
	0: T
	1: T
} & Array<T>

interface Props {
	title: string
	onPress: (event: GestureResponderEvent) => void
	style?: any
	gradient?: boolean
	colors?: ArrayOfTwoValuesMin<string> | any
	start?: { x: number; y: number }
	end?: { x: number; y: number }
}
