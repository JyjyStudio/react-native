import React from "react"
import { FlatList, StyleSheet } from "react-native"
import PressableNav from "../components/PressableNav"
import globalStyle from "../constants/globalStyle"
import { DATA } from "../data/data"
import colors from "../constants/colors"
import { NavigationProps } from "../constants/globals"

export default function Home({ navigation }: NavigationProps) {
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

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.background,
		width: "100%",
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
