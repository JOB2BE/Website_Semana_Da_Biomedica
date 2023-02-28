import React from "react";
import { Center, Heading, Box, Row, Pressable, Stack, HamburgerIcon, Button, Column } from 'native-base';
import { View } from 'react-native'
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

    rectangleCornerClose: {
        width: 80,
        height: 80,
        borderBottomRightRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        display: 'flex',
        backgroundColor: '#FDBA35',
    },

    rectangleCornerOpen: {
        width: 328,
        height: 80,
        //justifyContent: 'space-between',
        //alignItems: 'left',
        alignContent: 'center',

        backgroundColor: '#FDBA35',
        padding: 30,
    },

    rectangleOpen: {
        flex: '0.9',
        width: 328,
        height: 652,
        borderBottomRightRadius: 30,
        justifyContent: 'flex-end',
        alignItems: 'left',
        alignContent: 'left',
        textAlign: 'left',
        display: 'flex',
        backgroundColor: '#FDBA35',
        padding: 40,
    },

    textTitle: {
        size: 24,
        color: 'white',
        padding: 40,
    },

    textTitleBigger: {
        size: 60,
        color: 'white',
        padding: 40,
    }
});

export const NavBarMobile = () => {



    const [currentIndex, setCurrentIndex] = React.useState(null);

    return (
        <Column>
            <Pressable onPress={() => {
                if (currentIndex === 0) {
                    setCurrentIndex(null);
                } else {
                    setCurrentIndex(0);
                }
            }}>
                <Row
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    style={currentIndex === 0 ? styles.rectangleCornerOpen : styles.rectangleCornerClose}
                >
                    <HamburgerIcon size={60} color="white"></HamburgerIcon>
                    {currentIndex === 0 ? (
                        <Heading style={styles.textTitleBigger}>Menu</Heading>
                    ) : (
                        <></>
                    )}

                </Row>
            </Pressable>

            {currentIndex === 0 ? (
                <Center style={styles.rectangleOpen} >
                    <Pressable>
                        <Row justifyContent={'space-between'} alignItems={'center'}>
                            <Link to={'/AboutUs'} style={{ textDecoration: 'none' }}>
                                <AboutUsIcon size={24}></AboutUsIcon>
                                <Heading style={styles.textTitle}>Sobre Nós</Heading>
                            </Link>
                        </Row>
                    </Pressable>

                    <Pressable>
                        <Row justifyContent={'space-between'} alignItems={'center'}>
                            <Link to={'/Schedule'} style={{ textDecoration: 'none' }}>
                                <ScheduleIcon size={24}></ScheduleIcon>
                                <Heading style={styles.textTitle}>Horário</Heading>
                            </Link>
                        </Row>
                    </Pressable>

                    <Pressable>
                        <Row justifyContent={'space-between'} alignItems={'center'}>
                            <Link to={'/Activities'} style={{ textDecoration: 'none' }}>
                                <ActivitiesIcon size={24}></ActivitiesIcon>
                                <Heading style={styles.textTitle}>Atividades</Heading>
                            </Link>
                        </Row>
                    </Pressable>

                    <Pressable>
                        <Row justifyContent={'space-between'} alignItems={'center'}>
                            <Link to={'/Speakers'} style={{ textDecoration: 'none' }}>
                                <SpeakersIcon size={24}></SpeakersIcon>
                                <Heading style={styles.textTitle}>Oradores</Heading>
                            </Link>
                        </Row>
                    </Pressable>

                    <Pressable >
                        <Row justifyContent={'space-between'} alignItems={'center'}>
                            <Link to={'/Login'} style={{ textDecoration: 'none' }}>
                                <Icon name="person-outline" size={24} color={'white'}></Icon>
                                <Heading style={styles.textTitle}>Login</Heading>
                            </Link>
                        </Row>
                    </Pressable>
                </Center>
            ) : (
                <></>
            )}
        </Column>
    );
}