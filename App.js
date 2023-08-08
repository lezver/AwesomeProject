import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen, RegistrationScreen, Home } from "./Screens";
import * as Font from "expo-font";
import { store } from "./redux/store";
// import persistor from "./redux/store";
// import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

const options = { headerShown: false };

const MainStack = createStackNavigator();

export default function App() {
	const [fontsLoaded] = Font.useFonts({
		"DMMono-Regular": require("./fonts/DMMono-Regular.ttf"),
		"DMMono-Medium": require("./fonts/DMMono-Medium.ttf"),
	});

	if (!fontsLoaded) return null;

	return (
		<Provider store={store}>
			{/* <PersistGate loading={null} persistor={persistor}> */}
			<NavigationContainer>
				<MainStack.Navigator initialRouteName="Login">
					<MainStack.Screen
						name="Login"
						component={LoginScreen}
						options={options}
					/>
					<MainStack.Screen
						name="Registration"
						component={RegistrationScreen}
						options={options}
					/>
					<MainStack.Screen name="Home" component={Home} options={options} />
				</MainStack.Navigator>
			</NavigationContainer>
			{/* </PersistGate> */}
		</Provider>
	);
}
