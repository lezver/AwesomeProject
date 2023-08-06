import {
	View,
	Text,
	Image,
	StyleSheet,
	ScrollView,
	TextInput,
	TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";

export const CommentsScreen = ({ route }) => {
	const [text, setText] = useState("");
	const [commets, setCommets] = useState([]);

	const handlerComment = () => {
		setCommets((prevState) => [...prevState, { text: text }]);
		setText("");
	};
	return (
		<View style={styles.commentsScreenContainer}>
			<Image
				source={{ uri: route.params?.picture }}
				style={styles.commentsScreenPicture}
			/>
			<ScrollView style={styles.commentsScreenChat}>
				{commets?.map((comment, index) => (
					<View key={index} style={styles.commentsScreenChatComent}>
						<Image
							source={comment?.img}
							style={styles.commentsScreenChatComentImg}
						/>
						<View style={styles.commentsScreenChatComentBox}>
							<Text style={styles.commentsScreenChatComentBoxSentence}>
								{comment?.text}
							</Text>
							<Text style={styles.commentsScreenChatComentBoxDate}>
								{new Date().toLocaleString()}
							</Text>
						</View>
					</View>
				))}
			</ScrollView>
			<View style={styles.commentsScreenCreateMessage}>
				<TextInput
					style={styles.commentsScreenCreateMessageInput}
					placeholder="Коментувати..."
					value={text}
					onChangeText={setText}
				/>
				<TouchableOpacity
					style={styles.commentsScreenCreateMessageBtn}
					onPress={handlerComment}
				>
					<AntDesign name="arrowup" size={24} color="#fff" />
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	commentsScreenContainer: {
		flex: 1,
		backgroundColor: "#fff",
		paddingTop: 32,
		paddingHorizontal: 16,
		paddingBottom: 16,
		gap: 32,
	},
	commentsScreenPicture: {
		height: 240,
		width: "100%",
		backgroundColor: "gray",
		borderRadius: 8,
	},
	commentsScreenChat: { flex: 1, flexDirection: "row-reverse" },
	commentsScreenChatComent: {
		flexDirection: "row",
		gap: 16,
		marginBottom: 24,
		flexDirection: "row-reverse",
	},
	commentsScreenChatComentImg: {
		height: 28,
		width: 28,
		borderRadius: 50,
		backgroundColor: "gray",
	},
	commentsScreenChatComentBox: {
		backgroundColor: "#F6F6F6",
		padding: 16,
		borderRadius: 6,
		gap: 8,
	},
	commentsScreenChatComentBoxSentence: {
		fontFamily: "DMMono-Regular",
		fontSize: 13,
		lineHeight: 18,
		color: "#212121",
	},
	commentsScreenChatComentBoxDate: {
		fontFamily: "DMMono-Regular",
		marginLeft: "auto",
		fontSize: 10,
		lineHeight: 11.72,
		color: "#BDBDBD",
	},
	commentsScreenCreateMessage: { position: "relative" },
	commentsScreenCreateMessageInput: {
		backgroundColor: "#F6F6F6",
		borderWidth: 1,
		borderColor: "#E8E8E8",
		lineHeight: 18.75,
		fontSize: 16,
		padding: 16,
		paddingRight: 50,
		borderRadius: 50,
		fontFamily: "DMMono-Regular",
	},
	commentsScreenCreateMessageBtn: {
		backgroundColor: "#FF6C00",
		height: 34,
		width: 34,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 50,
		position: "absolute",
		right: 8,
		top: 9,
	},
});
