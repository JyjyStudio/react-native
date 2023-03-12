import React, { useContext } from "react"
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer"
import { StyleSheet, View } from "react-native"
import {
	Text,
	Avatar,
	Title,
	Caption,
	Paragraph,
	Drawer,
	TouchableRipple,
	Switch,
} from "react-native-paper"
import { MaterialIcons } from "@expo/vector-icons"
import { ThemeContext } from "../context/ThemeProvider"

export default function CustomDrawerContent(props) {
	const { isDark, colors, setTheme } = useContext(ThemeContext)

	const toggleDarkTheme = () => {
		isDark ? setTheme("light") : setTheme("dark")
	}

	return (
		<View style={[styles.container, { backgroundColor: colors.navigationBackground }]}>
			{/* <DrawerContentScrollView {...props}> */}
			<View style={styles.drawerContentContainer}>
				<View style={styles.userInfoContainer}>
					<View style={styles.userInfoDetails}>
						<Avatar.Image
							source={{
								uri: "https://avatars.githubusercontent.com/u/75069243?v=4",
							}}
							size={90}
						/>
						<View style={styles.name}>
							<Title style={[styles.title, { color: colors.primary }]}>
								Jyjystudio
							</Title>
							<Caption style={[styles.caption, , { color: colors.primary }]}>
								@Jyjystudio
							</Caption>
						</View>
					</View>

					<View style={styles.followers}>
						<View style={styles.section}>
							<Paragraph
								style={[
									styles.paragraph,
									styles.section,
									{ color: colors.primary },
								]}
							>
								24
							</Paragraph>
							<Caption style={[styles.caption, { color: colors.primary }]}>
								Abonnements
							</Caption>
						</View>
						<View style={styles.section}>
							<Paragraph
								style={[
									styles.paragraph,
									styles.section,
									{ color: colors.primary },
								]}
							>
								48
							</Paragraph>
							<Caption style={[styles.caption, { color: colors.primary }]}>
								Abonnés
							</Caption>
						</View>
					</View>
				</View>

				<View style={styles.drawerSection}>
					<DrawerItem
						labelStyle={styles.labels}
						// activeTintColor={colors.primary}
						inactiveTintColor={colors.primary}
						label="Profil"
						icon={({ color, size }) => (
							<MaterialIcons name="face" size={size} color={colors.primary} />
						)}
						onPress={() => props.navigation.navigate("Profil")}
					/>

					<DrawerItem
						labelStyle={styles.labels}
						inactiveTintColor={colors.primary}
						label="Listes"
						icon={({ color, size }) => (
							<MaterialIcons name="list-alt" size={size} color={colors.primary} />
						)}
						onPress={() => props.navigation.navigate("Listes")}
					/>

					<DrawerItem
						labelStyle={styles.labels}
						inactiveTintColor={colors.primary}
						label="Sujets"
						icon={({ color, size }) => (
							<MaterialIcons name="comment" size={size} color={colors.primary} />
						)}
						onPress={() => props.navigation.navigate("Sujets")}
					/>

					<DrawerItem
						labelStyle={styles.labels}
						inactiveTintColor={colors.primary}
						label="Signets"
						icon={({ color, size }) => (
							<MaterialIcons
								name="bookmark-border"
								size={size}
								color={colors.primary}
							/>
						)}
						onPress={() => props.navigation.navigate("Signets")}
					/>

					<DrawerItem
						labelStyle={styles.labels}
						inactiveTintColor={colors.primary}
						label="Moments"
						icon={({ color, size }) => (
							<MaterialIcons name="flash-on" size={size} color={colors.primary} />
						)}
						onPress={() => props.navigation.navigate("Moments")}
					/>
				</View>

				<View style={styles.drawerSection}>
					<DrawerItem
						labelStyle={styles.labels}
						inactiveTintColor={colors.primary}
						label="Paramètres"
						icon={({ color, size }) => (
							<MaterialIcons name="settings" size={size} color={colors.primary} />
						)}
						onPress={() => props.navigation.navigate("Settings")}
					/>

					<TouchableRipple onPress={toggleDarkTheme}>
						<View style={styles.settings}>
							<Text
								style={{
									color: colors.primary,
									fontSize: 16,
									fontFamily: "Montserrat_400Regular",
								}}
							>
								Mode sombre
							</Text>
							<View pointerEvents="none">
								<Switch value={isDark} />
							</View>
						</View>
					</TouchableRipple>
				</View>
				<View style={styles.drawerSection}>
					<DrawerItem
						labelStyle={styles.labels}
						inactiveTintColor={colors.primary}
						label="Déconnexion"
						icon={({ color, size }) => (
							<MaterialIcons name="logout" size={size} color={colors.primary} />
						)}
						onPress={() => alert("Vous êtes déconnecté.")}
					/>
				</View>
			</View>
			{/* </DrawerContentScrollView> */}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		borderRightWidth: 1,
		borderRightColor: "black",
	},
	drawerContentContainer: {
		flex: 1,
		justifyContent: "space-between",
	},
	userInfoContainer: {
		alignItems: "center",
		marginTop: 30,
	},
	userInfoDetails: { marginTop: 15 },
	name: {
		marginTop: 10,
		justifyContent: "center",
	},
	title: {
		fontSize: 20,
		marginTop: 10,
		fontFamily: "Montserrat_700Bold",
		// fontWeight: "bold",
	},
	caption: {
		fontSize: 14,
		fontFamily: "Montserrat_500Medium",
	},
	followers: {
		marginTop: 20,
		flexDirection: "row",
	},
	section: {
		flexDirection: "row",
		marginRight: 9,
	},
	paragraph: {
		fontWeight: "bold",
	},
	drawerSection: {
		marginTop: 19,
		borderTopWidth: 1,
		borderTopColor: "#ccc",
	},
	settings: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 15,
	},
	labels: {
		fontSize: 17,
		fontFamily: "Montserrat_400Regular",
	},
})
