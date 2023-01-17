import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function AddProducts({ submitHandler }: any) {
	const [product, setProduct] = useState('')
	const [error, setError] = useState({
		visible: false,
		msg: 'Veuillez inserer au moins 2 caractères',
	})

	const handleClick = () => {
		submitHandler(product)
		setProduct('')
		product.length < 2
			? setError((error) => ({ ...error, visible: true }))
			: setError((error) => ({ ...error, visible: false }))
	}

	return (
		<>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.textInput}
					placeholder="Nouveau produit"
					value={product}
					onChangeText={(val) => setProduct(val)}
					onBlur={() =>
						setError((error) => ({ ...error, visible: false }))
					}
				/>
				<Button title="valider" onPress={handleClick} />
			</View>
			<Text style={styles.errorMsg}>{error.visible && error.msg}</Text>
		</>
	)
}
const styles = StyleSheet.create({
	inputContainer: {
		flexDirection: 'row',
		marginVertical: 10,
	},
	textInput: {
		borderWidth: 1,
		padding: 5,
		paddingLeft: 10,
		flexGrow: 1,
	},
	errorMsg: { color: 'red', marginBottom: 5 },
})
