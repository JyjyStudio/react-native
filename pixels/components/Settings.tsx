import React, { useState, useCallback } from "react"
import { Button, StyleSheet, Text, View } from "react-native"
import globalStyle from "../constants/globalStyle"
import colors from "../constants/colors"
import CustomSwitch from "./CustomSwitch"
import { setCategorySettings } from "../redux/actions/actionSettings"
import { useDispatch } from "react-redux"

const Settings = ({ closeModal }: any) => {
	const dispatch = useDispatch()

	const [isAnimals, setIsAnimals] = useState(true)
	const [isTravel, setIsTravel] = useState(true)
	const [isCars, setIsCars] = useState(true)

	const saveSettings = useCallback(() => {
		const savedSettings = {
			animals: isAnimals,
			travel: isTravel,
			cars: isCars,
		}

		// dispatch action
		dispatch(setCategorySettings(savedSettings))
		closeModal()
	}, [isAnimals, isTravel, isCars])

	return (
		<View style={globalStyle.container}>
			<Text style={styles.settingsTitle}>Réglages</Text>
			<Text style={styles.settingsText}>
				Utilisez les paramètres ci-dessous pour gérer les catégories à
				afficher
			</Text>
			<View style={styles.separator} />

			<CustomSwitch
				label="Animaux"
				state={isAnimals}
				handleSwitch={(newVal: any) => setIsAnimals(newVal)}
			/>

			<CustomSwitch
				label="Voyages"
				state={isTravel}
				handleSwitch={(newVal: any) => setIsTravel(newVal)}
			/>

			<CustomSwitch
				label="Voitures"
				state={isCars}
				handleSwitch={(newVal: any) => setIsCars(newVal)}
			/>

			{isAnimals === false && isTravel === false && isCars === false ? (
				<Text
					style={{
						...styles.settingsText,
						color: colors.selected,
						textAlign: "center",
					}}
				>
					Veuillez choisir une catégorie
				</Text>
			) : (
				<Button title="Valider les paramètres" onPress={saveSettings} />
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	settingsTitle: {
		fontSize: 20,
		padding: 9,
		fontFamily: "Ubuntu_700Bold",
		textAlign: "center",
		margin: 16,
		textTransform: "uppercase",
	},
	settingsText: {
		fontFamily: "Ubuntu_300Light",
		fontSize: 19,
		padding: 9,
	},
	separator: {
		borderWidth: 0.5,
		borderColor: colors.ghost,
		marginVertical: 25,
	},
})

export default Settings
