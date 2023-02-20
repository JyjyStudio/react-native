import React, { useState, useCallback } from "react"
import { Button, StyleSheet, Text, View } from "react-native"
import { save_settings } from "../redux/slices/userSlice"
import { useTsDispatch } from "../redux/hooks"
import CustomSwitch from "./CustomSwitch"
import globalStyle from "../constants/globalStyle"
import colors from "../constants/colors"

const Settings = ({ closeModal }: Props) => {
	const dispatch = useTsDispatch()

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
		dispatch(save_settings(savedSettings))
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
				handleSwitch={(newVal: boolean) => setIsAnimals(newVal)}
			/>

			<CustomSwitch
				label="Voyages"
				state={isTravel}
				handleSwitch={(newVal: boolean) => setIsTravel(newVal)}
			/>

			<CustomSwitch
				label="Voitures"
				state={isCars}
				handleSwitch={(newVal: boolean) => setIsCars(newVal)}
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
		borderColor: colors.lightGrey,
		marginVertical: 25,
	},
})

type Props = {
	closeModal: () => void
}

export default Settings
