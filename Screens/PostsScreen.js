import {
	Text,
	View,
	StyleSheet,
	Image,
	ScrollView,
	TouchableOpacity,
	TouchableOpacityBase,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import message from "../images/message-circle.png";
import mapPin from "../images/map-pin.png";

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
				{["ліс", "ліс", "ліс", "ліс", "ліс", "ліс"].map((n) => (
					<View style={styles.PostsScreenItem}>
						<Image style={styles.PostsScreenItemPicture} />
						<Text style={styles.PostsScreenItemText}>{n}</Text>
						<View style={styles.PostsScreenItemInfo}>
							<View style={styles.PostsScreenItemInfoAbout}>
								<TouchableOpacity
									style={styles.PostsScreenItemInfoAboutComment}
								>
									<Image source={message} />
								</TouchableOpacity>
								<Text style={styles.PostsScreenItemInfoAboutCounter}>0</Text>
							</View>
							<View style={styles.PostsScreenItemInfoLocation}>
								<Image source={mapPin} />
								<TouchableOpacity>
									<Text style={styles.PostsScreenItemInfoLocationInfo}>
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
		width: "100%",
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
	PostsScreenItemInfoLocation: {
		flexDirection: "row",
		gap: 8,
		alignItems: "center",
	},
	PostsScreenItemInfoLocationInfo: {
		fontSize: 16,
		lineHeight: 18.75,
		fontFamily: "DMMono-Regular",
		color: "#212121",
		textDecorationLine: "underline",
	},
});
