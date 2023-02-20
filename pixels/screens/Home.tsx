import React, { useState, useEffect } from "react"
import { FlatList, Modal, StyleSheet, View } from "react-native"
import { NavigationProps } from "../constants/globals"
import { useTsSelector } from "../redux/hooks"
import { RootState } from "../redux/store"
import Settings from "../components/Settings"
import PressableNav from "../components/PressableNav"
import MaterialiconHeader from "../components/MaterialIconHeader"
import { MaterialIcons } from "@expo/vector-icons"
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import globalStyle from "../constants/globalStyle"
import colors from "../constants/colors"
import NoData from "../components/NoData"

export default function Home({ navigation }: NavigationProps) {
	const [modalVisible, setModalVisible] = useState(false)

	const selectedCategories = useTsSelector(
		(state: RootState) => state.users.selectedCategories
	)

	const handleSettingsModal = () => {
		setModalVisible(!modalVisible)
	}

	const renderProfiles = ({ item }: { item: ItemProp }) => (
		<PressableNav
			item={item}
			handleNavigate={() => navigation.navigate("Profile", item)}
		/>
	)
	useEffect(() => {
		navigation.setParams({ handleModal: handleSettingsModal })
	}, [])
	if (!selectedCategories.length)
		return <NoData>Pas d'utilisateur à afficher.</NoData>
	return (
		<View style={globalStyle.container}>
			<Modal visible={modalVisible} animationType="slide">
				<View style={styles.modalBody}>
					<MaterialIcons
						name="close"
						size={24}
						style={styles.modalClose}
						onPress={handleSettingsModal}
					/>

					<Settings closeModal={handleSettingsModal} />
				</View>
			</Modal>
			<FlatList
				data={selectedCategories}
				renderItem={renderProfiles}
				style={{ ...globalStyle.container, ...styles.container }}
			/>
		</View>
	)
}

Home.navigationOptions = ({ navigation }: NavigationProps) => {
	const handleModal = navigation.getParam("handleModal")

	return {
		// headerLeft: () => (
		//     <HeaderButtons
		//         HeaderButtonComponent={MaterialiconHeader}
		//     >
		//         <Item
		//             title="Menu"
		//             iconName="menu"
		//             //onPress={() => navigation.toggleDrawer()}
		//             // onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
		//         />
		//     </HeaderButtons>
		// ),
		headerRight: () => (
			<HeaderButtons HeaderButtonComponent={MaterialiconHeader}>
				<Item
					title="Réglages"
					iconName="settings"
					onPress={handleModal}
				/>
			</HeaderButtons>
		),
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.background,
		width: "100%",
	},
	modalBody: {
		flex: 1,
		backgroundColor: colors.ghost,
		marginVertical: 60,
		padding: 20,
		alignSelf: "center",
		borderRadius: 10,
		width: "90%",
	},
	modalClose: {
		alignSelf: "flex-end",
	},
})

type ItemProp = {
	id: string
	name: string
	desc: string
	country: string
	category: string
	img: string
	favColor: string
	photos: {
		id: number
		url: string
		title: string
		photoDesc: string
	}[]
}
