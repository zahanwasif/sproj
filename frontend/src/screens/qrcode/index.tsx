import React, { useEffect, useState } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import {
	View,
	Text,
	StyleSheet,
	Button,
	Dimensions,
	useWindowDimensions,
	TouchableOpacity,
} from 'react-native';
import { Foundation } from '@expo/vector-icons';

const QrCodeScanner = () => {
	const windowWidth = useWindowDimensions().width;
	const fontScale = useWindowDimensions().fontScale;
	const square = { width: windowWidth, height: windowWidth };
	const [hasPermission, setHasPermission] = useState<Boolean | null>(false);
	const [scanned, setScanned] = useState(false);

	useEffect(() => {
		(async () => {
			const { status } = await BarCodeScanner.requestPermissionsAsync();
			setHasPermission(status === 'granted');
		})();
	}, []);

	const handleBarCodeScanned = ({ type, data }: any) => {
		setScanned(true);
		alert(`Bar code with type ${type} and data ${data} has been scanned!`);
	};

	if (hasPermission === null) {
		return <Text>Requesting for camera permission</Text>;
	}
	if (hasPermission === false) {
		return <Text>No access to camera</Text>;
	}

	return (
		<View style={{}}>
			{scanned ? (
				<View
					style={{
						...square,
						justifyContent: 'center',
						alignItems: 'center',
						backgroundColor: '#CACACA',
					}}>
					<TouchableOpacity onPress={() => setScanned(false)}>
						<Foundation name='refresh' size={fontScale * 70} color='#909090' />
					</TouchableOpacity>
				</View>
			) : (
				<BarCodeScanner
					onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
					style={square}
				/>
			)}
		</View>
	);
};

export default QrCodeScanner;
