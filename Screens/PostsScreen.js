import {
	Text,
	View,
	StyleSheet,
	Image,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

export const PostsScreen = () => {
	const { params } = useRoute();

	return (
		<View style={styles.PostsScreenContainer}>
			<View style={styles.PostsScreenUserBox}>
				<Image style={styles.PostsScreenUserBoxImg} />
				<View>
					<Text style={styles.PostsScreenUserBoxName}>{params?.name}</Text>
					<Text style={styles.PostsScreenUserBoxEmail}>{params?.email}</Text>
				</View>
			</View>
			<ScrollView>
				{["ліс", "ліс", "ліс", "ліс", "ліс", "ліс"].map((n, index) => (
					<View key={index} style={styles.PostsScreenItem}>
						<Image style={styles.PostsScreenItemPicture} />
						<Text style={styles.PostsScreenItemText}>{n}</Text>
						<View style={styles.PostsScreenItemInfo}>
							<View style={styles.PostsScreenItemInfoAbout}>
								<TouchableOpacity
									style={styles.PostsScreenItemInfoAboutComment}
								>
									<Feather
										style={{ transform: [{ rotateY: "180deg" }] }}
										name="message-circle"
										size={24}
										color="#BDBDBD"
									/>
								</TouchableOpacity>
								<Text style={styles.PostsScreenItemInfoAboutCounter}>0</Text>
							</View>
							<View style={styles.PostsScreenItemInfoLocationBox}>
								<Feather name="map-pin" size={24} color="#BDBDBD" />
								<TouchableOpacity>
									<Text style={styles.PostsScreenItemInfoLocationBoxText}>
										bla bla bla
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				))}
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	PostsScreenContainer: {
		flex: 1,
		backgroundColor: "#fff",
		paddingHorizontal: 16,
	},
	PostsScreenUserBox: {
		flexDirection: "row",
		alignItems: "center",
		marginVertical: 32,
		gap: 8,
	},
	PostsScreenUserBoxImg: {
		height: 60,
		width: 60,
		borderRadius: 16,
		backgroundColor: "gray",
	},
	PostsScreenUserBoxName: {
		fontSize: 13,
		fontFamily: "DMMono-Medium",
		lineHeight: 15.23,
		color: "#212121",
	},
	PostsScreenUserBoxEmail: {
		color: "#212121CC",
		fontSize: 11,
		lineHeight: 12.89,
		fontFamily: "DMMono-Regular",
	},
	PostsScreenItem: {
		marginBottom: 32,
		gap: 8,
	},
	PostsScreenItemPicture: {
		width: "100%",
		height: 240,
		backgroundColor: "#212121CC",
		borderRadius: 8,
	},
	PostsScreenItemText: {
		color: "#212121",
		fontSize: 16,
		lineHeight: 18.75,
		fontFamily: "DMMono-Medium",
	},
	PostsScreenItemInfo: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	PostsScreenItemInfoAbout: {
		flexDirection: "row",
		gap: 6,
		alignItems: "center",
	},
	PostsScreenItemInfoAboutComment: {},
	PostsScreenItemInfoAboutCounter: {
		fontSize: 16,
		lineHeight: 18.75,
		fontFamily: "DMMono-Regular",
		color: "#BDBDBD",
	},
	PostsScreenItemInfoLocationBox: {
		flexDirection: "row",
		gap: 8,
		alignItems: "center",
	},
	PostsScreenItemInfoLocationBoxText: {
		fontSize: 16,
		lineHeight: 18.75,
		fontFamily: "DMMono-Regular",
		color: "#212121",
		textDecorationLine: "underline",
	},
});
