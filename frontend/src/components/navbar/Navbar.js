import * as React from 'react';
import { Button, Center, Heading, Box, Flex, Stack } from 'native-base';
import AboutUsIcon from '../../assets/images/AboutUsIcon';
import ScheduleIcon from '../../assets/images/ScheduleIcon';
import ActivitiesIcon from '../../assets/images/ActivitiesIcon';
import SpeakersIcon from '../../assets/images/SpeakersIcon';
import Logo from '../../assets/images/WhiteBGLogo';
import { StyleSheet } from 'react-native';
import { Link } from '../../router/index';

const styles = StyleSheet.create({
	leftContainer: {
		borderBottomLeftRadius: 300,
		backgroundColor: '#2D6793',
		height: '40%',
		paddingHorizontal: 10,
	},
	rightContainer: {
		borderBottomRightRadius: 300,
		backgroundColor: '#2D6793',
		height: '40%',
		paddingHorizontal: 10,
		zIndex: -1,
	},
	logoContainer: {
		borderBottomLeftRadius: 3600,
		borderBottomRightRadius: 3600,
		backgroundColor: '#FDBA35',
		padding: 5,
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
const navbarRoutes = [
	{
		name: 'Quem Somos',
		icon: <AboutUsIcon style={styles.icon} />,
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
				<Stack direction='row' justifyContent='space-around' alignContent='center'>
					<Stack
						direction='row'
						style={[styles.leftContainer, styles.shadow]}
						justifyContent='flex-start'
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
