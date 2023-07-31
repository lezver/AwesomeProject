import { StatusBar } from "expo-status-bar";
import {
	ImageBackground,
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	Text,
	View,
} from "react-native";
import { LoginScreen, RegistrationScreen, PostsScreen } from "./Screens";
import PhotoBG from "./images/PhotoBG.png";

const checkingDevice = Platform.OS === "ios" ? "padding" : "height";

export default function App() {
	return (
		<View style={styles.container}>
			<ImageBackground
				source={PhotoBG}
				resizeMode="cover"
				style={styles.imageBG}
			>
				<KeyboardAvoidingView behavior={checkingDevice}>
					{/* <RegistrationScreen /> */}
					<LoginScreen />
					{/* <PostsScreen /> */}
				</KeyboardAvoidingView>
			</ImageBackground>

			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	imageBG: {
		flex: 1,
		justifyContent: "flex-end",
	},
});
