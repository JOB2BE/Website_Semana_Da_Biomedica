import * as React from 'react';
import { HStack, Button, Box, StatusBar, Center } from 'native-base';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		borderBottomLeftRadius: '300px',
		borderBottomRightRadius: '300px',
		padding: '1em',
	},
	navButton: {
		backgroundColor: 'transparent',
	},
});
const navbarRoutes = [
	{
		name: 'Quem Somos',
		icon: null,
	},
	{
		name: 'Horários',
		icon: null,
	},
	{
		name: 'Actividades',
		icon: null,
	},
	{
		name: 'Convidados',
		icon: null,
	},
];

export const Navbar = () => {
	return (
		<Center>
			<StatusBar bg='#3700B3' barStyle='light-content' />
			<Box safeAreaTop bg='violet.600' />
			<HStack
				style={styles.container}
				bg='violet.600'
				px='1'
				py='3'
				justifyContent='space-between'
				alignItems='center'
			>
				{navbarRoutes.forEach((route, index) => (
					<Button leftIcon={route.icon} key={index}>
						{' '}
						{route.name}{' '}
					</Button>
				))}
			</HStack>
		</Center>
	);
};
