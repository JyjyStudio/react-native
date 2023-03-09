import { RouteProp } from "@react-navigation/native"
import { DrawerNavigationProp } from "@react-navigation/drawer"

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
export type HomeScreenNavigationProp = DrawerNavigationProp<RootStackParamList, "Home">

export type NavigationProps = {
	route?: HomeScreenRouteProp
	navigation?: HomeScreenNavigationProp
}
