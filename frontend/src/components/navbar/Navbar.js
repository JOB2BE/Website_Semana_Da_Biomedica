import * as React from 'react';
import { Center, Heading, Box, Stack, Pressable, Button } from 'native-base';
import AboutUsIcon from '../../assets/images/AboutUsIcon';
import ScheduleIcon from '../../assets/images/ScheduleIcon';
import ActivitiesIcon from '../../assets/images/ActivitiesIcon';
import SpeakersIcon from '../../assets/images/SpeakersIcon';
import AboutUsIconDark from '../../assets/images/AboutUsIconDark';
import ScheduleIconDark from '../../assets/images/ScheduleIconDark';
import ActivitiesIconDark from '../../assets/images/ActivitiesIconDark';
import SpeakersIconDark from '../../assets/images/SpeakersIconDark';
import Logo from '../../assets/images/WhiteBGLogo';
import { StyleSheet } from 'react-native';
import { Link } from '../../router/index';
import { useLocation } from 'react-router-dom';

import * as Localization from 'expo-localization'; //Internationalisation dependencies
import { I18n } from 'i18n-js';
import { en, pt } from '../../utils/supportedLanguages';
import theme from '../../theme';

var idiom = new I18n();
idiom.enableFallback = true; //If a key is missing the default language will be chosen for that string in the webpage
idiom.translations = { en, pt }; // All our languages
idiom.locale = Localization.locale; // get the device's current language code

const styles = StyleSheet.create({
	leftContainer: {
		borderBottomLeftRadius: 20,
		backgroundColor: theme.colors.dryBlue[0],
		height: '40%',
		paddingHorizontal: 25,
	},
	rightContainer: {
		borderBottomRightRadius: 20,
		backgroundColor: theme.colors.dryBlue[0],
		height: '40%',
		paddingHorizontal: 25,
		zIndex: -1,
	},
	logoContainer: {
		borderBottomLeftRadius: 100000,
		borderBottomRightRadius: 100000,
		backgroundColor: theme.colors.medYellow,
		padding: 7,
	},
	sideFlexes: {
		padding: 10,
	},
	shadow: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.34,
		shadowRadius: 6.27,
		elevation: 10,
	},
	image: {
		flex: 1,
	},
	heading: {
		color: 'white',
	},

});

export const Navbar = () => {
	const navbarRoutes = [
		{
			name: idiom.t(['navbar', 'aboutUs']),
			icon: [<AboutUsIcon />, <AboutUsIconDark />],
			route: '/AboutUs',
		},
		{
			name: idiom.t(['navbar', 'schedule']),
			icon: [<ScheduleIcon />, <ScheduleIconDark />],
			route: '/Schedule',
		},
		{
			name: idiom.t(['navbar', 'activities']),
			icon: [<ActivitiesIcon />, <ActivitiesIconDark />],
			route: '/Activities',
		},
		{
			name: idiom.t(['navbar', 'speakers']),
			icon: [<SpeakersIcon />, <SpeakersIconDark />],
			route: '/Speakers',
		},
	];
	if (useLocation().pathname === '/') {
		// In the case were we are ib the landing page

		const styles = StyleSheet.create({
			leftContainer: {
				borderBottomLeftRadius: 20,
				backgroundColor: theme.colors.dryBlue[0],
				height: '40%',
				paddingHorizontal: 25,
			},
			rightContainer: {
				borderBottomRightRadius: 20,
				backgroundColor: theme.colors.dryBlue[0],
				height: '40%',
				paddingHorizontal: 25,
				zIndex: -1,
			},
			logoContainer: {
				borderBottomLeftRadius: 100000,
				borderBottomRightRadius: 100000,
				backgroundColor: theme.colors.medYellow,
				padding: 7,
			},
			sideFlexes: {
				padding: 10,
			},
			shadow: {
				shadowColor: '#000',
				shadowOffset: {
					width: 0,
					height: 2,
				},
				shadowOpacity: 0.34,
				shadowRadius: 6.27,
				elevation: 10,
			},
			image: {
				flex: 1,
			},
			heading: {
				color: 'black',
				textShadowColor: theme.colors.dryBlue[0],
				textShadowOffset: {
					width: 1,
					height: 2,
				},
				textShadowOpacity: 0.2,
				textShadowRadius: 0.5,
			},
		});
		return (
			<Center>
				<Stack direction='row' justifyContent='space-around' alignContent='center'>
					<Stack direction='row' justifyContent='flex-start' space={100}>
						{navbarRoutes.map((route, index) => {
							return (
								<Link
									key={index}
									to={route.route}
									style={{ textDecoration: 'none' }}
								>
									<Stack
										direction='row'
										justifyContent='space-between'
										alignItems='center'
										style={styles.sideFlexes}
										space={2}
									>
										{route.icon[1]}
										<Heading style={styles.heading}>{route.name}</Heading>
									</Stack>
								</Link>
							);
						})}
					</Stack>
				</Stack>
			</Center>
		);
	}
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
										{route.icon[0]}
										<Heading style={styles.heading}>{route.name}</Heading>
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
										{route.icon[0]}
										<Heading style={styles.heading}>{route.name}</Heading>
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
