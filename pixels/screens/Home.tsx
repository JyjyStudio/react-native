import { FlatList, StyleSheet, View } from "react-native"
import React from "react"
import globalStyle from "../constants/globalStyle"
import { NavigationStackProp } from "react-navigation-stack"
import LinkButton from "../components/LinkButton"
import DATA from "../assets/data/data"
import colors from "../constants/colors"
import PressableNav from "../components/PressableNav"

export default function Home({ navigation }: Props) {
	const renderItem = ({ item }: { item: Item }) => {
		return (
			<PressableNav
				item={item}
				handleNavigate={() => navigation.navigate("Profile", item)}
			/>
		)
	}
	return (
		<View style={{ ...globalStyle.container, ...styles.container }}>
			<View style={globalStyle.linksContainer}>
				<LinkButton
					title="Portfolio"
					onPress={() => navigation.navigate("Portfolio")}
				/>
				<LinkButton
					title="Photos"
					onPress={() => navigation.navigate("Photos")}
				/>
			</View>
			<FlatList
				style={{ width: "100%" }}
				data={DATA}
				renderItem={renderItem}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.background,
	},
})

type Props = {
	navigation: NavigationStackProp
}

type Item = {
	id: string
	name: string
	img: string
	desc: string
	country: string
	totalImg: number
}
