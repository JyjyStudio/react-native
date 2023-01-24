import {
	GestureResponderEvent,
	TouchableOpacity,
	StyleSheet,
	Text,
} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import colorsConstants from '../constants/colors'

export default function ButtonComponent({
	title,
	onPress,
	style,
	colors,
	start,
	end,
	...props
}: Props) {
	const styles = StyleSheet.create({
		button: {
			borderRadius: 8,
			alignItems: 'center',
			borderWidth: 1,
			borderColor: colorsConstants.dark,
			paddingVertical: 10,
			elevation: 5,
		},
		buttonText: {
			fontSize: style.fontSize ? style.fontSize : 14,
			fontWeight: 'bold',
			color: style.color ? style.color : colorsConstants.dark,
		},
	})

	return (
		<>
			{colors ? (
				<TouchableOpacity
					style={style && style}
					onPress={onPress}
					activeOpacity={0.8}
					{...props}
				>
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
					activeOpacity={0.7}
					{...props}
				>
					<Text style={styles.buttonText}>{title.toUpperCase()}</Text>
				</TouchableOpacity>
			)}
		</>
	)
}

type ArrayOfTwoValuesMin<T> = {
	0: T
	1: T
} & Array<T>

interface Props {
	title: string
	onPress: (event: GestureResponderEvent) => void
	style?: any
	colors?: ArrayOfTwoValuesMin<string> | any
	start?: { x: number; y: number }
	end?: { x: number; y: number }
}
