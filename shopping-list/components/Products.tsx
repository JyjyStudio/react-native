import { Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'

export default function Products({ product, deleteProduct }: Products) {
	return (
		<TouchableOpacity style={styles.productContainer}>
			<Text style={styles.text}>{product.name}</Text>
			<Pressable
				onPress={() => {
					deleteProduct(product.key)
				}}
			>
				<Text style={styles.icon}>❌</Text>
			</Pressable>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	productContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 30,
		paddingVertical: 50,
		backgroundColor: 'lightgreen',
		marginVertical: 5,
	},
	text: {
		fontSize: 20,
	},
	icon: {
		fontSize: 20,
		marginRight: 10,
	},
})

interface Product {
	key: string
	name: string
}
interface Products {
	product: Product
	deleteProduct: React.Dispatch<string>
}
