import React from 'react';
import {Image } from 'native-base';
import { StyleSheet } from 'react-native';
import responsiveHeight from '../utils/responsiveHeight';
import responsiveWidth from '../utils/responsiveWidth';
import { useWindowDimensions } from 'react-native';

export default function LandingPage() {
	var window = useWindowDimensions();
	var imageTopShift = responsiveHeight(window,null, null, 0.05);
	var imageWidth = responsiveWidth(window, null, null, 0.5);
	var imageLeftShift = responsiveWidth(window,null, null, 0.25);

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
