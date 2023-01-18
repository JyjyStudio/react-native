import {
	View,
	TextInput,
	Pressable,
	StyleSheet,
	Text,
	Keyboard,
	Alert,
} from 'react-native'
import React, { useState, useEffect } from 'react'

export default function AddProducts({ submitHandler, reset }: any) {
	const [product, setProduct] = useState('')

	useEffect(() => {
		Keyboard.addListener('keyboardDidHide', () =>
			Alert.alert('✔️', 'Votre produit à bien été ajouté !')
		)
		return () => Keyboard.removeAllListeners('keyboardDidHide')
	}, [])

	const handleClick = () => {
		if (product.length >= 2) {
			submitHandler(product)
			setProduct('')
			Keyboard.dismiss()
		}
	}

	return (
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.textInput}
				placeholder="Nouveau produit (2 caracteres min)"
				value={product}
				onChangeText={(val) => setProduct(val)}
				selectTextOnFocus
				onSubmitEditing={handleClick}
				// multiline
				// maxLength={9}
				// secureTextEntry
			/>
			<View style={styles.btns}>
				<Pressable style={styles.button} onPress={handleClick}>
					<Text style={styles.text}>Valider</Text>
				</Pressable>
				<Pressable style={styles.button} onPress={reset}>
					<Text style={styles.text}>Reset</Text>
				</Pressable>
			</View>
		</View>
	)
}
const styles = StyleSheet.create({
	inputContainer: {
		marginBottom: 10,
	},
	textInput: {
		borderWidth: 1,
		padding: 5,
		paddingLeft: 10,
		marginBottom: 10,
	},
	btns: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	button: {
		paddingVertical: 12,
		paddingHorizontal: 32,
		backgroundColor: 'deepskyblue',
		width: '48%',
		elevation: 7,
		borderRadius: 3,
	},
	text: {
		textAlign: 'center',
		fontSize: 16,
		fontWeight: 'bold',
		letterSpacing: 1,
		color: 'white',
	},
})
