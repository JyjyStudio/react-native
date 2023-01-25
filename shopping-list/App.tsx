import { useState } from 'react'
import {
	StyleSheet,
	View,
	FlatList,
	Alert,
	ImageBackground,
} from 'react-native'
import AddProductModal from './components/AddProductModal'
import DismissKeyboard from './components/DismissKeyboard'
import Product from './components/Product'
import ButtonComponent from './components/ButtonComponent'
import Header from './components/Header'
import colors from './constants/colors'
import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico'

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

	let [fontsLoaded] = useFonts({
		Pacifico_400Regular,
	})

	if (!fontsLoaded) {
		return null
	} else {
		return (
			<DismissKeyboard>
				<ImageBackground
					source={require('./assets/Abstract-Gradient-1.png')}
					style={styles.backgoundImage}
				>
					<Header />
					<View style={styles.globalContainer}>
						<View style={styles.addProductContainer}>
							<ButtonComponent
								title="Ajouter un produit"
								onPress={() => setModalVisible(true)}
								style={styles.grandientBtn}
								colors={[
									'rgb(120, 220, 234)',
									'rgb(130, 230, 244)',
									'rgb(140, 180, 254)',
									'rgb(190, 120, 264)',
								]}
								start={{ x: 0.5, y: 0 }}
								end={{ x: 0.5, y: 1 }}
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
				</ImageBackground>
			</DismissKeyboard>
		)
	}
}

const styles = StyleSheet.create({
	backgoundImage: {
		flex: 1,
	},
	globalContainer: {
		flex: 1,
		paddingHorizontal: 20,
	},
	addProductContainer: {
		flex: 1,
		marginTop: 30,
		justifyContent: 'space-between',
		alignItems: 'center',
		// minHeight: 20,
	},
	grandientBtn: {
		width: '100%',
		fontSize: 17,
		color: colors.light,
	},
	resetBtn: {
		backgroundColor: colors.danger,
		width: '100%',
		fontSize: 17,
		color: colors.light,
	},
	flatlist: {
		height: '65%',
		marginTop: 10,
	},
})

