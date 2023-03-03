import { React, useState } from 'react';
import { Heading, Row, Column, Center } from 'native-base';
import Logo from '../assets/images/WhiteBGLogo';
import theme from '../theme';
import { StyleSheet } from 'react-native';
import { Link } from '../router/index';
import { FontAwesome5 } from '@expo/vector-icons';

export const MobileDrawer = () => {
	const styles = StyleSheet.create({
		menu: {
			backgroundColor: theme.colors.medYellow[0],
			padding: 10,
			position: 'fixed',
			width: '100%',
			height: '100%',
		},
		textTitle: {
			color: 'white',
		},
	});
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
			name: 'Parcerias',
			icon: 'people-arrows',
			route: '/Partnerships',
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
			{
				name: 'Página Inicial',
				icon: 'home',
				route: '/Login',
			},
		];
	}
	return (
		<Center flex={1} style={styles.menu}>
			<Row flex={'auto'}>
				<Column flex={'auto'} space={30}>
					<Row flex={1}>
						<Column alignItems='center' flex={'auto'} justifyContent='space-evenly'>
							<Column justifyContent='space-evenly' flex={0.8}>
								{navbarRoutes.map((route, index) => {
									return (
										<Link
											key={index}
											to={route.route}
											style={{ textDecoration: 'none' }}
										>
											<Row space={4} padding={2}>
												<FontAwesome5
													name={route.icon}
													size={24}
													color={'white'}
												/>
												<Heading
													style={{
														color: 'white',
													}}
												>
													{route.name}
												</Heading>
											</Row>
										</Link>
									);
								})}
							</Column>
							<Logo />
						</Column>
					</Row>
				</Column>
			</Row>
		</Center>
	);
};
