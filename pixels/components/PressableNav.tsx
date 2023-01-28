import {
	Text,
	View,
	Pressable,
	Image,
	GestureResponderEvent,
} from "react-native"
import React from "react"
import colors from "../constants/colors"
import globalStyle from "../constants/globalStyle"

export default function PressableNav({ item, handleNavigate }: Props) {
	return (
		<Pressable
			style={({ pressed }) => [
				{
					backgroundColor: pressed
						? colors.clicked
						: colors.background,
				},
				globalStyle.cardContainer,
			]}
			onPress={handleNavigate}
		>
			<Text style={globalStyle.cardTitle}>{item.name}</Text>
			<Image
				style={globalStyle.profilePicture}
				source={{ uri: item.img }}
			/>
			<View style={globalStyle.descriptionContainer}>
				<Text style={globalStyle.bodyText}>{item.country}</Text>
				<Text style={globalStyle.bodyText}>{item.totalImg} pics</Text>
			</View>
		</Pressable>
	)
}

type Props = {
	handleNavigate: (event: GestureResponderEvent) => void
	item: Item
}

type Item = {
	id: string
	name: string
	img: string
	desc: string
	country: string
	totalImg: number
}
