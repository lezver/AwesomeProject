import { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	Keyboard,
	TouchableWithoutFeedback,
	Alert,
} from "react-native";

export const LoginScreen = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [userEmail, setUserEmail] = useState("");
	const [userPassword, setUserPassword] = useState("");

	const closeKeyboard = () => {
		setIsOpen(false);
		Keyboard.dismiss();
	};

	const loginForm = () => {
		setIsOpen(false);
		Keyboard.dismiss();
		Alert.alert("Credentials", `Email:${userEmail}, Password:${userPassword}`);

		setUserEmail("");
		setUserPassword("");
	};
	return (
		<TouchableWithoutFeedback onPress={closeKeyboard}>
			<View style={{ ...styles.loginContainer, height: isOpen ? 400 : 489 }}>
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
							style={styles.loginInputs}
							placeholder="Пароль"
							secureTextEntry
							onFocus={() => setIsOpen(true)}
							value={userPassword}
							onChangeText={setUserPassword}
						/>

						<Text style={styles.loginPasswordBoxSwitch}>Показати</Text>
					</View>
				</View>

				<TouchableOpacity style={styles.loginBoxButton} onPress={loginForm}>
					<Text style={styles.loginBoxButtonText}>Зареєструватися</Text>
				</TouchableOpacity>

				<View style={styles.loginBoxToRegistration}>
					<Text style={styles.loginBoxToRegistrationText}>Немає аккаунту?</Text>

					<Text style={styles.loginBoxToRegistrationLink}>Зареєструватися</Text>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	loginContainer: {
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
	},
	loginPasswordBox: {
		position: "relative",
		width: "100%",
	},
	loginPasswordBoxSwitch: {
		position: "absolute",
		top: 16,
		right: 16,
		lineHeight: 18.75,
		fontSize: 16,
		color: "#1B4371",
		backgroundColor: "#F6F6F6",
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
	},
	registrationLogin: {
		lineHeight: 18.75,
		fontSize: 16,
		color: "#1B4371",
	},
	loginBoxToRegistration: {
		flexDirection: "row",
		gap: 4,
	},
	loginBoxToRegistrationText: {
		lineHeight: 18.75,
		fontSize: 16,
		color: "#1B4371",
	},
	loginBoxToRegistrationLink: {
		lineHeight: 18.75,
		fontSize: 16,
		color: "#1B4371",
		textDecorationLine: "underline",
	},
});
