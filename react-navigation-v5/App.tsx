import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createDrawerNavigator } from "@react-navigation/drawer"
import CustomDrawerContent from "./components/CustomDrawerContent"
import BottomTabNav from "./routes/BottomTabNav"
import { useWindowDimensions } from "react-native"

const Drawer = createDrawerNavigator()

export default function App() {
	const dimensions = useWindowDimensions()
	const isLargeScreen = dimensions.width >= 768
	return (
		<NavigationContainer>
			<Drawer.Navigator
				drawerContent={(props) => <CustomDrawerContent {...props} />}
				drawerType={isLargeScreen ? "permanent" : "front"}
				drawerStyle={isLargeScreen ? null : { width: "70%" }}
				edgeWidth={100}
				overlayColor="transparent"
			>
				<Drawer.Screen name="Home" component={BottomTabNav} />
			</Drawer.Navigator>
		</NavigationContainer>
	)
}

