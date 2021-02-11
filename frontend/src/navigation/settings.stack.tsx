import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Settings from '../screens/settings';
import QrCodeScanner from '../screens/qrcode';
import BottomTab from './bottomTab';

const Stack = createStackNavigator();

const SettingsStack = () => (
	<Stack.Navigator initialRouteName='Settings'>
		<Stack.Screen
			name='Settings'
			component={BottomTab}
			options={{
				headerShown: false,
			}}
		/>
		<Stack.Screen name='QrCode Scanner' component={QrCodeScanner} />
	</Stack.Navigator>
);

export default SettingsStack;
