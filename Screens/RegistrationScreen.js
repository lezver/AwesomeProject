import {
	Image,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	Keyboard,
	TouchableWithoutFeedback,
	KeyboardAvoidingView,
	ImageBackground,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import PhotoBG from "../images/PhotoBG.png";

const checkingDevice = Platform.OS === "ios" ? "padding" : "height";

export const RegistrationScreen = ({ navigation }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [userLogin, setUserLogin] = useState("");
	const [userEmail, setUserEmail] = useState("");
	const [userPassword, setUserPassword] = useState("");
	const [booleanValue, setBooleanValue] = useState(true);

	const closeKeyboard = () => {
		setIsOpen(false);
		Keyboard.dismiss();
	};

	const handlerRegistrationForm = () => {
		setIsOpen(false);
		Keyboard.dismiss();

		setUserLogin("");
		setUserEmail("");
		setUserPassword("");
	};

	const handlerShowPassword = () => setBooleanValue((prevState) => !prevState);

	return (
		<View style={{ flex: 1 }}>
			<ImageBackground
				source={PhotoBG}
				resizeMode="cover"
				style={styles.imageBG}
			>
				<TouchableWithoutFeedback onPress={closeKeyboard}>
					<KeyboardAvoidingView behavior={checkingDevice}>
						<View
							style={{
								...styles.registrationForm,
								height: isOpen ? 493 : 549,
							}}
						>
							<View style={styles.registrationAvatar}>
								<TouchableOpacity style={styles.registrationAvatarAdd}>
									<AntDesign name="pluscircleo" size={24} color="#FF6C00" />
								</TouchableOpacity>
							</View>

							<Text style={styles.registrationTitle}>Реєстрація</Text>

							<View style={styles.registrationWrapper}>
								<TextInput
									style={styles.registrationInputs}
									placeholder="Логін"
									inputMode="text"
									onFocus={() => setIsOpen(true)}
									value={userLogin}
									onChangeText={setUserLogin}
								/>

								<TextInput
									style={styles.registrationInputs}
									placeholder="Адреса електронної пошти"
									inputMode="email"
									onFocus={() => setIsOpen(true)}
									value={userEmail}
									onChangeText={setUserEmail}
								/>

								<View style={styles.registrationPasswordBox}>
									<TextInput
										style={{ ...styles.registrationInputs, paddingRight: 110 }}
										placeholder="Пароль"
										secureTextEntry={booleanValue}
										onFocus={() => setIsOpen(true)}
										value={userPassword}
										onChangeText={setUserPassword}
									/>

									<TouchableOpacity
										style={styles.registrationPasswordBoxSwitch}
										onPress={handlerShowPassword}
									>
										<Text style={styles.registrationPasswordBoxSwitchText}>
											{booleanValue ? "Показати" : "Сховати"}
										</Text>
									</TouchableOpacity>
								</View>
							</View>

							<TouchableOpacity
								style={styles.registrationBoxButton}
								onPress={
									(handlerRegistrationForm,
									() =>
										navigation.navigate("Home", {
											name: userLogin,
											email: userEmail,
											// password: userPassword,
										}))
								}
							>
								<Text style={styles.registrationButtonText}>
									Зареєструватися
								</Text>
							</TouchableOpacity>
							<View style={styles.registrationLoginBox}>
								<Text style={styles.registrationLoginBoxText}>
									Вже є аккунт?
								</Text>
								<TouchableOpacity onPress={() => navigation.navigate("Login")}>
									<Text style={styles.registrationLoginBoxBtnText}>Увійти</Text>
								</TouchableOpacity>
							</View>
						</View>
					</KeyboardAvoidingView>
				</TouchableWithoutFeedback>
			</ImageBackground>
		</View>
	);
};

const styles = StyleSheet.create({
	imageBG: { flex: 1, justifyContent: "flex-end" },
	registrationForm: {
		width: "100%",
		backgroundColor: "#ffffff",
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		marginTop: "auto",
		padding: 16,
		paddingTop: 92,
		alignItems: "center",
		position: "relative",
	},
	registrationAvatar: {
		position: "absolute",
		top: -60,
		height: 120,
		width: 120,
		backgroundColor: "#f6f6f6",
		borderRadius: 16,
		marginBottom: 34,
	},
	registrationAvatarAdd: {
		position: "absolute",
		bottom: 14,
		right: -12.5,
	},

	registrationTitle: {
		color: "#212121",
		fontSize: 30,
		fontStyle: "normal",
		fontWeight: 500,
		lineHeight: 35.16,
		marginBottom: 32,
		fontFamily: "DMMono-Medium",
	},
	registrationWrapper: {
		width: "100%",
		gap: 16,
		marginBottom: 43,
	},
	registrationInputs: {
		width: "100%",
		backgroundColor: "#F6F6F6",
		borderWidth: 1,
		borderColor: "#E8E8E8",
		lineHeight: 18.75,
		fontSize: 16,
		padding: 16,
		borderRadius: 8,
		color: "#212121",
		fontFamily: "DMMono-Regular",
	},
	registrationPasswordBox: {
		position: "relative",
		width: "100%",
	},
	registrationPasswordBoxSwitch: {
		position: "absolute",
		top: 1,
		right: 1,
		backgroundColor: "#F6F6F6",
		padding: 16,
		borderRadius: 8,
	},
	registrationPasswordBoxSwitchText: {
		lineHeight: 18.75,
		fontSize: 16,
		color: "#1B4371",
		fontFamily: "DMMono-Regular",
	},
	registrationBoxButton: {
		width: "100%",
		backgroundColor: "#FF6C00",
		paddingTop: 16,
		paddingBottom: 16,
		borderRadius: 100,
		marginBottom: 16,
	},
	registrationButtonText: {
		fontSize: 16,
		color: "white",
		lineHeight: 18.75,
		textAlign: "center",
		fontFamily: "DMMono-Medium",
	},
	registrationLoginBox: {
		flexDirection: "row",
		gap: 16,
	},
	registrationLoginBoxText: {
		lineHeight: 18.75,
		fontSize: 16,
		fontFamily: "DMMono-Regular",
		color: "#1B4371",
	},
	registrationLoginBoxBtnText: {
		lineHeight: 18.75,
		fontSize: 16,
		fontFamily: "DMMono-Medium",
		color: "#1B4371",
		textDecorationLine: "underline",
	},
});
