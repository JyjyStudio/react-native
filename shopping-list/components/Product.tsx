import { StyleSheet, TouchableOpacity, Pressable } from "react-native"
import React from "react"
import { Feather } from "@expo/vector-icons"
import colors from "../constants/colors"
import BodyText from "./BodyText"

export default function Product({ product, deleteProduct }: Products) {
	return (
		<TouchableOpacity style={styles.productContainer}>
			<BodyText style={styles.text}>{product.name}</BodyText>
			<Pressable
				onPress={() => {
					deleteProduct(product.key)
				}}
			>
				<Feather name="delete" size={24} color={colors.info} />
			</Pressable>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	productContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 30,
		paddingVertical: 40,
		backgroundColor: "rgba(255,255,255,.5)",
		marginVertical: 5,
		borderRadius: 5,
	},
	text: {
		fontSize: 20,
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
