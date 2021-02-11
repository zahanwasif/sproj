import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Connected from "../screens/connected.devices";
import { useTheme } from "react-native-paper";
import { View, StyleSheet } from "react-native";

import { MaterialCommunityIcons, Octicons, Ionicons } from "@expo/vector-icons";
import SettingsStack from "./settings.stack";
import Settings from "../screens/settings";

const Tab = createMaterialBottomTabNavigator();

const styles = StyleSheet.create({
	divider: {
		borderBottomColor: "black",
		borderBottomWidth: 2,
	},
});

const BottomTab = () => {
	const { colors } = useTheme();
	return (
		<>
			<Tab.Navigator
				backBehavior="initialRoute"
				activeColor={colors.surface}
				inactiveColor={colors.accent}
				barStyle={{
					backgroundColor: colors.primary,
					borderTopColor: "white",
					borderTopWidth: 0.5,
					paddingVertical: 5,
				}}>
				<Tab.Screen
					name="Home"
					component={Connected}
					options={{
						tabBarLabel: "Home",
						tabBarIcon: ({ color }) => (
							<MaterialCommunityIcons name="home" color={color} size={26} />
						),
					}}
				/>
				<Tab.Screen
					name="Settings"
					component={Settings}
					options={{
						tabBarLabel: "Settings",
						tabBarIcon: ({ color }) => (
							<Octicons name="gear" color={color} size={26} />
						),
					}}
				/>
			</Tab.Navigator>
		</>
	);
};

export default BottomTab;
