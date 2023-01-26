import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { Router, Route, Routes } from './router/index';
import { NativeBaseProvider, View } from 'native-base';
import { Navbar } from './components/navbar/Navbar';
import LandingPage from './pages/LandingPage';
import AboutUsPage from './pages/AboutUsPage';
import SchedulePage from './pages/SchedulePage';
import ActivityPage from './pages/ActivityPage';
import ActivitiesPage from './pages/ActivitiesPage';
import SpeakersPage from './pages/SpeakersPage';
import SpeakerPage from './pages/SpeakerPage';
import FeedbackPage from './pages/FeedbackPage';
import theme from './theme';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import * as Localization from 'expo-localization'; //Internationalisation dependencies
import { I18n } from 'i18n-js';
import { en, pt } from './utils/supportedLanguages';

var i18n = new I18n();
i18n.enableFallback = true; //If a key is missing the default language will be chosen for that string in the webpage
i18n.translations = { en, pt }; // All our languages
i18n.locale = Localization.locale; // get the device's current language code

const config = {
	dependencies: {
		'linear-gradient': LinearGradient,
	},
};

const styles = StyleSheet.create({
	image: {
		justifyContent: 'center',
		flex: 1,
	},
});

export default function App() {
	// eslint-disable-next-line no-unused-vars
	const [fontsLoaded] = useFonts({
		// eslint-disable-next-line no-undef
		TextMe: require('./assets/fonts/TextMeOne-Regular.ttf'),
	});
	if (!fontsLoaded) {
		//The user won't see the fonts loading
		return null;
	}
	const image = { uri: 'https://reactjs.org/logo-og.png' };
	return (
		<ImageBackground source={image} style={styles.image} resizeMode='cover'>
			<NativeBaseProvider theme={theme} config={config}>
				<Router>
					<Navbar />
					<Routes>
						<Route exact path='/' element={<LandingPage idiom={i18n} />} />
						<Route path='/AboutUs' element={<AboutUsPage idiom={i18n} />} />
						<Route path='/Schedule' element={<SchedulePage idiom={i18n} />} />
						<Route path='/Activity' element={<ActivityPage idiom={i18n} />} />
						<Route path='/Activities' element={<ActivitiesPage idiom={i18n} />} />
						<Route path='/Speakers' element={<SpeakersPage idiom={i18n} />} />
						<Route path='/Speaker' element={<SpeakerPage idiom={i18n} />} />
						<Route path='/Feedback' element={<FeedbackPage idiom={i18n} />} />
					</Routes>
				</Router>
			</NativeBaseProvider>
		</ImageBackground>
	);
}
