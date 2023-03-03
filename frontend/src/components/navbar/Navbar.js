import { React, useState } from 'react';
import { Center, Heading, Column, Stack, Image } from 'native-base';
import { StyleSheet, useWindowDimensions } from 'react-native';
import { Link } from '../../router/index';
import { useLocation } from 'react-router-dom';
import { FontAwesome5 } from '@expo/vector-icons';
import * as Localization from 'expo-localization'; //Internationalisation dependencies
import { I18n } from 'i18n-js';
import { en, pt } from '../../utils/supportedLanguages';
import theme from '../../theme';
import { NavBarMobile } from './NavBarMobile';

var idiom = new I18n();
idiom.enableFallback = true; //If a key is missing the default language will be chosen for that string in the webpage
idiom.translations = { en, pt }; // All our languages
idiom.locale = Localization.locale; // get the device's current language code

const logo = require('../../assets/images/dark-background.png');

const styles = StyleSheet.create({
	leftContainer: {
		borderBottomLeftRadius: 20,
		backgroundColor: theme.colors.medYellow['0'],
		height: '40%',
		paddingHorizontal: 25,
	},
	rightContainer: {
		borderBottomRightRadius: 20,
		backgroundColor: theme.colors.medYellow['0'],
		height: '40%',
		paddingHorizontal: 25,
		zIndex: -1,
	},
	logoContainer: {
		borderBottomLeftRadius: 100000,
		borderBottomRightRadius: 100000,
		backgroundColor: theme.colors.dryBlue['0'],
		marginTop: -20,
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
	var window = useWindowDimensions();
	var isScreenSmall = window.width < 850;
	const [loggedIn, setLoggedIn] = useState(false);
	var navbarRoutes = [
		{
			name: 'Atividades',
			icon: 'brain',
			route: '/Activities',
		},

		{
			name: 'Horário',
			icon: 'calendar-alt',
			route: '/Schedule',
		},
		{
			name: 'Quem Somos',
			icon: 'people-carry',
			route: '/AboutUs',
		},
		{
			name: 'Login',
			icon: 'door-closed',
			route: '/Login',
		},
	];
	if (loggedIn) {
		navbarRoutes = [
			{
				name: 'Atividades',
				icon: 'brain',
				route: '/Activities',
			},

			{
				name: 'Horário',
				icon: 'calendar-alt',
				route: '/Schedule',
			},
			{
				name: 'Quem Somos',
				icon: 'people-carry',
				route: '/AboutUs',
			},
			{
				name: 'Perfil',
				icon: 'door-open',
				route: '/User',
			},
		];
	}
	if (isScreenSmall) {
		return <NavBarMobile navbarRoutes={navbarRoutes} />;
	}

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
										<FontAwesome5
											name={route.icon}
											size={24}
											style={styles.heading}
										/>
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
										<FontAwesome5 name={route.icon} size={24} color={'white'} />
										<Heading style={{ color: theme.colors.dryBlue['0'] }}>
											{route.name}
										</Heading>
									</Stack>
								</Link>
							);
						})}
					</Stack>
					<Link to='/' style={{ textDecoration: 'none' }}>
						{/*TODO: CHANGE LOGO TO SMALLER SIZE*/}
						<Column
							justifyContent={'flex-start'}
							style={[styles.logoContainer, styles.shadow]}
						>
							<Image size={175} source={logo} />
						</Column>
					</Link>

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
										<FontAwesome5 name={route.icon} size={24} color={'white'} />
										<Heading style={{ color: theme.colors.dryBlue['0'] }}>
											{route.name}
										</Heading>
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
