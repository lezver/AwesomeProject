import { TouchableOpacity, View, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PostsScreen } from "./PostsScreen";
import { CreatePostsScreen } from "./CreatePostsScreen";
import { ProfileScreen } from "./ProfileScreen";
import logOutImg from "../images/log-out.png";
import arrowleft from "../images/arrow-left.png";
import { useEffect } from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();

export const Home = ({ navigation }) => {
	const { params } = useRoute();

	useEffect(() => {
		navigation.navigate("PostsScreen", params);
	}, [params]);

	return (
		<Tabs.Navigator
			screenOptions={{
				tabBarShowLabel: false,
				tabBarActiveBackgroundColor: "#FF6C00",
				tabBarActiveTintColor: "#ffffff",
				tabBarInactiveTintColor: "#212121CC",

				tabBarStyle: {
					height: 83,
					paddingHorizontal: 95,
					paddingTop: 9,
				},

				tabBarItemStyle: {
					borderRadius: 20,
				},
			}}
		>
			<Tabs.Screen
				name="PostsScreen"
				component={PostsScreen}
				options={{
					title: "Публікації",
					headerTitleStyle: baseTitle,
					headerRight: () => (
						<TouchableOpacity
							style={{ marginRight: 10, marginBottom: 10 }}
							onPress={() => navigation.navigate("Login")}
						>
							<Image source={logOutImg} />
						</TouchableOpacity>
					),
					tabBarIcon: ({ focused, color }) => (
						<SimpleLineIcons name="grid" size="24" color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="CreatePostsScreen"
				component={CreatePostsScreen}
				options={{
					title: "Створити публікацію",
					headerTitleStyle: baseTitle,
					headerLeft: () => (
						<TouchableOpacity
							style={{ marginLeft: 16, marginBottom: 10 }}
							onPress={() => navigation.navigate("PostsScreen")}
						>
							<Image source={arrowleft} />
						</TouchableOpacity>
					),
					tabBarIcon: ({ focused, color }) => (
						<AntDesign name="plus" size="24" color={color} />
					),
					tabBarStyle: {
						display: "none",
					},
				}}
			/>
			<Tabs.Screen
				name="ProfileScreen"
				component={ProfileScreen}
				options={{
					title: "Профіль",
					headerTitleStyle: baseTitle,
					tabBarIcon: ({ focused, color }) => (
						<Feather name="user" size="24" color={color} />
					),
					headerShown: false,
				}}
			/>
		</Tabs.Navigator>
	);
};

const baseTitle = {
	fontSize: 17,
	lineHeight: 22,
	fontFamily: "DMMono-Medium",
	letterSpacing: -0.41,
};
