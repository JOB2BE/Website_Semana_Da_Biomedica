import React from "react";
import { Center, Heading, Box, Stack, Pressable, HamburgerIcon, Button } from 'native-base';
import { View, TouchableOpacity, Row } from 'react-native'
import AboutUsIcon from '../../assets/images/AboutUsIcon';
import ScheduleIcon from '../../assets/images/ScheduleIcon';
import ActivitiesIcon from '../../assets/images/ActivitiesIcon';
import SpeakersIcon from '../../assets/images/SpeakersIcon';
import Icon from 'react-native-vector-icons/AntDesign';
import Logo from '../../assets/images/WhiteBGLogo';
import { Menu } from 'native-base';
import { StyleSheet } from 'react-native';
import { Link } from '../../router/index';
import { useLocation } from 'react-router-dom';


import * as Localization from 'expo-localization'; //Internationalisation dependencies
import { I18n } from 'i18n-js';
import { en, pt } from '../../utils/supportedLanguages';
import theme from '../../theme';

var idiom = new I18n();
idiom.enableFallback = true; //If a key is missing the default language will be chosen for that string in the webpage
idiom.translations = { en, pt }; // All our languages
idiom.locale = Localization.locale; // get the device's current language code

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },

    rectangleCorner: {
        width: 80,
        height: 80,
        borderBottomRightRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        display: 'flex',
        backgroundColor: '#FDBA35',
    },

    rectangleOpen: {
        width: 328,
        height: 652,
        borderBottomRightRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        display: 'flex',
        backgroundColor: '#FDBA35',
    },

    rectangleSimple: {
        width: 328,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        display: 'flex',
        backgroundColor: '#FDBA35',
    }
});

export const NavBarMobile = () => {

    const [currentIndex, setCurrentIndex] = React.useState(null);

    const navbarRoutes = [
        {
            name: idiom.t(['navbarmobile', 'aboutUs']),
            icon: <AboutUsIcon />,
            route: '/AboutUs',
        },
        {
            name: idiom.t(['navbarmobile', 'schedule']),
            icon: <ScheduleIcon />,
            route: '/Schedule',
        },
        {
            name: idiom.t(['navbarmobile', 'activities']),
            icon: <ActivitiesIcon />,
            route: '/Activities',
        },
        {
            name: idiom.t(['navbarmobile', 'speakers']),
            icon: <SpeakersIcon />,
            route: '/Speakers',
        },
        {
            name: idiom.t(['navbarmobile', 'login']),
            icon: <Icon name="ios-person-circle-outline" size={30} color='white' style={{ position: 'absolute', right: 20 }} />,
            route: '/Login',
        },
    ];

    return (
        <Pressable style={styles.rectangleCorner}>
            <HamburgerIcon size={60} color="white"></HamburgerIcon>
        </Pressable>
    )
}