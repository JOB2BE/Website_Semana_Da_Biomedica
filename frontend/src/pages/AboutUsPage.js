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
		<Column flex={1} space={12}>
			<Row justifyContent={'center'} style={styles.aboutBox}>
				<StyledBox headingText={'Sobre:'} flex={0.9}>
					<Text fontSize={'xs'}>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
						doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
						veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
						ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
						consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut
						perspiciatis unde omnis iste natus error sit voluptatem accusantium
						doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
						veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
						ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
						consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut
						perspiciatis unde omnis iste natus error sit voluptatem accusantium
						doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
						veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
						ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
						consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
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
						<DropDownTeam year={'2022/2023'} team={{}} index={currentIndex} />
					</Pressable>
				</StyledBox>
			</Row>
		</Column>
	);
}
