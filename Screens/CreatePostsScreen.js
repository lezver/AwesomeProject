import {
	Image,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import takePicture from "../images/take-a-picture.png";
import mapPin from "../images/map-pin.png";
import trash from "../images/trash.png";

export const CreatePostsScreen = () => {
	return (
		<View style={styles.createPostsScreenContainer}>
			<View style={styles.createPostsScreenImgBox}>
				<View style={styles.createPostsScreenImgSquare}>
					<Image source={takePicture} />
				</View>
				<TouchableOpacity style={styles.createPostsScreenImgBoxBtn}>
					<Text style={styles.createPostsScreenImgBoxBtnText}>
						Завантажити фото
					</Text>
				</TouchableOpacity>
			</View>
			<TextInput
				style={{ ...styles.createPostsScreenInput, marginBottom: 16 }}
				placeholder="Назва..."
			/>
			<View style={styles.createPostsScreenInputBox}>
				<TextInput
					style={{ ...styles.createPostsScreenInput, paddingLeft: 28 }}
					placeholder="Місцевість..."
				/>
				<Image style={styles.createPostsScreenInputBoxIcon} source={mapPin} />
			</View>
			<TouchableOpacity style={styles.createPostsScreenInputBtnAdd}>
				<Text style={styles.createPostsScreenInputBtnAddText}>
					Опублікувати
				</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.createPostsScreenInputBtnDelete}>
				<Image source={trash} />
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	createPostsScreenContainer: {
		flex: 1,
		backgroundColor: "#fff",
		paddingHorizontal: 16,
		paddingVertical: 32,
	},
	createPostsScreenImgBox: {
		gap: 8,
		marginBottom: 32,
	},
	createPostsScreenImgSquare: {
		width: "100%",
		height: 240,
		backgroundColor: "#F6F6F6",
		borderRadius: 8,
		borderWidth: 1,
		borderColor: "#E8E8E8",
		justifyContent: "center",
		alignItems: "center",
	},
	createPostsScreenImgBoxBtn: {},
	createPostsScreenImgBoxBtnText: {
		color: "#BDBDBD",
		lineHeight: 18.75,
		fontSize: 16,
		fontFamily: "DMMono-Regular",
	},
	createPostsScreenInput: {
		fontFamily: "DMMono-Regular",
		fontSize: 16,
		lineHeight: 18.75,
		borderBottomWidth: 1,
		borderColor: "#BDBDBD",
		paddingVertical: 16,
	},
	createPostsScreenInputBox: {
		position: "relative",
		marginBottom: 32,
	},
	createPostsScreenInputBoxIcon: {
		position: "absolute",
		top: 12.5,
	},
	createPostsScreenInputBtnAdd: {
		width: "100%",
		paddingVertical: 16,
		backgroundColor: "#F6F6F6",
		borderRadius: 100,
		marginBottom: "auto",
	},
	createPostsScreenInputBtnAddText: {
		color: "#BDBDBD",
		lineHeight: 18.75,
		fontSize: 16,
		fontFamily: "DMMono-Regular",
		textAlign: "center",
	},
	createPostsScreenInputBtnDelete: {
		backgroundColor: "#F6F6F6",
		borderRadius: 100,
		width: 70,
		height: 40,
		marginLeft: "auto",
		marginRight: "auto",
		justifyContent: "center",
		alignItems: "center",
	},
});
