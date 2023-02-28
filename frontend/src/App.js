import React from 'react';
import { Router, Route, Routes } from './router/index';
import { NativeBaseProvider } from 'native-base';
import { Navbar } from './components/navbar/Navbar'; 
import LandingPage from './pages/LandingPage';
import AboutUsPage from './pages/AboutUsPage';
import SchedulePage from './pages/SchedulePage';
import ActivityPage from './pages/ActivityPage';
import ActivitiesPage from './pages/ActivitiesPage';
import SpeakersPage from './pages/SpeakersPage';
import SpeakerPage from './pages/SpeakerPage';
import FeedbackPage from './pages/FeedbackPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PasswordRecoveryPage from './pages/PasswordRecoveryPage';
import LecturesPage from './pages/LecturesPage.js';
import AlumniSessionsPage from './pages/AlumniSessionsPage';
import NetworkingPage from './pages/NetworkingPage';
import WorkshopsPage from './pages/WorkshopsPage';
import TestPage from './pages/SpeakerPageDummy';
import ActivitiesPage2 from './pages/ActivitiesPage2';
import LecturesPage2 from './pages/LecturesPage2.js';
import theme from './theme';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import * as Localization from 'expo-localization'; //Internationalisation dependencies
import { I18n } from 'i18n-js';
import { en, pt } from './utils/supportedLanguages';
import { ImageBackground, View } from 'react-native';

var i18n = new I18n();
i18n.enableFallback = true; //If a key is missing the default language will be chosen for that string in the webpage
i18n.translations = { en, pt }; // All our languages
i18n.locale = Localization.locale; // get the device's current language code

const config = {
	dependencies: {
		'linear-gradient': LinearGradient,
	},
};

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
	return (
		<ImageBackground
			source={require('./assets/images/79banner.svg')}
			style={{ flex: 1 }}
			resizeMode={'cover'}
		>
			<View>
				{' '}
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
							<Route path='/LoginPage' element={<LoginPage idiom={i18n} />} />
							<Route path='/Register' element={<RegisterPage idiom={i18n} />} />
							<Route
								path='/PasswordRecovery'
								element={<PasswordRecoveryPage idiom={i18n} />}
							/>
							<Route path='/Lectures' element={<LecturesPage idiom={i18n} />} />
							<Route
								path='/AlumniSessions'
								element={<AlumniSessionsPage idiom={i18n} />}
							/>
							<Route path='/Networking' element={<NetworkingPage idiom={i18n} />} />
							<Route path='/Workshops' element={<WorkshopsPage idiom={i18n} />} />
							<Route path='/Test' element={<TestPage idiom={i18n} />} />
							<Route path='/Activities2' element={<ActivitiesPage2 idiom={i18n} />} />
							<Route path='/Lectures2' element={<LecturesPage2 idiom={i18n} />} />
						</Routes>
					</Router>
				</NativeBaseProvider>
			</View>
		</ImageBackground>
	);
}
