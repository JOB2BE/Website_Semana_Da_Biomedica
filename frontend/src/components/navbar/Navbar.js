import * as React from 'react';
import { Button, Center, Heading, Box, Flex } from 'native-base';
import AboutUsIcon from '../../assets/images/AboutUsIcon';
import ScheduleIcon from '../../assets/images/ScheduleIcon';
import ActivitiesIcon from '../../assets/images/ActivitiesIcon';
import SpeakersIcon from '../../assets/images/SpeakersIcon';
import Logo from '../../assets/images/WhiteBGLogo';
import { StyleSheet } from 'react-native';
import { Link } from '../../router';

const styles = StyleSheet.create({
	leftContainer: {
		borderBottomLeftRadius: 300,
		padding: '0.1em',
		paddingHorizontal: '1.5em',
		backgroundColor: '#2D6793',
		height: '40%',
		marginRight: -2,
	},
	rightContainer: {
		borderBottomRightRadius: 300,
		padding: '0.1em',
		paddingHorizontal: '1.5em',
		backgroundColor: '#2D6793',
		height: '40%',
		marginLeft: -2,
		zIndex: -1,
	},
	logoContainer: {
		borderBottomLeftRadius: 3600,
		borderBottomRightRadius: 3600,
		backgroundColor: '#FDBA35',
		padding: '0.5em',
	},
	navButton: {
		backgroundColor: 'transparent',
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
const navbarRoutes = [
	{
		name: 'Quem Somos',
		icon: <AboutUsIcon />,
		route: '/AboutUs',
	},
	{
		name: 'Horários',
		icon: <ScheduleIcon />,
		route: '/Schedule',
	},
	{
		name: 'Actividades',
		icon: <ActivitiesIcon />,
		route: '/Activities',
	},
	{
		name: 'Convidados',
		icon: <SpeakersIcon />,
		route: '/Speakers',
	},
];

export const Navbar = () => {
	return (
		<>
			<Center>
				<Flex direction='row' justifyContent='space-around' alignContent='center'>
					<Flex
						direction='row'
						style={[styles.leftContainer, styles.shadow]}
						justifyContent='flex-start'
					>
						{navbarRoutes.slice(0, 2).map((route, index) => {
							return (
								<Button style={styles.navButton} leftIcon={route.icon} key={index}>
									<Link to={route.route} style={{ textDecoration: 'none' }}>
										{' '}
										<Heading style={{ color: 'white' }} size='md'>
											{route.name}
										</Heading>
									</Link>
								</Button>
							);
						})}
					</Flex>

					<Box
						style={{
							alignItems: 'center',
						}}
					>
						<Link to='/' style={{ textDecoration: 'none' }}>
							<Logo style={[styles.logoContainer, styles.shadow]} />
						</Link>
					</Box>

					<Flex
						direction='row'
						style={[styles.rightContainer, styles.shadow]}
						justifyContent='flex-end'
					>
						{navbarRoutes.slice(2).map((route, index) => {
							return (
								<Button style={styles.navButton} leftIcon={route.icon} key={index}>
									<Link to={route.route} style={{ textDecoration: 'none' }}>
										{' '}
										<Heading style={{ color: 'white' }} size='md'>
											{route.name}
										</Heading>
									</Link>
								</Button>
							);
						})}
					</Flex>
				</Flex>
			</Center>
		</>
	);
};
