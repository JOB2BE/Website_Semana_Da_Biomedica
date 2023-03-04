import React from 'react';
import { StyleSheet } from 'react-native';
import { Column, Row, Text, Pressable } from 'native-base';
import StyledBox from '../components/information/StyledBox';
import DropDownTeam from '../components/information/DropDownTeam';
import * as Localization from 'expo-localization'; //Internationalisation dependencies
import { I18n } from 'i18n-js';
import { en, pt } from '../utils/supportedLanguages';

var idiom = new I18n();
idiom.enableFallback = true; //If a key is missing the default language will be chosen for that string in the webpage
idiom.translations = { en, pt }; // All our languages
idiom.locale = Localization.locale; // get the device's current language code

export default function AboutUsPage() {
	const [currentIndex, setCurrentIndex] = React.useState(null);
	const styles = StyleSheet.create({
		aboutBox: {
			paddingTop: '2.5%',
		},
	});
	return (
		<Column space={12} style={styles.aboutBox}>
			<Row justifyContent={'center'} >
				<StyledBox headingText={'Sobre:'} flex={0.9}>
					<Text fontSize={'sm'}>
						A JOB2BE - Semana da Biomédica 2023 é um evento organizado pelo Núcleo de
						Estudantes de Engenharia Biomédica do Instituto Superior Técnico da
						Universidade de Lisboa (NEBM-IST), cuja 2ª edição decorrerá entre os dias 6
						e 8 de março de 2023, em formato presencial. A nossa missão mantém-se:
						estreitar a relação entre a comunidade académica, a comunidade científica e
						o mundo empresarial; assim como divulgar o trabalho desenvolvido atualmente,
						em Portugal e no Mundo, nos mais diversos setores da área da Engenharia
						Biomédica. Para fazer cumprir este objetivo, pretendemos, durante estes
						dias, reunir um conjunto interdisciplinar de estudantes, académicos,
						empresas e start-ups, fomentando a interação e a partilha de conhecimento
						entre estas entidades. O evento contará com um ciclo de palestras, workshops
						e pitches, entre outras atividades. Nesta edição da JOB2BE, abordaremos
						temas como gamificação na saúde, terapias génicas e edição génica,
						abordagens inovadoras na investigação do cérebro e data science em medicina,
						que irão estar distribuídos por quatro painéis.
					</Text>
				</StyledBox>
			</Row>
			<Row justifyContent={'center'}>
				<StyledBox headingText={'A Equipa:'} flex={0.9}>
					<Pressable
						onPress={() => {
							if (currentIndex === 0) {
								setCurrentIndex(null);
							} else {
								setCurrentIndex(0);
							}
						}}
						flex={1}
					>
						<DropDownTeam year={'2022/2023'} index={currentIndex} />
					</Pressable>
				</StyledBox>
			</Row>
		</Column>
	);
}
