import React from "react"
import { FlatList, StyleSheet } from "react-native"
import { NavigationStackProp } from "react-navigation-stack"
import PressableNav from "../components/PressableNav"
import globalStyle from "../constants/globalStyle"
import { DATA } from "../data/data"
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
