import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Column, Row, Text, View } from 'native-base';
import extendTheme from '../theme';

export default function SpeakerPage() {
	const styles = StyleSheet.create({
		container: {
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center',
		},

		RectangleShapeView: {
			width: 260,
			height: 449.42,
			borderRadius: 30,
			backgroundColor: extendTheme.colors['cream'],
			marginTop: 20,
			marginBottom: 20,
		},

		CircleShapeViewOut: {
			width: 230,
			height: 230,
			borderRadius: 230 / 2,
			backgroundColor: extendTheme.colors['medYellow'],
			marginTop: 20,
			marginLeft: (260-230)/2,
		},

		CircleShapeViewIn: {
			width: 177,
			height: 177,
			borderRadius: 177 / 2,
			backgroundColor: extendTheme.colors['cream'],
			position: 'absolute',
			left: (195 - 177) / 2,
			top: (195 - 177) / 2,
			justifyContent: 'center',
			alignItems: 'center',
			alignContent: 'center',
		},
	});

	var speaker = require('../assets/images/Logo_NEBM.svg')
	
	return (
		<Column flex={2} space={12}>
			<Row justifyContent={'center'} style={styles.container}>
				<View style={styles.RectangleShapeView}>
					<View style={styles.CircleShapeViewOut}>
						<Image source={speaker} style={styles.CircleShapeViewIn}></Image>
					</View>
				</View>
			</Row>
		</Column>
	);
}
