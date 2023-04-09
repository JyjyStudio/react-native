import React from "react"
import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native"
import { COURSES } from "../data/mockedData"

export default function Home({ navigation }) {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={() => navigation.navigate("About")}
				style={styles.btn}
				activeOpacity={0.7}
			>
				<Text style={styles.textBtn}>go to about page</Text>
			</TouchableOpacity>
			<ScrollView>
				{COURSES.map((course) => (
					<View key={course.id} style={styles.courseContainer}>
						<Image source={{ uri: course.image }} style={styles.image} />
						<View style={styles.textContainer}>
							<Text style={styles.title}>{course.title}</Text>
							<Text>{course.description}</Text>
							<Text style={styles.price}>{course.price}€</Text>
						</View>
					</View>
				))}
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginHorizontal: 10,
		marginTop: 10,
	},
	courseContainer: {
		backgroundColor: "lightgray",
		marginVertical: 10,
	},
	image: {
		height: 150,
	},
	textContainer: {
		padding: 15,
	},
	title: {
		fontSize: 20,
		marginBottom: 7,
		fontWeight: "bold",
	},
	price: {
		fontSize: 18,
		marginTop: 7,
		alignSelf: "flex-end",
		fontWeight: "bold",
	},
	btn: {
		width: "100%",
		backgroundColor: "lightblue",
		padding: 5,
	},
	textBtn: {
		textAlign: "center",
		fontSize: 18,
	},
})
