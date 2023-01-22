import {
	GestureResponderEvent,
	TouchableOpacity,
	StyleSheet,
	Text,
} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

export default function ButtonComponent({
	title,
	onPress,
	style,
	colors,
	start,
	end,
}: Props) {
	const styles = StyleSheet.create({
		button: {
			borderRadius: 20,
			alignItems: 'center',
			borderWidth: 1,
			borderColor: 'black',
			paddingVertical: 10,
		},
		buttonText: {
			fontSize: style.fontSize ? style.fontSize : 14,
			fontWeight: 'bold',
			color: style.color ? style.color : 'black',
		},
	})

	return (
		<>
			{colors ? (
				<TouchableOpacity
					style={style && style}
					onPress={onPress}
					activeOpacity={0.8}
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
