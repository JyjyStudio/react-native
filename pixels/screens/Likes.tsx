import React from "react"
import { View, FlatList } from "react-native"
import globalStyle from "../constants/globalStyle"
import EmptyLikes from "../components/EmptyLikes"
import { NavigationProps } from "../constants/globals"
import { useTsSelector } from "../redux/hooks"
import LikedPictures from "../components/LikedPictures"

export default function Likes({ navigation }: NavigationProps) {
	const selectedUsers = useTsSelector((state) => state.users.selectedUsers)

	return (
		<View style={globalStyle.container}>
			{selectedUsers.length ? (
				<FlatList
					data={selectedUsers}
					renderItem={(selectedUsers) => (
						<LikedPictures
							items={selectedUsers}
							navigation={navigation}
						/>
					)}
				/>
			) : (
				<EmptyLikes>Aucune image à afficher</EmptyLikes>
			)}
		</View>
	)
}
