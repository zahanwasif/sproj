import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Header from "../../components/header";
import { Dimensions } from "react-native";
import Ac from "../../svgs/air-conditioner.svg";
import Heater from "../../svgs/electric-heater.svg";
import Fan from "../../svgs/fan.svg";
import Vent from "../../svgs/ventilator.svg";
import { useTheme } from "react-native-paper";

const width = Dimensions.get("window").width;
const fontScale = Dimensions.get("window").fontScale;

const ConnectedDevices = () => {
	const { colors } = useTheme();
	return (
		<View style={[styles.root, { backgroundColor: colors.primary }]}>
			<Header />
			<View style={styles.bodyContainer}>
				<View style={styles.h1Container}>
					<Text style={styles.h1}>Connected</Text>
					<Text style={styles.h1}>Devices</Text>
				</View>
				<View style={styles.optionContainer}>
					<View style={styles.twoOption}>
						<TouchableOpacity
							onPress={() => console.log("Pressed")}
							activeOpacity={0.7}
							style={styles.to}>
							<View style={styles.option}>
								<Ac width="50%" height="50%" style={styles.svg} />
								<Text style={styles.text}>Air Conditioner</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => console.log("Pressed")}
							activeOpacity={0.7}
							style={styles.to}>
							<View style={styles.option}>
								<Heater width="50%" height="50%" style={styles.svg} />
								<Text style={styles.text}>Electir Heater</Text>
							</View>
						</TouchableOpacity>
					</View>
					<View style={styles.twoOption}>
						<TouchableOpacity
							onPress={() => console.log("Pressed")}
							activeOpacity={0.7}
							style={styles.to}>
							<View style={styles.option}>
								<Fan width="50%" height="50%" style={styles.svg} />
								<Text style={styles.text}>Fan</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => console.log("Pressed")}
							activeOpacity={0.7}
							style={styles.to}>
							<View style={styles.option}>
								<Vent width="50%" height="50%" style={styles.svg} />
								<Text style={styles.text}>Ventilator</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
};

export default ConnectedDevices;

const styles = StyleSheet.create({
	root: {
		flex: 1,
	},
	bodyContainer: {
		flex: 1,
	},
	h1Container: {
		flex: 1,
		height: 110,
		padding: 20,
	},
	h1: {
		fontWeight: "bold",
		fontSize: fontScale * 45,
		color: "black",
	},
	optionContainer: {
		flex: 4,
		paddingTop: 10,
	},
	twoOption: {
		height: width / 2,
		flexDirection: "row",
		justifyContent: "space-around",
		paddingHorizontal: 10,
		padding: 10,
	},
	option: {
		backgroundColor: "rgba(256,256,256,0.5)",
		height: width / 2 - 30,
		width: width / 2 - 30,
		borderRadius: 20,
		alignItems: "center",
		justifyContent: "space-evenly",
		paddingVertical: 10,
	},
	svg: {},
	text: {
		fontSize: fontScale * 15,
		fontWeight: "bold",
	},
	to: {},
});
