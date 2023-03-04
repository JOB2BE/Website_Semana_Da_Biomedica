import React from 'react';
import { Center, Image, Row, Column } from 'native-base';
import { StyleSheet } from 'react-native';
import responsiveHeight from '../utils/responsiveHeight';
import responsiveWidth from '../utils/responsiveWidth';
import { useWindowDimensions } from 'react-native';


export default function LandingPage() {
	var window = useWindowDimensions();
	var isSmallScreen = window.width < 850;
	var imageTopShift = responsiveHeight(window, null, null, 0.05);
	var imageWidth = responsiveWidth(window, null, null, isSmallScreen ? 0.7 : 0.5);
	var imageLeftShift = responsiveWidth(window, null, null, 0.25);

	const dateLogoImage = require('../assets/images/dark-backgroundComDatas.png');

	return (
		<Column flex={1} space={12}>
			<Row flex={1} justifyContent={'center'}>
				<Column>
					<Image
						resizeMethod='auto'
						resizeMode={'contain'}
						source={dateLogoImage}
						size={imageWidth}
						alt={"Job2Be's Logo"}
					/>
				</Column>
			</Row>
		</Column>
	);
}
