import { useState } from 'react'
import {
	StyleSheet,
	View,
	FlatList,
	Alert,
	Text,
	ImageBackground,
} from 'react-native'
import AddProductModal from './components/AddProductModal'
import DismissKeyboard from './components/DismissKeyboard'
import Product from './components/Product'
import ButtonComponent from './components/ButtonComponent'

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
					text: 'OUI',
					onPress: () =>
						setMyProducts((currentMyProducts) =>
							currentMyProducts.filter(
								(product) => product.key != key
							)
						),
				},
				{
					text: 'NON',
					style: 'cancel',
				},
			],
			{ cancelable: true, onDismiss: () => console.warn('Annulé') }
		)

	const addCategory = (title: string) => (
		<Text style={styles.categoryTitle}>{title}</Text>
	)

	return (
		<DismissKeyboard>
			<ImageBackground
				source={require('./assets/Abstract-Gradient-1.png')}
				style={styles.backgoundImage}
			>
				<>
					<View style={styles.globalContainer}>
						<View style={styles.addProductContainer}>
							<ButtonComponent
								title="Ajouter un produit"
								onPress={() => setModalVisible(true)}
								gradient
								colors={[
									'rgb(120, 220, 234)',
									'rgb(130, 230, 244)',
									'rgb(140, 180, 254)',
									'rgb(190, 120, 264)',
								]}
								start={{ x: 0.5, y: 0 }}
								end={{ x: 0.5, y: 1 }}
								style={styles.grandientBtn}
							/>
							<ButtonComponent
								title="Ajouter une catégorie"
								onPress={() => addCategory('test')}
								gradient
								colors={[
									'rgb(162, 224, 146)',
									'rgb(102, 244, 186)',
									'rgb(51, 139, 147)',
								]}
								start={{ x: 0.5, y: 0 }}
								end={{ x: 0.5, y: 1 }}
								style={styles.grandientBtn}
							/>
							<ButtonComponent
								title="reset"
								onPress={() => setMyProducts([])}
								style={styles.resetBtn}
							/>
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
					<AddProductModal
						submitHandler={submitHandler}
						modalVisible={modalVisible}
						setModalVisible={setModalVisible}
					/>
				</>
			</ImageBackground>
		</DismissKeyboard>
	)
}

const styles = StyleSheet.create({
	backgoundImage: {
		flex: 1,
	},
	globalContainer: {
		flex: 1,
		paddingHorizontal: 20,
		paddingTop: 30,
	},
	addProductContainer: {
		flex: 1,
		marginTop: 40,
		justifyContent: 'space-between',
		alignItems: 'center',
		minHeight: 20,
	},
	grandientBtn: {
		width: '100%',
	},
	resetBtn: {
		backgroundColor: 'tomato',
		width: '100%',
	},
	categoryTitle: {
		fontWeight: 'bold',
		fontSize: 20,
	},
	flatlist: {
		height: '50%',
		marginTop: 10,
	},
})

