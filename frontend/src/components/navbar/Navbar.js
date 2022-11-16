import * as React from 'react';
import { HStack, Button, Center, Heading, VStack } from 'native-base';
import AboutUsIcon from '../../../assets/AboutUsIcon';
import ScheduleIcon from '../../../assets/ScheduleIcon';
import ActivitiesIcon from '../../../assets/ActivitiesIcon';
import SpeakersIcon from '../../../assets/SpeakersIcon';
// import Logo from '../../../assets/DarkBGLogo';
import Logo from '../../../assets/WhiteBGLogo';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
	container: {
		borderBottomLeftRadius: 300,
		borderBottomRightRadius: 300,
		padding: '0.5em',
		backgroundColor: 'grey',
	},
	logoContainer: {
		borderBottomLeftRadius: 1600,
		borderBottomRightRadius: 1600,
		backgroundColor: 'yellow',
		zIndex: 2,
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
		<Center>
			<View
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					zIndex: 2,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<VStack style={styles.logoContainer}>
					<Logo />
				</VStack>
			</View>
			<HStack style={styles.container} justifyContent='space-between' alignItems='center'>
				<HStack alignItems={'stretch'}>
					{navbarRoutes.map((route, index) => {
						if (navbarRoutes.isImage) {
							return null;
						} else {
							return (
								<Button style={styles.navButton} leftIcon={route.icon} key={index}>
									<Heading size='md'>{route.name}</Heading>
								</Button>
							);
						}
					})}
				</HStack>
			</HStack>
		</Center>
	);
};
