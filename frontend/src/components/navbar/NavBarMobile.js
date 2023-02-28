import React from 'react';
import { Heading, Row, HamburgerIcon, Column } from 'native-base';
import Logo from '../../assets/images/WhiteBGLogo';
import theme from '../../theme';
import { StyleSheet, useWindowDimensions } from 'react-native';
import { Link } from '../../router/index';
import * as Localization from 'expo-localization'; //Internationalisation dependencies
import { I18n } from 'i18n-js';
import { en, pt } from '../../utils/supportedLanguages';
import responsiveHeight from '../../utils/responsiveHeight';
import { FontAwesome5 } from '@expo/vector-icons';
var idiom = new I18n();
idiom.enableFallback = true; //If a key is missing the default language will be chosen for that string in the webpage
idiom.translations = { en, pt }; // All our languages
idiom.locale = Localization.locale; // get the device's current language code

export const NavBarMobile = ({ navbarRoutes }) => {
	var window = useWindowDimensions();
	var paddingBox = responsiveHeight(window, null, null, 0.1);
	const [open, setOpen] = React.useState(false);
	const [currentIndex, setCurrentIndex] = React.useState(null);

	const styles = StyleSheet.create({
		menu: {
			borderBottomRightRadius: 15,
			borderBottomLeftRadius: 15,
			backgroundColor: theme.colors.medYellow[0],
			padding: 10,
			shadowColor: '#000',
			shadowOffset: {
				width: 0,
				height: 2,
			},
			shadowOpacity: 0.34,
			shadowRadius: 6.27,
			elevation: 10,
		},
		textTitle: {
			color: 'white',
		},
		root: {
			position: 'sticky',
		},
	});
	return (
		<Column flex={1} style={styles.root}>
			<Row>
				<Column
					flex={'auto'}
					style={styles.menu}
					space={30}
					justifyContent='center'
					alignItems={'center'}
				>
					<Link to={'/MobileDrawer'} style={{ textDecoration: 'none' }}>
						<Row justifyContent='center' alignItems={'center'}>
							<Heading style={{ color: 'white' }}>Menu</Heading>
							<HamburgerIcon size={30} color='white'></HamburgerIcon>
						</Row>
					</Link>
				</Column>
			</Row>
		</Column>
	);
};
