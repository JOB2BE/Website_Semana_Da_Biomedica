import React from 'react';
import { Heading, Row, Pressable, HamburgerIcon, Column } from 'native-base';
import ScheduleIcon from '../../assets/images/ScheduleIcon';
import ActivitiesIcon from '../../assets/images/ActivitiesIcon';
import SpeakersIcon from '../../assets/images/SpeakersIcon';
import Icon from 'react-native-vector-icons/AntDesign';
import Logo from '../../assets/images/WhiteBGLogo';
import theme from '../../theme';
import { StyleSheet, useWindowDimensions } from 'react-native';
import { Link } from '../../router/index';
import * as Localization from 'expo-localization'; //Internationalisation dependencies
import { I18n } from 'i18n-js';
import { en, pt } from '../../utils/supportedLanguages';

import responsiveHeight from '../../utils/responsiveHeight';
import responsiveWidth from '../../utils/responsiveWidth';

var idiom = new I18n();
idiom.enableFallback = true; //If a key is missing the default language will be chosen for that string in the webpage
idiom.translations = { en, pt }; // All our languages
idiom.locale = Localization.locale; // get the device's current language code

export const NavBarMobile = ({navbarRoutes}) => {
	var window = useWindowDimensions();
	var paddingBox = responsiveHeight(window, null, null, 0.1);
	const [open, setOpen] = React.useState(false);

	const styles = StyleSheet.create({
		menu: {
			borderBottomRightRadius: 15,
			backgroundColor: theme.colors.medYellow[0],
			padding: 10,
		},
		textTitle: {
			color: 'white',
		},
		root: {
			position: 'fixed',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			zIndex: 2,
		},
	});
	return (
		<Column flex={1} style={styles.root}>
			<Row flex={open && 1}>
				<Column flex={true} style={styles.menu} space={30}>
					<Pressable
						onPress={() => {
							setOpen(!open);
						}}
					>
						<Row>
							<HamburgerIcon size={30} color='white'></HamburgerIcon>
						</Row>
					</Pressable>

					{open && (
						<Row flex={1}>
							<Column alignItems='center' flex={1} justifyContent='space-evenly'>
								<Column justifyContent='space-evenly' flex={0.8}>
									<Pressable>
										<Link to={'/AboutUs'} style={{ textDecoration: 'none' }}>
											<Row space={4}>
												<FontAwesome5
													name='people-carry'
													size={24}
													color='black'
												/>
												<Heading style={styles.textTitle}>
													Sobre Nós
												</Heading>
											</Row>
										</Link>
									</Pressable>

									<Pressable>
										<Row>
											<Link
												to={'/Schedule'}
												style={{ textDecoration: 'none' }}
											>
												<ScheduleIcon size={24}></ScheduleIcon>
												<Heading style={styles.textTitle}>Horário</Heading>
											</Link>
										</Row>
									</Pressable>

									<Pressable>
										<Row>
											<Link
												to={'/Activities'}
												style={{ textDecoration: 'none' }}
											>
												<ActivitiesIcon size={24}></ActivitiesIcon>
												<Heading style={styles.textTitle}>
													Atividades
												</Heading>
											</Link>
										</Row>
									</Pressable>

									<Pressable>
										<Row>
											<Link
												to={'/Speakers'}
												style={{ textDecoration: 'none' }}
											>
												<SpeakersIcon size={24}></SpeakersIcon>
												<Heading style={styles.textTitle}>Oradores</Heading>
											</Link>
										</Row>
									</Pressable>

									<Pressable>
										<Row justifyContent={'space-between'} alignItems={'center'}>
											<Link to={'/Login'} style={{ textDecoration: 'none' }}>
												<Icon
													name='person-outline'
													size={24}
													color={'white'}
													style={{ position: 'absolute' }}
												/>
												<Heading style={styles.textTitle}>Login</Heading>
											</Link>
										</Row>
									</Pressable>
								</Column>
								<Logo />
							</Column>
						</Row>
					)}
				</Column>
			</Row>
		</Column>
	);
};
