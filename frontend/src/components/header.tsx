import React, { FC } from "react";
import { View, StyleSheet, Text, useWindowDimensions } from "react-native";
import { useRoute } from "@react-navigation/native";

const Header: FC = () => {
	const fontScale = useWindowDimensions().fontScale;
	const routes = useRoute();

	return (
		<View style={styles.root}>
			<Text style={{ fontSize: fontScale * 20, fontWeight: "bold" }}>
				{routes.name}
			</Text>
			<View
				style={{
					borderBottomWidth: StyleSheet.hairlineWidth,
					borderColor: "white",
				}}
			/>
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
	root: {
		height: 100,
		justifyContent: "center",
		alignItems: "center",
	},
});
