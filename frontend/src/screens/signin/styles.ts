import { StyleSheet } from "react-native";

import { Dimensions } from "react-native";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

const heading = fontScale * 35;
const textSize = fontScale * 20;

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	logo: {
		fontSize: 50,
		fontWeight: "bold",
	},
	logoContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	body: {
		flex: 1,
		justifyContent: "center",
		width: "80%",
		alignSelf: "center",
	},
	inputContainer: {},
	header: {
		fontSize: heading,
		fontWeight: "bold",
	},
	input: {
		fontSize: textSize,
		borderWidth: 0,
		borderBottomWidth: 2,
		paddingLeft: 20,
		marginVertical: 30,
		paddingBottom: 5,
	},
	buttonContainer: {
		width: "90%",
		alignSelf: "center",
		alignItems: "center",
	},
	button: {
		borderWidth: 2,
		width: "95%",
		alignItems: "center",
		marginVertical: 15,
		borderRadius: 10,
		padding: 25,
	},
	sbutton: {
		borderWidth: 2,
		width: "95%",
		alignItems: "center",
		marginVertical: 15,
		borderRadius: 10,
		padding: 25,
	},
	div: {
		borderBottomWidth: 2,
		width: "90%",
		alignItems: "center",
	},
	btnText: {
		fontSize: textSize,
		fontWeight: "bold",
	},
	sbtnText: {
		fontSize: textSize,
		fontWeight: "bold",
	},
	forgot: {
		flexDirection: "row-reverse",
	},
});
