import React, { useEffect, useState, useCallback } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createDrawerNavigator } from "@react-navigation/drawer"
import CustomDrawerContent from "./components/CustomDrawerContent"
import BottomTabNav from "./routes/BottomTabNav"
import { useWindowDimensions } from "react-native"
import { ThemeProvider } from "./context/ThemeProvider"
import {
	useFonts,
	Montserrat_300Light,
	Montserrat_400Regular,
	Montserrat_500Medium,
	Montserrat_700Bold,
} from "@expo-google-fonts/montserrat"

const Drawer = createDrawerNavigator()

export default function App() {
	const dimensions = useWindowDimensions()
	const isLargeScreen = dimensions.width >= 768
	let [fontsLoaded] = useFonts({
		Montserrat_300Light,
		Montserrat_400Regular,
		Montserrat_500Medium,
		Montserrat_700Bold,
	})

	if (!fontsLoaded) {
		return null
	}
	return (
		<ThemeProvider>
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
		</ThemeProvider>
	)
}

