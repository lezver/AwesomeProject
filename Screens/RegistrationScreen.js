import {
	Image,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	Keyboard,
	TouchableWithoutFeedback,
} from "react-native";
import add from "../images/add.png";
import { useState } from "react";

export const RegistrationScreen = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [login, setLogin] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const closeKeyboard = () => {
		setIsOpen(false);
		Keyboard.dismiss();
	};

	return (
		<TouchableWithoutFeedback onPress={closeKeyboard}>
			<View
				style={{
					...styles.registrationContainer,
					height: isOpen ? 493 : 549,
				}}
			>
				<View style={styles.registrationAvatar}>
					<TouchableOpacity style={styles.registrationAvatarAdd}>
						<Image source={add} />
					</TouchableOpacity>
				</View>

				<Text style={styles.registrationTitle}>Реєстрація</Text>

				<View style={styles.registrationWrapper}>
					<TextInput
						style={styles.registrationInputs}
						placeholder="Логін"
						onFocus={() => setIsOpen(true)}
						value={login}
						onChangeText={setLogin}
					/>

					<TextInput
						style={styles.registrationInputs}
						placeholder="Адреса електронної пошти"
						onFocus={() => setIsOpen(true)}
						value={email}
						onTextInput={setEmail}
					/>

					<View style={styles.registrationPasswordBox}>
						<TextInput
							style={styles.registrationInputs}
							placeholder="Пароль"
							secureTextEntry
							onFocus={() => setIsOpen(true)}
							value={password}
							onChangeText={setPassword}
						/>

						<Text style={styles.registrationPasswordBoxSwitch}>Показати</Text>
					</View>
				</View>

				<TouchableOpacity
					style={styles.registrationBoxButton}
					onPress={closeKeyboard}
				>
					<Text style={styles.registrationButtonText}>Зареєструватися</Text>
				</TouchableOpacity>

				<Text style={styles.registrationLogin}>Вже є аккунт? Увійти</Text>
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	registrationContainer: {
		height: 549,
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
	},
	registrationPasswordBox: {
		position: "relative",
		width: "100%",
	},
	registrationPasswordBoxSwitch: {
		position: "absolute",
		top: 16,
		right: 16,
		lineHeight: 18.75,
		fontSize: 16,
		color: "#1B4371",
		backgroundColor: "#F6F6F6",
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
	},
	registrationLogin: {
		lineHeight: 18.75,
		fontSize: 16,
		color: "#1B4371",
	},
});
