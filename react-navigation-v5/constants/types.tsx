import { StackNavigationProp } from "@react-navigation/stack"
import { RouteProp } from "@react-navigation/native"

export type RootStackParamList = {
	Home: undefined //no params
	Portfolio: { userId: string }
}

export type ScreenNavigationProp = StackNavigationProp<RootStackParamList>
type ProfileScreenRouteProp = RouteProp<RootStackParamList, "Portfolio">

export type NavigationProps = {
	route: ProfileScreenRouteProp
	navigation: ScreenNavigationProp
}
