import React, { FC } from "react";
import { StyleSheet, Text, Dimensions, View } from "react-native";
import Header from "../../components/header";
import { useSelector } from "react-redux";
import { useTheme } from "react-native-paper";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import signOut from "../../firebase/signout";
import { abs } from "react-native-reanimated";
const windowWidth = Dimensions.get("window").width;

const StyledView = styled(TouchableOpacity)`
	height: ${abs(windowWidth / 7)};
	background-color: rgba(256, 256, 256, 0.5);
	border-radius: 10px;
	justify-content: center;
	padding-horizontal: 10px;
	margin: 5px 15px;
`;

interface OptionProp {
	text: String;
	onPress: () => void;
}

const Option = (prop: OptionProp) => (
	<StyledView onPress={prop.onPress}>
		<Text style={{ fontSize: 20 }}>{prop.text}</Text>
	</StyledView>
);

const Settings = () => {
	const navigation = useNavigation();

	const { colors } = useTheme();
	return (
		<View style={{ flex: 1, backgroundColor: colors.primary }}>
			<Header />
			<ScrollView>
				<Option onPress={() => {}} text="Profile Settings" />
				<Option
					onPress={() => {
						navigation.navigate("QrCode Scanner");
					}}
					text="Scan Qrcode and add an IOT device"
				/>
				<Option
					onPress={() => {
						signOut();
					}}
					text="Sign out"
				/>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	option: {},
});

export default Settings;
