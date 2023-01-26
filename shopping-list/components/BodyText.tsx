import { Text } from "react-native"
import React from "react"
import globalStyle from "../constants/globalStyle"

export default function BodyText({ children, style, ...props }: Props) {
	return (
		<Text style={{ ...style, ...globalStyle.bodyText }} {...props}>
			{children}
		</Text>
	)
}
interface Props {
	children: string
	style: any
}
