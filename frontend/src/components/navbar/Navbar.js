import * as React from 'react';
import { Center, Heading, Box, Stack } from 'native-base';
import AboutUsIcon from '../../assets/images/AboutUsIcon';
import ScheduleIcon from '../../assets/images/ScheduleIcon';
import ActivitiesIcon from '../../assets/images/ActivitiesIcon';
import SpeakersIcon from '../../assets/images/SpeakersIcon';
import Logo from '../../assets/images/WhiteBGLogo';
import { StyleSheet } from 'react-native';
import { Link } from '../../router/index';

import * as Localization from 'expo-localization'; //Internationalisation dependencies
import { I18n } from 'i18n-js';
import { en, pt } from '../../utils/supportedLanguages';

var idiom = new I18n();
idiom.enableFallback = true; //If a key is missing the default language will be chosen for that string in the webpage
idiom.translations = { en, pt }; // All our languages
idiom.locale = Localization.locale; // get the device's current language code

const styles = StyleSheet.create({
	leftContainer: {
		borderBottomLeftRadius: 20,
		backgroundColor: '#2D6793',
		height: '40%',
		paddingHorizontal: 25,
	},
	rightContainer: {
		borderBottomRightRadius: 20,
		backgroundColor: '#2D6793',
		height: '40%',
		paddingHorizontal: 25,
		zIndex: -1,
	},
	logoContainer: {
		borderBottomLeftRadius: 100000,
		borderBottomRightRadius: 100000,
		backgroundColor: '#FDBA35',
		padding: 7,
	},
	sideFlexes: {
		padding: 10,
	},
	shadow: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.34,
		shadowRadius: 6.27,
		elevation: 10,
	},
});

export const Navbar = () => {
	const navbarRoutes = [
		{
			name: idiom.t(['navbar', 'aboutUs']),
			icon: <AboutUsIcon />,
			route: '/AboutUs',
		},
		{
			name: idiom.t(['navbar', 'schedule']),
			icon: <ScheduleIcon />,
			route: '/Schedule',
		},
		{
			name: idiom.t(['navbar', 'activities']),
			icon: <ActivitiesIcon />,
			route: '/Activities',
		},
		{
			name: idiom.t(['navbar', 'speakers']),
			icon: <SpeakersIcon />,
			route: '/Speakers',
		},
	];
	return (
		<>
			<Center>
				<Stack direction='row' justifyContent='space-around' alignContent='center'>
					<Stack
						direction='row'
						style={[styles.leftContainer, styles.shadow]}
						justifyContent='flex-start'
						space={10}
					>
						{navbarRoutes.slice(0, 2).map((route, index) => {
							return (
								<Link
									key={index}
									to={route.route}
									style={{ textDecoration: 'none' }}
								>
									<Stack
										direction='row'
										justifyContent='center'
										alignItems='center'
										style={styles.sideFlexes}
										space={2}
									>
										{route.icon}
										<Heading style={{ color: 'white' }}>{route.name}</Heading>
									</Stack>
								</Link>
							);
						})}
					</Stack>

					<Box
						style={{
							alignItems: 'center',
						}}
					>
						<Link to='/' style={{ textDecoration: 'none' }}>
							<Logo style={[styles.logoContainer, styles.shadow]} />
						</Link>
					</Box>

					<Stack
						direction='row'
						style={[styles.rightContainer, styles.shadow]}
						justifyContent='flex-start'
						space={10}
					>
						{navbarRoutes.slice(2).map((route, index) => {
							return (
								<Link
									key={index}
									to={route.route}
									style={{ textDecoration: 'none' }}
								>
									<Stack
										direction='row'
										justifyContent='center'
										alignItems='center'
										style={styles.sideFlexes}
										space={2}
									>
										{route.icon}
										<Heading style={{ color: 'white' }}>{route.name}</Heading>
									</Stack>
								</Link>
							);
						})}
					</Stack>
				</Stack>
			</Center>
		</>
	);
};
