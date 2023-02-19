import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Accordion, Image, Column, Row, Text, View } from 'native-base';
import extendTheme from '../theme';

const dataArray = [
	{ title: "Curriculum Vitae", content: "bla bla bla" },
	{ title: "Participação na JOB2BE", content: "bla2 bla bla" },
	{ title: "Contactos", content: "bla3 bla bla" },
];
export default class SpeakerPage extends Component {
	render() {
		const styles = StyleSheet.create({
			container: {
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
			},

			RectangleShapeViewLeft: {
				width: 260,
				height: 449.42,
				borderRadius: 30,
				backgroundColor: extendTheme.colors['cream'],
				marginTop: 20,
				marginBottom: 20,
				alignItems: 'center',
				alignContent: 'center',
				display: 'flex',
			},

			RectangleShapeViewRight1: {
				width: 836,
				height: 91,
				borderRadius: 30,
				backgroundColor: extendTheme.colors['cream'],
				marginBottom: 44,
				marginLeft: 20,
				alignItems: 'left',
				padding: 20,
				alignContent: 'left',
				justifyContent: 'center',
				display: 'flex',
			},

			RectangleShapeViewRight2: {
				width: 836,
				height: 91,
				borderRadius: 30,
				backgroundColor: extendTheme.colors['cream'],
				marginTop: 44,
				marginBottom: 44,
				marginLeft: 20,
				alignItems: 'left',
				padding: 20,
				alignContent: 'left',
				justifyContent: 'center',
				display: 'flex',
			},

			RectangleShapeViewRight3: {
				width: 836,
				height: 91,
				borderRadius: 30,
				backgroundColor: extendTheme.colors['cream'],
				marginTop: 44,
				marginLeft: 20,
				alignItems: 'left',
				padding: 20,
				alignContent: 'left',
				justifyContent: 'center',
				display: 'flex',
			},

			CircleShapeViewOut: {
				width: 230,
				height: 230,
				borderRadius: 230 / 2,
				backgroundColor: extendTheme.colors['medYellow'],
				marginBottom: 50,
				marginTop: 50,
			},

			CircleShapeViewIn: {
				width: 210,
				height: 210,
				borderRadius: 210 / 2,
				backgroundColor: extendTheme.colors['cream'],
				position: 'absolute',
				left: (230 - 210) / 2,
				top: (230 - 210) / 2,
				justifyContent: 'center',
				alignItems: 'center',
				alignContent: 'center',
			},

			TextName: {
				fontWeight: '1000',
				color: extendTheme.colors.dryBlue['0'],
				fontSize: 30,
				backgroundColor: 'transparent',
				alignItems: 'center',
				textAlign: 'center',
				alignContent: 'center',
				justifyContent: 'center',
				margimBottom: 50,
			},

			TextTitle: {
				fontWeight: '1000',
				color: extendTheme.colors.dryBlue['0'],
				fontSize: 30,
				backgroundColor: 'transparent',
				alignItems: 'center',
				alignContent: 'center',
				justifyContent: 'center',
				margimBottom: 50,
			},

			Seta: {
				alignItems: 'center',
				alignContent: 'center',
				justifyContent: 'center',
				margimBottom: 50,
			}


		});

		var speaker = require('../assets/images/speaker_NunoSilva.svg')
		//var seta = require('../assets/images/seta_azul.svg')

		return (
			<Column flex={1} space={100}>
				<Row justifyContent={'center'} style={styles.container}>
					<View style={styles.RectangleShapeViewLeft}>
						<View style={styles.CircleShapeViewOut}>
							<Image source={speaker} style={styles.CircleShapeViewIn}></Image>
						</View>
						<Text style={styles.TextName}> Nuno André da Silva </Text>
					</View>

					
				</Row>
			</Column>
		);

	}
}