import {
	ImageBackground,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	Image,
	View,
} from "react-native";
import PhotoBG from "../images/PhotoBG.png";
import { MaterialIcons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export const ProfileScreen = ({ navigation }) => {
	const { params } = useRoute();
	return (
		<View style={{ flex: 1 }}>
			<ImageBackground
				source={PhotoBG}
				resizeMode="cover"
				style={styles.imageBG}
			>
				<View style={styles.profileScreenContainer}>
					<View style={styles.profileScreenUser}>
						<Image style={styles.profileScreenUserImg} />
						<TouchableOpacity style={styles.profileScreenUserCross}>
							<Entypo name="cross" size={24} color="#BDBDBD" />
						</TouchableOpacity>
					</View>
					<TouchableOpacity
						style={styles.profileScreenLogout}
						onPress={() => navigation.navigate("Login")}
					>
						<MaterialIcons name="logout" size={24} color="#BDBDBD" />
					</TouchableOpacity>
					<Text style={styles.profileScreenUserName}>{params?.name}</Text>
					<ScrollView>
						{["forest", "forest", "forest"].map((f, index) => (
							<View key={index} style={styles.profileScreenItem}>
								<Image style={styles.profileScreenItemImg} />
								<Text style={styles.profileScreenItemText}>{f}</Text>
								<View style={styles.profileScreenItemInfo}>
									<View style={styles.profileScreenItemInfoFitback}>
										<View style={styles.profileScreenItemInfoFitbackComment}>
											<TouchableOpacity>
												<Feather
													style={{ transform: [{ rotateY: "180deg" }] }}
													name="message-circle"
													size={24}
													color="#FF6C00"
												/>
											</TouchableOpacity>
											<Text
												style={
													styles.profileScreenItemInfoFitbackCommentCounter
												}
											>
												23
											</Text>
										</View>
										<View style={styles.profileScreenItemInfoFitbackLikes}>
											<TouchableOpacity>
												<Feather name="thumbs-up" size={24} color="#FF6C00" />
											</TouchableOpacity>
											<Text
												style={styles.profileScreenItemInfoFitbackLikesCounter}
											>
												233
											</Text>
										</View>
									</View>
									<View style={styles.profileScreenItemInfoLocationBox}>
										<Feather name="map-pin" size={24} color="#BDBDBD" />
										<TouchableOpacity>
											<Text style={styles.profileScreenItemInfoLocationBoxText}>
												Ukraine
											</Text>
										</TouchableOpacity>
									</View>
								</View>
							</View>
						))}
					</ScrollView>
				</View>
			</ImageBackground>
		</View>
	);
};
const styles = StyleSheet.create({
	imageBG: { flex: 1, justifyContent: "flex-end" },
	profileScreenContainer: {
		height: "80%",
		width: "100%",
		backgroundColor: "#fff",
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		paddingHorizontal: 16,
		paddingTop: 22,
	},
	profileScreenUser: {
		position: "relative",
		alignItems: "center",
	},
	profileScreenUserImg: {
		position: "absolute",
		top: -82,
		height: 120,
		width: 120,
		backgroundColor: "gray",
		borderRadius: 16,
	},
	profileScreenLogout: { marginLeft: "auto", marginBottom: 46 },
	profileScreenUserCross: {
		borderWidth: 1,
		borderColor: "#BDBDBD",
		backgroundColor: "#fff",
		borderRadius: 50,
		top: 0,
		right: -60,
	},
	profileScreenUserName: {
		fontSize: 30,
		lineHeight: 35.16,
		letterSpacing: 1,
		textAlign: "center",
		marginBottom: 33,
	},
	profileScreenItem: {
		marginBottom: 32,
		gap: 8,
	},
	profileScreenItemImg: {
		width: "100%",
		height: 240,
		backgroundColor: "gray",
		borderRadius: 8,
	},
	profileScreenItemText: {
		color: "#212121",
		fontSize: 16,
		lineHeight: 18.75,
		fontFamily: "DMMono-Medium",
	},
	profileScreenItemInfo: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	profileScreenItemInfoFitback: {
		flexDirection: "row",
		gap: 24,
		alignItems: "center",
	},
	profileScreenItemInfoFitbackComment: {
		flexDirection: "row",
		gap: 6,
		alignItems: "center",
	},
	profileScreenItemInfoFitbackCommentCounter: {
		fontSize: 16,
		lineHeight: 18.75,
		fontFamily: "DMMono-Regular",
		color: "#212121",
	},
	profileScreenItemInfoFitbackLikes: {
		flexDirection: "row",
		gap: 6,
		alignItems: "center",
	},
	profileScreenItemInfoFitbackLikesCounter: {
		fontSize: 16,
		lineHeight: 18.75,
		fontFamily: "DMMono-Regular",
		color: "#212121",
	},
	profileScreenItemInfoLocationBox: {
		flexDirection: "row",
		gap: 8,
		alignItems: "center",
	},
	profileScreenItemInfoLocationBoxText: {
		fontSize: 16,
		lineHeight: 18.75,
		fontFamily: "DMMono-Regular",
		color: "#212121",
		textDecorationLine: "underline",
	},
});
