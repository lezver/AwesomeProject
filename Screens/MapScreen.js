import { useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

export const MapScreen = ({ route }) => {
	return (
		<View style={styles.mapScreenContaiter}>
			<MapView
				style={styles.mapScreenStyle}
				region={{
					latitude: route.params?.location.latitude,
					longitude: route.params?.location.longitude,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}}
			>
				<Marker
					title="I'm here"
					coordinate={{
						latitude: route.params?.location.latitude,
						longitude: route.params?.location.longitude,
					}}
					description="Hello"
				/>
			</MapView>
		</View>
	);
};

const styles = StyleSheet.create({
	mapScreenContaiter: {
		flex: 1,
		backgroundColor: "#fff",
		justifyContent: "center",
		alignItems: "center",
	},
	mapScreenStyle: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height,
	},
});
