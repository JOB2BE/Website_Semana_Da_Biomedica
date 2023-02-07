import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { Button, Text, Image, View } from 'native-base';
import { HexagonView } from 'react-native-hexagon';

export default function PartnershipsPage() {
	const styles = StyleSheet.create({
		baseText: {
			fontWeight: 'bold',
			color: '#2D6793',
			fontSize: 30,
		},
	});

	return (
		<View style={styles.container}>
			<Text style={styles.baseText}> PARTNERSHIPS </Text>
			<Image source={require("/Users/maria/Website_Semana_Da_Biomedica/frontend/src/assets/images/hexagon_partner_out.png")} />
		</View>
	);
}