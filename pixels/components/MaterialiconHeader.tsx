import React from "react"
import {
	HeaderButton,
	HeaderButtonProps,
} from "react-navigation-header-buttons"
import { MaterialIcons } from "@expo/vector-icons"
import colors from "../constants/colors"

export default function MaterialiconHeader(props: HeaderButtonProps) {
	return (
		<HeaderButton
			IconComponent={MaterialIcons}
			iconSize={24}
			color={colors.light}
			{...props}
		/>
	)
}
