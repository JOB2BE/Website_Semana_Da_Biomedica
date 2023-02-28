import React, { useState } from 'react';
import { Text, Column, Row } from 'native-base';
import StyledBox from '../components/information/StyledBox';
import theme from '../theme';
import { MaterialIcons, AntDesign, Fontisto } from '@expo/vector-icons';
import { Link } from '../router/index';
import { StyleSheet } from 'react-native';
import { useWindowDimensions } from 'react-native';
import responsiveWidth from '../utils/responsiveWidth';
import responsiveHeight from '../utils/responsiveHeight';

// TODO: VERIFY ON MOBILE

export default function NotFound() {
	var window = useWindowDimensions();
	var paddingBox = responsiveHeight(window, null, null, 0.1);
	var boxWidthMobile = responsiveWidth(window, 150, null, 0.8);
	var boxWidth = responsiveWidth(window, null, 1000, 0.6);
	var isSmallScreen = window.width < 850;

	const styles = StyleSheet.create({
		aboutBox: {
			paddingVertical: paddingBox,
			borderRadius: 25,
		},
		text: { fontWeight: 'bold' },
	});

	return (
		<Column flex={1} space={120} style={styles.aboutBox}>
			<Row justifyContent={'center'}>
				<StyledBox
					width={isSmallScreen ? boxWidthMobile : boxWidth}
					headingText='Erro 404 - Crise Existencial'
					childrenJustifyContent='center'
				>
					<Text size='md' style={styles.text}>
						Sonho que sou a Poetisa eleita, {'\n'}
						Aquela que diz tudo e tudo sabe, {'\n'}
						Que tem a inspiração pura e perfeita, {'\n'}
						Que reúne num verso a imensidade! {'\n'} {'\n'}
						Sonho que um verso meu tem claridade {'\n'}
						Para encher todo o mundo! E que deleita {'\n'}
						Mesmo aqueles que morrem de saudade! {'\n'}
						Mesmo os de alma profunda e insatisfeita! {'\n'} {'\n'}
						Sonho que sou Alguém cá neste mundo... {'\n'}
						Aquela de saber vasto e profundo, {'\n'}
						Aos pés de quem a terra anda curvada! {'\n'} {'\n'}E quando mais no céu eu
						vou sonhando, {'\n'}E quando mais no alto ando voando, {'\n'}
						Acordo do meu sonho... E não sou nada!... {'\n'} {'\n'}
						Florbela Espanca, Vaidade in Livro de Mágoas, 1919
					</Text>
				</StyledBox>
			</Row>
		</Column>
	);
}
