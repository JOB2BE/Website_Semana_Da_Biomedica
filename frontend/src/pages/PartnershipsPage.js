import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { Button, Text, Image, View, Component } from 'native-base';
import IstLogo from '../../assets/images/logo_ist.png';
//import { HexagonView } from 'react-native-hexagon';

export default function PartnershipsPage() {
	const styles = StyleSheet.create({
		baseText: {
			fontWeight: '1000',
			color: '#2D6793',
			fontSize: 30,
			backgroundColor: 'transparent',
		},
		container: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
			margin: 10
		},

		RectangleShapeViewOut: {
			width: 660,
			height: 70,
			borderRadius: 30,
			backgroundColor: '#FDBA35',
			margin: 8,
		},

		RectangleShapeViewIn: {
			width: 650,
			height: 60,
			borderRadius: 30,
			backgroundColor: '#FFEFD3',
			position: 'absolute',
			left: (660 - 650) / 2,
			top: (660 - 650) / 2,
			justifyContent: 'center',
			alignItems: 'center',
		},

		CircleShapeViewOut: {
			width: 195,
			height: 195,
			borderRadius: 195 / 2,
			backgroundColor: '#FDBA35',
			margin: 8
		},

		CircleShapeViewIn: {
			width: 177,
			height: 177,
			borderRadius: 177 / 2,
			backgroundColor: '#FFEFD3',
			position: 'absolute',
			left: (195 - 177) / 2,
			top: (195 - 177) / 2,
		},
	});

	return (
		<View style={styles.container}>
			<View style={styles.RectangleShapeViewOut}>
				<View style={styles.RectangleShapeViewIn}>
					<Text style={styles.baseText}> PARTNERSHIPS </Text>
				</View>
			</View>

			<View style={styles.CircleShapeViewOut}>
				<View style={styles.CircleShapeViewIn}>
					<Image style={styles.CircleShapeViewIn} source={IstLogo}>  </Image>
				</View>
			</View>
			<View style={styles.CircleShapeViewOut}>
				<View style={styles.CircleShapeViewIn}> </View>
			</View>
			<View style={styles.CircleShapeViewOut}>
				<View style={styles.CircleShapeViewIn}> </View>
			</View>
			<View style={styles.CircleShapeViewOut}>
				<View style={styles.CircleShapeViewIn}> </View>
			</View>
			<View style={styles.CircleShapeViewOut}>
				<View style={styles.CircleShapeViewIn}> </View>
			</View>
			<View style={styles.CircleShapeViewOut}>
				<View style={styles.CircleShapeViewIn}> </View>
			</View>
		</View>
	);
}