import React from 'react';
import { Image, Center, Stack, VStack } from 'native-base';
import { StyleSheet } from 'react-native';

export default function LandingPage() {
	const styles = StyleSheet.create({
		image: {},
	});

	const dateLogoImage = require('../assets/images/dark-backgroundComDatas.png');

	return (
		<VStack justifyContent='center' alignItems='center' align='center'>
			<Center>
				<Image
					resizeMethod='auto'
					resizeMode={'cover'}
					styles={styles.image}
					source={dateLogoImage}
					boxSize={500}
					style={{ width: 700 }}
				/>
			</Center>
		</VStack>
	);
}
