import React from 'react';
import { StyleSheet } from 'react-native';
import { Stack, Text, View } from 'native-base';
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
			<Stack direction='row' alignItems='center'></Stack>
		</View>
	);
}
