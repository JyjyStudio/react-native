import { useState, useEffect, useCallback } from 'react'
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
import Header from './components/Header'
import colors from './constants/colors'
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

const useFonts = async () =>
	await Font.loadAsync({
		pacifico: require('./assets/fonts/Pacifico-Regular.ttf'),
	})
// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync()

export default function App() {
	const [myProducts, setMyProducts] = useState<
		{ key: string; name: string }[]
	>([])

	const [modalVisible, setModalVisible] = useState(false)
	const [appIsReady, setAppIsReady] = useState(false)

	useEffect(() => {
		async function prepare() {
			try {
				// Pre-load fonts, make any API calls you need to do here
				await useFonts()
			} catch (e) {
				console.warn(e)
			} finally {
				// Tell the application to render
				setAppIsReady(true)
			}
		}
		prepare()
	}, [])

	const onLayoutRootView = useCallback(async () => {
		if (appIsReady) {
			// This tells the splash screen to hide immediately! If we call this after
			// `setAppIsReady`, then we may see a blank screen while the app is
			// loading its initial state and rendering its first pixels. So instead,
			// we hide the splash screen once we know the root view has already
			// performed layout.
			await SplashScreen.hideAsync()
		}
	}, [appIsReady])

	if (!appIsReady) {
		return null
	}
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
				<Header />
				<View
					style={styles.globalContainer}
					onLayout={onLayoutRootView}
				>
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
							title="Ajouter une catégorie"
							onPress={() => addCategory('test')}
							style={styles.grandientBtn}
							colors={[
								'rgb(162, 224, 146)',
								'rgb(102, 244, 186)',
								'rgb(51, 139, 147)',
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
		minHeight: 20,
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
	categoryTitle: {
		fontWeight: 'bold',
		fontSize: 20,
	},
	flatlist: {
		height: '50%',
		marginTop: 10,
	},
})

