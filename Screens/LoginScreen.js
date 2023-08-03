import { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	Keyboard,
	TouchableWithoutFeedback,
	KeyboardAvoidingView,
	Alert,
	ImageBackground,
} from "react-native";
import PhotoBG from "../images/PhotoBG.png";

const checkingDevice = Platform.OS === "ios" ? "padding" : "height";

export const LoginScreen = ({ navigation }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [userEmail, setUserEmail] = useState("");
	const [userPassword, setUserPassword] = useState("");
	const [booleanValue, setBooleanValue] = useState(true);

	const closeKeyboard = () => {
		setIsOpen(false);
		Keyboard.dismiss();
	};

	const handlerLoginForm = () => {
		setIsOpen(false);
		Keyboard.dismiss();

		setUserEmail("");
		setUserPassword("");
	};

	const handlerShowPassword = () => setBooleanValue((prevState) => !prevState);

	return (
		<View style={{ flex: 1 }}>
			<ImageBackground
				style={styles.imageBG}
				source={PhotoBG}
				resizeMode="cover"
			>
				<TouchableWithoutFeedback onPress={closeKeyboard}>
					<KeyboardAvoidingView behavior={checkingDevice}>
						<View style={{ ...styles.loginForm, height: isOpen ? 400 : 489 }}>
							<Text style={styles.loginTitle}>Увійти</Text>

							<View style={styles.loginWrapper}>
								<TextInput
									style={styles.loginInputs}
									placeholder="Адреса електронної пошти"
									onFocus={() => setIsOpen(true)}
									value={userEmail}
									onChangeText={setUserEmail}
								/>

								<View style={styles.loginPasswordBox}>
									<TextInput
										style={{ ...styles.loginInputs, paddingRight: 110 }}
										placeholder="Пароль"
										secureTextEntry={booleanValue}
										onFocus={() => setIsOpen(true)}
										value={userPassword}
										onChangeText={setUserPassword}
									/>

									<TouchableOpacity
										style={styles.loginPasswordBoxSwitch}
										onPress={handlerShowPassword}
									>
										<Text style={styles.loginPasswordBoxSwitchText}>
											Показати
										</Text>
									</TouchableOpacity>
								</View>
							</View>

							<TouchableOpacity
								style={styles.loginBoxButton}
								onPress={
									(handlerLoginForm,
									() =>
										navigation.navigate("Home", {
											email: userEmail,
											// password: userPassword,
										}))
								}
							>
								<Text style={styles.loginBoxButtonText}>Зареєструватися</Text>
							</TouchableOpacity>

							<View style={styles.loginBoxToRegistration}>
								<Text style={styles.loginBoxToRegistrationText}>
									Немає аккаунту?
								</Text>

								<TouchableOpacity
									onPress={() => navigation.navigate("Registration")}
								>
									<Text style={styles.loginBoxToRegistrationLink}>
										Зареєструватися
									</Text>
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
	imageBG: {
		flex: 1,
		justifyContent: "flex-end",
	},
	loginForm: {
		height: 489,
		width: "100%",
		backgroundColor: "white",
		marginTop: "auto",
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		padding: 16,
		paddingTop: 32,
		alignItems: "center",
	},
	loginTitle: {
		color: "#212121",
		fontSize: 30,
		fontStyle: "normal",
		fontWeight: 500,
		lineHeight: 35.16,
		marginBottom: 32,
		fontFamily: "DMMono-Medium",
	},
	loginWrapper: {
		width: "100%",
		gap: 16,
		marginBottom: 43,
	},
	loginInputs: {
		width: "100%",
		backgroundColor: "#F6F6F6",
		borderWidth: 1,
		borderColor: "#E8E8E8",
		lineHeight: 18.75,
		fontSize: 16,
		padding: 16,
		borderRadius: 8,
		fontFamily: "DMMono-Regular",
	},
	loginPasswordBox: {
		position: "relative",
		width: "100%",
	},
	loginPasswordBoxSwitch: {
		position: "absolute",
		top: 1,
		right: 1,
		backgroundColor: "#F6F6F6",
		padding: 16,
		borderRadius: 8,
	},
	loginPasswordBoxSwitchText: {
		lineHeight: 18.75,
		fontSize: 16,
		color: "#1B4371",

		fontFamily: "DMMono-Regular",
	},
	loginBoxButton: {
		width: "100%",
		backgroundColor: "#FF6C00",
		paddingTop: 16,
		paddingBottom: 16,
		borderRadius: 100,
		marginTop: 27,
		marginBottom: 16,
	},
	loginBoxButtonText: {
		fontSize: 16,
		color: "white",
		lineHeight: 18.75,
		textAlign: "center",
		fontFamily: "DMMono-Medium",
	},
	registrationLogin: {
		lineHeight: 18.75,
		fontSize: 16,
		color: "#1B4371",
	},
	loginBoxToRegistration: {
		flexDirection: "row",
		gap: 16,
	},
	loginBoxToRegistrationText: {
		lineHeight: 18.75,
		fontSize: 16,
		color: "#1B4371",
		fontFamily: "DMMono-Regular",
	},
	loginBoxToRegistrationLink: {
		lineHeight: 18.75,
		fontSize: 16,
		color: "#1B4371",
		textDecorationLine: "underline",
	},
});
