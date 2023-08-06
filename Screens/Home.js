import { TouchableOpacity, View, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PostsScreen } from "./PostsScreen";
import { CreatePostsScreen } from "./CreatePostsScreen";
import { ProfileScreen } from "./ProfileScreen";
import { CommentsScreen } from "./CommentsScreen";
import { MapScreen } from "./MapScreen";
import {
	MaterialIcons,
	AntDesign,
	SimpleLineIcons,
	Feather,
} from "@expo/vector-icons";
import { useEffect } from "react";

const Tabs = createBottomTabNavigator();

export const Home = ({ navigation }) => {
	const { params } = useRoute();

	useEffect(() => {
		navigation.navigate("ProfileScreen", params);
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
							<MaterialIcons name="logout" size={24} color="#BDBDBD" />
						</TouchableOpacity>
					),
					tabBarIcon: ({ focused, color }) => (
						<SimpleLineIcons name="grid" size={24} color={color} />
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
							<AntDesign name="arrowleft" size={24} color="#212121CC" />
						</TouchableOpacity>
					),
					tabBarIcon: ({ focused, color }) => (
						<AntDesign name="plus" size={24} color={color} />
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
						<Feather name="user" size={24} color={color} />
					),
					headerShown: false,
				}}
			/>
			<Tabs.Screen
				name="CommentsScreen"
				component={CommentsScreen}
				options={{
					title: "Коментарі",
					headerTitleStyle: baseTitle,
					headerLeft: () => (
						<TouchableOpacity
							style={{ marginLeft: 16, marginBottom: 10 }}
							onPress={() => navigation.navigate("PostsScreen")}
						>
							<AntDesign name="arrowleft" size={24} color="#212121CC" />
						</TouchableOpacity>
					),
					tabBarItemStyle: {
						display: "none",
					},
					tabBarStyle: {
						display: "none",
					},
				}}
			/>
			<Tabs.Screen
				name="MapScreen"
				component={MapScreen}
				options={{
					title: "Мапа",
					headerTitleStyle: baseTitle,
					headerLeft: () => (
						<TouchableOpacity
							style={{ marginLeft: 16, marginBottom: 10 }}
							onPress={() => navigation.navigate("PostsScreen")}
						>
							<AntDesign name="arrowleft" size={24} color="#212121CC" />
						</TouchableOpacity>
					),
					tabBarItemStyle: {
						display: "none",
					},
					tabBarStyle: {
						display: "none",
					},
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
