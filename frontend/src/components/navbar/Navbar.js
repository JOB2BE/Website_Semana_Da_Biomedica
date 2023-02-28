import { React, useState } from 'react';
import { Center, Heading, Box, Stack } from 'native-base';
import Logo from '../../assets/images/WhiteBGLogo';
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
	var window = useWindowDimensions();
	var isScreenSmall = window.width < 850;
	const [loggedIn, setLoggedIn] = useState(false);
	var navbarRoutes = (color) => [
		{
			name: 'Atividades',
			icon: <FontAwesome5 name='brain' size={24} color={color} />,
			route: '/Activities',
		},

		{
			name: 'Horário',
			icon: <FontAwesome5 name='calendar-alt' size={24} color={color} />,
			route: '/Schedule',
		},
		{
			name: 'Quem Somos',
			icon: <FontAwesome5 name='people-carry' size={24} color={color} />,
			route: '/AboutUs',
		},
		{
			name: 'Login',
			icon: <FontAwesome5 name='door-closed' size={24} color={color} />,
			route: '/Login',
		},
	];
	if (loggedIn) {
		navbarRoutes = (color) => [
			{
				name: 'Atividades',
				icon: <FontAwesome5 name='brain' size={24} color={color} />,
				route: '/Activities',
			},

			{
				name: 'Horário',
				icon: <FontAwesome5 name='calendar-alt' size={24} color={color} />,
				route: '/Schedule',
			},
			{
				name: 'Quem Somos',
				icon: <FontAwesome5 name='people-carry' size={24} color={color} />,
				route: '/AboutUs',
			},
			{
				name: 'Perfil',
				icon: <FontAwesome5 name='door-open' size={24} color={color} />,
				route: '/User',
			},
		];
	}
	if (isScreenSmall) {
		return <NavBarMobile navbarRoutes={navbarRoutes} />;
	}
	if (useLocation().pathname === '/') {
		// In the case were we are ib the landing page
		return (
			<Center>
				<Stack direction='row' justifyContent='space-around' alignContent='center'>
					<Stack direction='row' justifyContent='flex-start' space={100}>
						{navbarRoutes('white').map((route, index) => {
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
										<Heading style={{ color: 'white' }}>{route.name}</Heading>
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
						{navbarRoutes('white')
							.slice(0, 2)
							.map((route, index) => {
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
											<Heading style={{ color: 'white' }}>
												{route.name}
											</Heading>
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
						{navbarRoutes('white')
							.slice(2)
							.map((route, index) => {
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
		</>
	);
};
