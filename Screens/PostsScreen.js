import { Text, View, StyleSheet, Pressable } from "react-native";

export const PostsScreen = () => {
	return (
		<View style={styles.test}>
			<Text>PostsScreen</Text>
			<Pressable style={styles.btn}>
				<Text style={styles.btnText}>Button</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	test: {
		backgroundColor: "white",
		marginTop: "auto",
		alignItems: "center",
		justifyContent: "center",
		height: 144,
	},
	btn: {
		backgroundColor: "green",
		borderRadius: 50,
		padding: 25,
	},
	btnText: {},
});
