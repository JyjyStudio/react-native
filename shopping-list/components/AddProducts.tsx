import { View, TextInput, Pressable, StyleSheet, Text } from 'react-native'
import React, { useState } from 'react'

export default function AddProducts({ submitHandler, reset }: any) {
	const [product, setProduct] = useState('')

	const handleClick = () => {
		if (product.length >= 2) {
			submitHandler(product)
			setProduct('')
		}
	}

	return (
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.textInput}
				placeholder="Nouveau produit (2 caracteres min)"
				value={product}
				onChangeText={(val) => setProduct(val)}
				// multiline
				selectTextOnFocus
				maxLength={9}
				secureTextEntry
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
	},
	text: {
		textAlign: 'center',
		fontSize: 16,
		fontWeight: 'bold',
		letterSpacing: 1,
		color: 'white',
	},
})
