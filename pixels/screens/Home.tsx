import React from "react"
import { FlatList, StyleSheet } from "react-native"
import { NavigationStackProp } from "react-navigation-stack"
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import MaterialiconHeader from "../components/MaterialiconHeader"
import PressableNav from "../components/PressableNav"
import globalStyle from "../constants/globalStyle"
import DATA from "../assets/data/data"
import colors from "../constants/colors"

export default function Home({ navigation }: Props) {
	const renderItem = ({ item }: { item: ItemProp }) => {
		return (
			<PressableNav
				item={item}
				handleNavigate={() => navigation.navigate("Profile", item)}
			/>
		)
	}
	return (
		<FlatList
			style={{ ...globalStyle.container, ...styles.container }}
			data={DATA}
			renderItem={renderItem}
		/>
	)
}

Home.navigationOptions = () => {
	return {
		headerLeft: () => (
			<HeaderButtons HeaderButtonComponent={MaterialiconHeader}>
				<Item
					title="menu"
					iconName="menu"
					onPress={() => alert("menu de la page Home")}
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
})

type Props = {
	navigation: NavigationStackProp
}

type ItemProp = {
	id: string
	name: string
	img: string
	desc: string
	country: string
	totalImg: number
}
