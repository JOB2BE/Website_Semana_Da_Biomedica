import * as React from 'react';
import { HStack, Button, Center, Heading, VStack, ZStack, Box, Flex, Spacer } from 'native-base';
import AboutUsIcon from '../../../assets/AboutUsIcon';
import ScheduleIcon from '../../../assets/ScheduleIcon';
import ActivitiesIcon from '../../../assets/ActivitiesIcon';
import SpeakersIcon from '../../../assets/SpeakersIcon';
// import Logo from '../../../assets/DarkBGLogo';
import Logo from '../../../assets/WhiteBGLogo';
import { StyleSheet, View } from 'react-native';

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
		zIndex: 5,
	},
	navButton: {
		backgroundColor: 'transparent',
	},
});
const navbarRoutes = [
	{
		name: 'Quem Somos',
		isImage: false,
		icon: <AboutUsIcon />,
	},
	{
		name: 'Horários',
		isImage: false,
		icon: <ScheduleIcon />,
	},
	{
		name: 'Actividades',
		isImage: false,
		icon: <ActivitiesIcon />,
	},
	{
		name: 'Convidados',
		isImage: false,
		icon: <SpeakersIcon />,
	},
];

export const Navbar = () => {
	return (
		<>
			<Center>
				<Flex direction='row' justifyContent='space-around' alignContent='center'>
					<Flex direction='row' style={styles.leftContainer} justifyContent='flex-start'>
						{navbarRoutes.slice(0, 2).map((route, index) => {
							return (
								<Button style={styles.navButton} leftIcon={route.icon} key={index}>
									<Heading style={{ color: 'white' }} size='md'>
										{route.name}
									</Heading>
								</Button>
							);
						})}
					</Flex>
					<Box
						style={{
							alignItems: 'center',
						}}
					>
						<Logo style={styles.logoContainer} />
					</Box>
					<Flex direction='row' style={styles.rightContainer} justifyContent='flex-end'>
						{navbarRoutes.slice(2).map((route, index) => {
							return (
								<Button style={styles.navButton} leftIcon={route.icon} key={index}>
									<Heading style={{ color: 'white' }} size='md'>
										{route.name}
									</Heading>
								</Button>
							);
						})}
					</Flex>
				</Flex>
			</Center>
		</>
	);
};
