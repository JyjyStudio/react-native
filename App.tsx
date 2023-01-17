import { useState } from 'react'
import { StyleSheet, View, FlatList, Alert } from 'react-native'
import AddProducts from './components/AddProducts'
import Products from './components/Products'

export default function App() {
	const [myProducts, setMyProducts] = useState<
		{ key: string; name: string }[]
	>([])

	const submitHandler = (product: string) => {
		const idString = Date.now().toString()
		if (product.length >= 2) {
			setMyProducts((state) => [
				...state,
				{ key: idString, name: product },
			])
		}
	}

	const deleteProduct = (key: string) =>
		Alert.alert(
			'Suppression',
			'Êtes vous sûr de vouloir effacer le produit ?',
			[
				{
					text: 'NON',
					style: 'cancel',
				},
				{
					text: 'OUI',
					onPress: () =>
						setMyProducts((currentMyProducts) =>
							currentMyProducts.filter(
								(product) => product.key != key
							)
						),
				},
			],
			{ cancelable: true, onDismiss: () => console.warn('Annulé') }
		)

	return (
		<View style={styles.container}>
			<AddProducts submitHandler={submitHandler} />
			<View>
				<FlatList
					style={styles.items}
					data={myProducts}
					renderItem={({ item }) => (
						<Products
							product={item}
							deleteProduct={deleteProduct}
						/>
					)}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
		paddingTop: 50,
		// marginBottom: 80,
	},
	items: {
		marginBottom: 120,
	},
})

