import React from 'react'
import {Text} from 'react-native';
import fontInter from '../assets/fonts/Inter-Regular.ttf';

const borderStroke = 2
const buttonTopBottomMargin = 16
const cornerRadius = 25
const iconHeight = 22
const iconWidth = 22
const textLeftRightPadding = 24
const textTopBottomPadding = 18

const colorStyles = {
    dkBlue: '#2d6793',
    ltBlue: '#527f9e',
    ltGrey: '#c0c0c0',
    yellow: '#fdba35',
}

const textStyles = {
    base:   {fontSize: 12, fontWeight: 'bold', font: fontInter, color: colorStyles.dkBlue},
    button: {fontSize: 12, fontWeight: 'bold', font: fontInter, color: colorStyles.yellow},
    title:  {fontSize: 15, fontWeight: 'bold', font: fontInter, color: colorStyles.yellow},
}

const styles = {
    mainContainer: {
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
    },
    header: {
        backgroundColor: colorStyles.ltBlue,
        border: `${borderStroke}px solid ${colorStyles.dkBlue}`,
        borderBottom: `0px solid ${colorStyles.dkBlue}`,
        borderTopLeftRadius: `${cornerRadius}px`,
        borderTopRightRadius: `${cornerRadius}px`,
        display: 'flex',
        justifyContent: 'center',
        padding: `${textTopBottomPadding}px ${textLeftRightPadding}px`,
    },
    bodyContainer: {
        backgroundColor: colorStyles.ltGrey,
        border: `${borderStroke}px solid ${colorStyles.dkBlue}`,
        borderBottomLeftRadius: `${cornerRadius}px`,
        borderBottomRightRadius: `${cornerRadius}px`,
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        height: '100%',
        padding: `${textTopBottomPadding}px ${textLeftRightPadding}px`,
    },
    iconContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    icon: {
        height: `${iconHeight}px`,
        width: `${iconWidth}px`,
    },
    buttonLink: {
        display: 'flex',
        justifyContent: 'center',
        textDecoration: 'none'
    },
    button: {
        backgroundColor: colorStyles.dkBlue,
        border: `${borderStroke}px solid ${colorStyles.dkBlue}`,
        borderRadius: '999999px',
        margin: `${buttonTopBottomMargin}px`
    }
}

export default function ThemeCard({title, description, icon, buttonText, buttonRef}) {
    return (
        <div className={'MainContainer'}
             style={styles.mainContainer}>
            <div className={'Header'}
                 style={styles.header}>
                <Text style={textStyles.title}> {title} </Text>
            </div>
            <div className={'BodyContainer'}
                 style={styles.bodyContainer}>
                <div className={'BodyText'}
                     style={{flexGrow: 1}}>
                    <Text style={textStyles.base}> {description} </Text>
                </div>
                <div className={'IconContainer'}
                     style={styles.iconContainer}>
                    <img src={icon} alt=""
                         style={styles.icon}/>
                </div>
            </div>
            <a className={'Button'}
               href={buttonRef}
               style={styles.buttonLink}>
                <button style={styles.button}>
                    <Text style={textStyles.button}> {buttonText} </Text>
                </button>
            </a>
        </div>
    );
}