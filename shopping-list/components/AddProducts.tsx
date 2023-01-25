import {
	View,
	TextInput,
	StyleSheet,
	Keyboard,
	Alert,
	Pressable,
	Text,
} from 'react-native'
import React, { useState } from 'react'
import ButtonComponent from './ButtonComponent'
import colors from '../constants/colors'

export default function AddProducts({
	submitHandler,
	modalVisible,
	setModalVisible,
}: Props) {
	const [product, setProduct] = useState('')

	const handleClick = () => {
		if (product.length >= 2) {
			submitHandler(product)
			setProduct('')
			Keyboard.dismiss()
			setModalVisible(false)
			Alert.alert('✔️', 'Votre produit à bien été ajouté !')
		} else {
			Alert.alert('Info', 'Merci de saisir au moins 2 caractères')
		}
	}

	return (
		<View style={styles.container}>
			<TextInput
				style={product ? styles.textInput : styles.inputPlaceholder}
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
				<ButtonComponent
					title="annuler"
					onPress={() => setModalVisible(!modalVisible)}
					style={{ ...styles.btns, ...styles.closeBtn }}
				/>
				<ButtonComponent
					title="valider"
					onPress={handleClick}
					style={{ ...styles.btns, ...styles.validationBtn }}
				/>
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
		borderRadius: 6,
		fontSize: 17,
	},
	inputPlaceholder: {
		fontSize: 14,
		borderWidth: 1,
		padding: 5,
		paddingLeft: 10,
		marginBottom: 15,
		borderRadius: 6,
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
		backgroundColor: colors.info,
	},
	closeBtn: {
		backgroundColor: colors.danger,
	},
	textBtn: {
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
