import React from "react"
import { View, FlatList } from "react-native"
import { NavigationProps } from "../constants/globals"
import { useTsSelector } from "../redux/hooks"
import NoData from "../components/NoData"
import LikedPictures from "../components/LikedPictures"
import globalStyle from "../constants/globalStyle"

export default function Likes({ navigation }: NavigationProps) {
	const likedUsers = useTsSelector((state) => state.users.likedUsers)

	return (
		<View style={globalStyle.container}>
			{likedUsers.length ? (
				<FlatList
					data={likedUsers}
					renderItem={(likedUsers) => (
						<LikedPictures
							items={likedUsers}
							navigation={navigation}
						/>
					)}
				/>
			) : (
				<NoData>Aucune image à afficher</NoData>
			)}
		</View>
	)
}
