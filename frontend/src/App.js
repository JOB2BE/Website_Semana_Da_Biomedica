import React from 'react';
import { Router, Route, Routes } from './router';
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
import GlobalTheme from './GlobalTheme';
import { useFonts } from 'expo-font';

export default function App() {
	// eslint-disable-next-line no-unused-vars
	const [fontsLoaded] = useFonts({
		// eslint-disable-next-line no-undef
		TextMe: require('./assets/fonts/TextMeOne-Regular.ttf'),
	});
	return (
		<NativeBaseProvider theme={GlobalTheme}>
			<Router>
				<Navbar />
				<Routes>
					<Route exact path='/' element={<LandingPage />} />
					<Route path='/AboutUs' element={<AboutUsPage />} />
					<Route path='/Schedule' element={<SchedulePage />} />
					<Route path='/Activity' element={<ActivityPage />} />
					<Route path='/Activities' element={<ActivitiesPage />} />
					<Route path='/Speakers' element={<SpeakersPage />} />
					<Route path='/Speaker' element={<SpeakerPage />} />
					<Route path='/Feedback' element={<FeedbackPage />} />
				</Routes>
			</Router>
		</NativeBaseProvider>
	);
}
