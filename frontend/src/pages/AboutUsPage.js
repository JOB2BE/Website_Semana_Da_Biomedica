import React from 'react';
import { StyleSheet } from 'react-native';
import { Center, Stack, Text, View } from 'native-base';
import HeadingBox from '../components/information/HeadingBox';
import * as Localization from 'expo-localization'; //Internationalisation dependencies
import { I18n } from 'i18n-js';
import { en, pt } from '../utils/supportedLanguages';

var idiom = new I18n();
idiom.enableFallback = true; //If a key is missing the default language will be chosen for that string in the webpage
idiom.translations = { en, pt }; // All our languages
idiom.locale = Localization.locale; // get the device's current language code

export default function AboutUsPage() {
	return (
		<View>
			<Stack direction={'column'} justifyContent={'flex-end'} alignItems={'stretch'}>
				<HeadingBox headingText={'Sobre:'}>
					<Text size='xs'>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
						doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
						veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
						ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
						consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
					</Text>
				</HeadingBox>
			</Stack>
		</View>
	);
}
