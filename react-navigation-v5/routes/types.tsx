import { StackNavigationProp } from "@react-navigation/stack"
import { RouteProp } from "@react-navigation/native"

export type RootStackParamList = {
	Home: { isDark: undefined }
	Profil: {
		user: {
			userId: number
			name: string
			age: number
			favColor: string
		}
	}
	Listes: undefined //no params
	Sujets: undefined
	Signets: undefined
	Moments: undefined
	Settings: undefined
}

export type HomeScreenRouteProp = RouteProp<RootStackParamList, "Home">
export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">

export type HomeNavigationProps = {
	route?: HomeScreenRouteProp
	navigation?: HomeScreenNavigationProp
}
