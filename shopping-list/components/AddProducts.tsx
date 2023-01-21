import {
	View,
	TextInput,
	StyleSheet,
	Keyboard,
	Alert,
	Pressable,
	Text,
} from 'react-native'
import React, { useState, useEffect } from 'react'

export default function AddProducts({
	submitHandler,
	modalVisible,
	setModalVisible,
}: Props) {
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
			setModalVisible(false)
		} else {
			Alert.alert('Info', 'Merci de saisir au moins 2 caractères')
		}
	}

	return (
		<View style={styles.container}>
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
			<View style={styles.buttonsContainer}>
				<Pressable
					style={[styles.btns, styles.validationBtn]}
					onPress={handleClick}
				>
					<Text style={styles.textBtn}>VALIDER</Text>
				</Pressable>
				<Pressable
					style={[styles.btns, styles.closeBtn]}
					onPress={() => setModalVisible(!modalVisible)}
				>
					<Text style={styles.textBtn}>ANNULER</Text>
				</Pressable>
			</View>
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		marginBottom: 10,
		width: '100%',
	},
	textInput: {
		borderWidth: 1,
		padding: 5,
		paddingLeft: 10,
		marginBottom: 15,
	},
	buttonsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	btns: {
		borderRadius: 5,
		paddingVertical: 12,
		elevation: 2,
		width: '47%',
	},
	validationBtn: {
		backgroundColor: 'deepskyblue',
	},
	closeBtn: {
		backgroundColor: 'tomato',
	},
	textBtn: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
		fontSize: 15,
	},
})

interface Props {
	modalVisible: boolean
	setModalVisible: Function
	submitHandler: Function
}
