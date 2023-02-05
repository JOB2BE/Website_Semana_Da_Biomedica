import * as React from 'react';
import { Center, Heading, Box, Stack } from 'native-base';
import AboutUsIcon from '../../assets/images/AboutUsIcon';
import ScheduleIcon from '../../assets/images/ScheduleIcon';
import ActivitiesIcon from '../../assets/images/ActivitiesIcon';
import SpeakersIcon from '../../assets/images/SpeakersIcon';
import Logo from '../../assets/images/WhiteBGLogo';
import { StyleSheet, ImageBackground, Platform } from 'react-native';
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
	if (useLocation().pathname === '/') {
		// In the case were we are ib the landing page
		return (
			<ImageBackground
				// eslint-disable-next-line no-undef
				source={
					Platform.OS == 'web'
						? require('../../assets/images/banner_datas_dark.png')
						: require('../../assets/images/bannerMobile.png')
				}
				style={styles.image}
				resizeMode={Platform.OS == 'web' ? 'cover' : 'cover'}
			>
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
											{route.icon}
											<Heading style={{ color: 'white' }}>
												{route.name}
											</Heading>
										</Stack>
									</Link>
								);
							})}
						</Stack>
					</Stack>
				</Center>
			</ImageBackground>
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
