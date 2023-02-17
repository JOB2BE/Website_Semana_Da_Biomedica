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
	});

	
	return (
		<Column flex={1} space={12}>
			<Row justifyContent={'center'} style={styles.container}>
				<View style={styles.RectangleShapeView}>

				</View>
			</Row>
		</Column>

		
		
	);
}
