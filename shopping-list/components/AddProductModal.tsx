import { View, StyleSheet, Modal } from 'react-native'
import React from 'react'
import AddProducts from './AddProducts'

export default function AddProductModal({
	modalVisible,
	setModalVisible,
	submitHandler,
}: Props) {
	return (
		<Modal
			// transparent
			animationType="slide"
			visible={modalVisible}
			onRequestClose={() => setModalVisible(false)}
		>
			<View style={styles.modalContainer}>
				<View style={styles.modalView}>
					<AddProducts
						submitHandler={submitHandler}
						setModalVisible={setModalVisible}
						modalVisible={modalVisible}
					/>
				</View>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	modalContainer: {
		// backgroundColor: 'rgba(180,200,200,0.9)',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	modalView: {
		backgroundColor: 'lightgreen',
		height: 220,
		marginHorizontal: 20,
		borderRadius: 20,
		padding: 20,
		justifyContent: 'center',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
})

interface Props {
	modalVisible: boolean
	setModalVisible: Function
	submitHandler: Function
}
