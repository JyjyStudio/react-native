import { useState } from 'react'
import {
	StyleSheet,
	View,
	FlatList,
	Alert,
	Pressable,
	Text,
} from 'react-native'
import HomeModal from './components/HomeModal'
import DismissKeyboard from './components/DismissKeyboard'
import Product from './components/Product'

export default function App() {
	const [myProducts, setMyProducts] = useState<
		{ key: string; name: string }[]
	>([])

	const [modalVisible, setModalVisible] = useState(false)

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
		<DismissKeyboard>
			<>
				<View style={styles.container}>
					<View style={styles.addProductContainer}>
						<Pressable
							style={[styles.button, styles.buttonOpen]}
							onPress={() => setModalVisible(true)}
						>
							<Text style={styles.buttonText}>
								Ajouter un produit
							</Text>
						</Pressable>
						<Pressable
							style={[styles.button, styles.buttonReset]}
							onPress={() => setMyProducts([])}
						>
							<Text style={styles.buttonText}>Reset</Text>
						</Pressable>
					</View>

					<FlatList
						style={styles.flatlist}
						data={myProducts}
						renderItem={({ item }) => (
							<Product
								product={item}
								deleteProduct={deleteProduct}
							/>
						)}
					/>
				</View>
				<HomeModal
					submitHandler={submitHandler}
					modalVisible={modalVisible}
					setModalVisible={setModalVisible}
				/>
			</>
		</DismissKeyboard>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 20,
		paddingTop: 50,
		// backgroundColor: 'blue',
	},
	addProductContainer: {
		flex: 1,
		marginTop: 30,
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	button: {
		borderRadius: 20,
		paddingVertical: 15,
		paddingHorizontal: 35,
		elevation: 2,
		width: '80%',
		alignItems: 'center',
	},
	buttonOpen: {
		backgroundColor: '#F194FF',
	},
	buttonReset: {
		backgroundColor: 'tomato',
	},
	buttonText: {
		fontSize: 16,
		color: 'white',
	},
	flatlist: {
		height: '60%',
		marginTop: 10,
	},
})

