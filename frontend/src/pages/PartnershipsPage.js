import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Image, View } from 'native-base';
import GridImageView from 'react-native-grid-image-viewer';
import extendTheme from '../theme';
//import IstLogo from '../assets/images/logo_ist';
//import { HexagonView } from 'react-native-hexagon';

export default function PartnershipsPage() {
	const styles = StyleSheet.create({
		baseText: {
			fontWeight: '1000',
			color: extendTheme.colors.dryBlue['0'],
			fontSize: 30,
			backgroundColor: 'transparent',
		},

		container: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
			margin: 10,
		},

		RectangleShapeViewOut: {
			width: 660,
			height: 70,
			borderRadius: 30,
			backgroundColor: extendTheme.colors['medYellow'],
			marginTop: 20,
			marginBottom: 80,
		},

		RectangleShapeViewIn: {
			width: 650,
			height: 60,
			borderRadius: 30,
			backgroundColor: extendTheme.colors['cream'],
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
			backgroundColor: extendTheme.colors['medYellow'],
			marginTop: -20,
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

		CircleShapeViewOutTransp: {
			width: 50,
			height: 50,
			borderRadius: 25,
			backgroundColor: 'transparent',
		},

		ImageView: {
			width: 100,
			height: 100,
			left: (195 - 177) / 2,
			top: (195 - 177) / 2,
		},

		row: {
			flexDirection: 'row',
		},

		col1: {
			width: 175,
			backgroundColor: 'transparent',
			borderColor: 'transparent',
			borderWidth: 1,
			flex: 1,
		},

		col2: {
			width: 50,
			backgroundColor: 'transparent',
			borderColor: 'transparent',
			borderWidth: 1,
			flex: 1,
		},
	});

	const Row = ({ children }) => <View style={styles.row}>{children}</View>;

	const Col = ({ numRows, children }) => {
		return <View style={styles[`${numRows}col`]}>{children}</View>;
	};

	var LogoIst = require('../assets/images/logo_ist.svg');
	var LogoNEBM = require('../assets/images/Logo_NEBM.svg');

	return (

		<View style={styles.container}>

			<View style={styles.RectangleShapeViewOut}>
				<View style={styles.RectangleShapeViewIn}>
					<Text style={styles.baseText}> PARTNERSHIPS </Text>
				</View>
			</View>

			<Stack direction='row' alignItems='center'>
				<View style={styles.CircleShapeViewOut}>
					<View style={styles.CircleShapeViewIn}>
						<Image source={LogoIst} style={{ width: '90%', height: '40%' }}></Image>
					</View>
				</View>

				<View style={styles.CircleShapeViewOutTransp}></View>

				<View style={styles.CircleShapeViewOut}>
					<View style={styles.CircleShapeViewIn}>
						<Image source={LogoNEBM} style={{ width: '80%', height: '80%' }}></Image>
					</View>
				</View>

				<View style={styles.CircleShapeViewOutTransp}></View>

				<View style={styles.CircleShapeViewOut}>
					<View style={styles.CircleShapeViewIn}>
						<Image source={{ width: 100, height: 100, uri: 'https://picsum.photos/200', }}></Image>
					</View>
				</View>

				<View style={styles.CircleShapeViewOutTransp}></View>

				<View style={styles.CircleShapeViewOut}>
					<View style={styles.CircleShapeViewIn}>
						<Image source={{ width: 100, height: 100, uri: 'https://picsum.photos/200', }}></Image>
					</View>
				</View>
			</Stack>

			<Stack direction='row' alignItems='center'>
				<View style={styles.CircleShapeViewOutTransp}></View>

				<View style={styles.CircleShapeViewOutTransp}></View>

				<View style={styles.CircleShapeViewOut}>
					<View style={styles.CircleShapeViewIn}>
						<Image source={{ width: 100, height: 100, uri: 'https://picsum.photos/200', }}></Image>
					</View>
				</View>

				<View style={styles.CircleShapeViewOutTransp}></View>

				<View style={styles.CircleShapeViewOut}>
					<View style={styles.CircleShapeViewIn}>
						<Image source={{ width: 100, height: 100, uri: 'https://picsum.photos/200', }}></Image>
					</View>
				</View>

				<View style={styles.CircleShapeViewOutTransp}></View>

				<View style={styles.CircleShapeViewOut}>
					<View style={styles.CircleShapeViewIn}>
						<Image source={{ width: 100, height: 100, uri: 'https://picsum.photos/200', }}></Image>
					</View>
				</View>

				<View style={styles.CircleShapeViewOutTransp}></View>

				<View style={styles.CircleShapeViewOutTransp}></View>
			</Stack>

			<Stack direction='row' alignItems='center'>

				<View style={styles.CircleShapeViewOut}>
					<View style={styles.CircleShapeViewIn}>
						<Image source={{ width: 100, height: 100, uri: 'https://picsum.photos/200', }}></Image>
					</View>
				</View>

				<View style={styles.CircleShapeViewOutTransp}></View>

				<View style={styles.CircleShapeViewOut}>
					<View style={styles.CircleShapeViewIn}>
						<Image source={{ width: 100, height: 100, uri: 'https://picsum.photos/200', }}></Image>
					</View>
				</View>

				<View style={styles.CircleShapeViewOutTransp}></View>

				<View style={styles.CircleShapeViewOut}>
					<View style={styles.CircleShapeViewIn}>
						<Image source={{ width: 100, height: 100, uri: 'https://picsum.photos/200', }}></Image>
					</View>
				</View>

				<View style={styles.CircleShapeViewOutTransp}></View>

				<View style={styles.CircleShapeViewOut}>
					<View style={styles.CircleShapeViewIn}>
						<Image source={{ width: 100, height: 100, uri: 'https://picsum.photos/200', }}></Image>
					</View>
				</View>

			</Stack>
		</View>
	);
}
