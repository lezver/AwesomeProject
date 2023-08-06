import {
	Image,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import {
	FontAwesome,
	MaterialCommunityIcons,
	Feather,
} from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as Location from "expo-location";

export const CreatePostsScreen = ({ navigation }) => {
	const [hasPermission, setHasPermission] = useState(null);
	const [cameraRef, setCameraRef] = useState(null);
	const [type, setType] = useState(Camera.Constants.Type.back);
	const [image, setImage] = useState(null);
	const [nameImg, setNameImg] = useState("");
	const [nameLocation, setNameLocation] = useState("");
	const [location, setLocation] = useState(null);
	const [postStatus, setPostStatus] = useState(false);

	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestCameraPermissionsAsync();

			await MediaLibrary.requestPermissionsAsync();

			setHasPermission(status === "granted");
		})();
	}, []);

	useEffect(() => {
		if (image && nameImg && nameLocation) {
			setPostStatus(true);
		} else {
			setPostStatus(false);
		}
	}, [nameImg, nameImg, nameLocation]);

	const handlerPostDelete = () => {
		setImage(null), setNameImg(""), setNameLocation("");
	};

	const handlerAddPost = () => {
		navigation.navigate("ProfileScreen", {
			image,
			nameImg,
			nameLocation,
			location,
		});
		navigation.navigate("PostsScreen", {
			image,
			nameImg,
			nameLocation,
			location,
		});
		handlerPostDelete();
	};

	const handlerCameraFlip = () =>
		setType(
			type === Camera.Constants.Type.back
				? Camera.Constants.Type.front
				: Camera.Constants.Type.back
		);

	const handlerGetPitcure = async () => {
		if (cameraRef) {
			const { uri } = await cameraRef.takePictureAsync();

			setImage(uri);
		}

		let { status } = await Location.requestForegroundPermissionsAsync();
		if (status !== "granted") {
			alert("Promisson to access location was denied");
		}
		let location = await Location.getCurrentPositionAsync();
		const coords = {
			latitude: location.coords.latitude,
			longitude: location.coords.longitude,
		};
		setLocation(coords);
	};

	if (hasPermission === null) {
		return (
			<View style={styles.createPostsErrorBox}>
				<Text style={styles.createPostsErrorText}>
					Something wrong, try again later...
				</Text>
			</View>
		);
	}
	if (hasPermission === false) {
		return (
			<View style={styles.createPostsErrorBox}>
				<Text style={styles.createPostsErrorText}> No access to camera</Text>
			</View>
		);
	}

	return (
		<KeyboardAwareScrollView
			contentContainerStyle={{ flex: 1 }}
			resetScrollToCoords={{ x: 0, y: 0 }}
			scrollEnabled={true}
		>
			<View style={styles.createPostsScreenContainer}>
				<View style={styles.createPostsScreenImgBox}>
					<View style={styles.createPostsScreenTwoInOneBox}>
						{image ? (
							<View
								style={{
									width: "100%",
									height: "100%",
									position: "relative",
								}}
							>
								<Image
									style={{ width: "100%", height: "100%" }}
									source={{ uri: image }}
								/>
								<TouchableOpacity
									style={{
										backgroundColor: "#ffffff",
										height: 30,
										width: 30,
										borderRadius: 50,
										justifyContent: "center",
										alignItems: "center",
										bottom: 10,
										right: 10,
										position: "absolute",
									}}
									onPress={() => setImage(null)}
								>
									<Feather name="trash-2" size={16} color="#000" />
								</TouchableOpacity>
							</View>
						) : (
							<Camera
								style={styles.createPostsScreenCameraBox}
								type={type}
								ref={setCameraRef}
							>
								<TouchableOpacity
									style={styles.createPostsScreenCameraBoxBtn}
									onPress={handlerGetPitcure}
								>
									<FontAwesome name="camera" size={24} color="#BDBDBD" />
								</TouchableOpacity>
								<TouchableOpacity
									style={styles.createPostsScreenCameraBoxBtnFlip}
									onPress={handlerCameraFlip}
								>
									<MaterialCommunityIcons
										name="camera-flip-outline"
										size={24}
										color="black"
									/>
								</TouchableOpacity>
							</Camera>
						)}
					</View>
					<Text style={styles.createPostsScreenDescriptionState}>
						{image ? "Рeдагувати фото" : "Завантажити фото"}
					</Text>
				</View>
				<TextInput
					style={{ ...styles.createPostsScreenInput, marginBottom: 16 }}
					placeholder="Назва..."
					value={nameImg}
					onChangeText={setNameImg}
				/>
				<View style={styles.createPostsScreenInputBox}>
					<TextInput
						style={{ ...styles.createPostsScreenInput, paddingLeft: 28 }}
						placeholder="Місцевість..."
						value={nameLocation}
						onChangeText={setNameLocation}
					/>
					<Feather
						style={styles.createPostsScreenInputBoxIcon}
						name="map-pin"
						size={24}
						color="#BDBDBD"
					/>
				</View>
				<TouchableOpacity
					style={{
						...styles.createPostsScreenInputBtnAdd,
						backgroundColor: !postStatus ? "#F6F6F6" : "#FF6C00",
					}}
					disabled={!postStatus}
					onPress={handlerAddPost}
				>
					<Text
						style={{
							...styles.createPostsScreenInputBtnAddText,
							color: !postStatus ? "#BDBDBD" : "#fff",
						}}
					>
						Опублікувати
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.createPostsScreenInputBtnDelete}
					onPress={handlerPostDelete}
					disabled={!postStatus}
				>
					<Feather
						name="trash-2"
						size={24}
						color={!postStatus ? "#BDBDBD" : "black"}
					/>
				</TouchableOpacity>
			</View>
		</KeyboardAwareScrollView>
	);
};

const styles = StyleSheet.create({
	createPostsScreenContainer: {
		flex: 1,
		display: "block",
		backgroundColor: "#fff",
		paddingHorizontal: 16,
		paddingVertical: 32,
	},
	createPostsScreenImgBox: {
		gap: 8,
		marginBottom: 32,
	},
	createPostsScreenTwoInOneBox: {
		overflow: "hidden",
		borderRadius: 8,
		width: "100%",
		height: 240,
		borderWidth: 1,
		borderColor: "#E8E8E8",
	},
	createPostsScreenCameraBox: {
		flex: 1,
		backgroundColor: "#F6F6F6",
		position: "relative",
	},
	createPostsScreenCameraBoxBtn: {
		height: 50,
		width: 50,
		borderRadius: 50,
		backgroundColor: "#fff",
		justifyContent: "center",
		alignItems: "center",
		position: "absolute",
		bottom: 10,
		left: "50%",
		transform: [{ translateX: -30 }],
	},
	createPostsScreenCameraBoxBtnFlip: {
		height: 40,
		width: 40,
		backgroundColor: "#fff",
		bottom: 10,
		right: 10,
		position: "absolute",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 50,
	},
	createPostsScreenDescriptionState: {
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
		borderRadius: 100,
		marginBottom: "auto",
	},
	createPostsScreenInputBtnAddText: {
		color: "#fff",
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
	createPostsErrorBox: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	createPostsErrorText: {
		fontSize: 30,
		color: "tomato",
	},
});
