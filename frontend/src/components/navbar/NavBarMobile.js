import * as React from 'react';
import { Center, Heading, Box, Stack, Pressable, Button } from 'native-base';
import AboutUsIcon from '../../assets/images/AboutUsIcon';
import ScheduleIcon from '../../assets/images/ScheduleIcon';
import ActivitiesIcon from '../../assets/images/ActivitiesIcon';
import SpeakersIcon from '../../assets/images/SpeakersIcon';
//import Loginicon from 
import Logo from '../../assets/images/WhiteBGLogo';
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
});

export const Navbar = () => {

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
            icon: <LoginIcon />,
            route: '/Login',
        },
    ];

}