import { StackNavigationProp } from "@react-navigation/stack"
import { RouteProp } from "@react-navigation/native"

export type RootStackParamList = {
	Home: undefined //no params
	Profil: {
		user: {
			userId: number
			name: string
			age: number
			favColor: string
		}
	}
	Listes: undefined
	Sujets: undefined
	Signets: undefined
	Moments: undefined
	Settings: undefined
}

export type HomeScreenRouteProp = RouteProp<RootStackParamList, "Home">
export type ProfileScreenRouteProp = RouteProp<RootStackParamList, "Profil">
export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">

export type NavigationProps = {
	route?: HomeScreenRouteProp
	navigation?: HomeScreenNavigationProp
}
