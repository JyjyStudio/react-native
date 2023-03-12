import React from "react"
import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
import { COURSES } from "../data/mockedData"
export default function Home() {
	return (
		<View style={styles.container}>
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
		width: "100%",
		marginTop: 40,
	},
	courseContainer: {
		backgroundColor: "lightgray",
		margin: 10,
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
})
