import { Keyboard, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

export default function DismissKeyboard({ children }: any) {
	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			{children}
		</TouchableWithoutFeedback>
	)
}
