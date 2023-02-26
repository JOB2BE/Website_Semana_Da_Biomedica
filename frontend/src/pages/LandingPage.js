import React from 'react';
import { Center, Image, VStack, View } from 'native-base';
import { StyleSheet } from 'react-native';
import responsiveHeight from '../utils/responsiveHeight';
import responsiveWidth from '../utils/responsiveWidth';

export default function LandingPage() {
	var imageTopShift = responsiveHeight(null, null, 0.05);
	var imageWidth = responsiveWidth(null, null, 0.5);
	var imageLeftShift = responsiveWidth(null, null, 0.25);

	const styles = StyleSheet.create({
		image: { position: 'fixed', top: imageTopShift, left: imageLeftShift },
	});

	const dateLogoImage = require('../assets/images/dark-backgroundComDatas.png');

	return (
		<Image
			resizeMethod='auto'
			resizeMode={'contain'}
			style={styles.image}
			source={dateLogoImage}
			size={imageWidth}
			alt={"Job2Be's Logo"}
		/>
	);
}
