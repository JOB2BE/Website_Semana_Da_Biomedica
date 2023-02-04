import React from 'react'
import {Text} from 'react-native'
import fontInter from '../assets/fonts/Inter-Regular.ttf';

const borderStroke = 2
const cornerRadius = 25
const pillLeftRightPadding= 35
const pillTopBottomPadding = 6
const shadowSize = 5
const textLeftRightPadding = 20
const textTopBottomPadding = 15
const titleTypeGap = 20

const colorStyles = {
    greeen: '#357d34',
    dkblue: '#2d6793',
    ltblue: '#527f9e',
    ltgrey: '#c0c2f3',
    whiite: '#ffffff',
    yellow: '#fdba35',

}

const textStyles = {
    title:    {fontSize: 35, fontWeight: 'bold', font: fontInter, color: colorStyles.dkblue},
    subtitle: {fontSize: 20, fontWeight: 'bold', font: fontInter, color: colorStyles.dkblue},
    type:     {fontSize: 18, fontWeight: 'bold', font: fontInter, color: colorStyles.whiite},
    base:     {fontSize: 18, fontWeight: 'bold', font: fontInter, color: colorStyles.ltblue},
    name:     {fontSize: 18, fontWeight: 'bold', font: fontInter, color: colorStyles.ltblue,
               textDecorationLine: 'underline'},
}

const styles = {
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
    },
    headerContainer: {
        alignItems: 'center',
        backgroundColor: colorStyles.yellow,
        borderTopLeftRadius: `${cornerRadius}px`,
        borderTopRightRadius: `${cornerRadius}px`,
        display: 'flex',
        gap: `${titleTypeGap}px`,
        padding: `${textTopBottomPadding}px ${textLeftRightPadding}px`
    },
    typePill: {
        backgroundColor: colorStyles.ltgrey,
        border: `${borderStroke}px solid ${colorStyles.greeen}`,
        borderRadius: '999999px',
        boxShadow: `0px ${shadowSize}px ${shadowSize}px 0px rgba(0,0,0,0.25)`,
        padding: `${pillTopBottomPadding}px ${pillLeftRightPadding}px`,
    },
    body: {
        backgroundColor: colorStyles.whiite,
        border: `${borderStroke}px solid ${colorStyles.yellow}`,
        borderBottomLeftRadius: `${cornerRadius}px`,
        borderBottomRightRadius: `${cornerRadius}px`,
        boxShadow: `0px ${shadowSize}px ${shadowSize}px 0px rgba(0,0,0,0.25)`,
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        justifyContent: 'space-around',
        padding: `${textTopBottomPadding}px ${textLeftRightPadding}px`
    },
}

export default function Activity({title, type, speaker, description, requirements, schedule}) {
    return (
        <div className={'MainContainer'}
             style={styles.mainContainer}>
            <div className={'HeaderContainer'}
                style={styles.headerContainer}>

                <Text style={textStyles.title}> {title} </Text>

                <div className={'TypePill'}>
                    <button
                        style={styles.typePill}>
                        <Text style={textStyles.type}> {type} </Text>
                    </button>
                </div>

            </div>
            <div className={'Body'}
                style={styles.body}>

                <div>
                    <Text style={textStyles.subtitle}> Instrutor/Palestrante: </Text>
                    <Text style={textStyles.name}>{speaker}</Text>
                </div>

                <div>
                    <Text style={textStyles.subtitle}> Descrição:
                    </Text> <br/>
                    <Text style={textStyles.base}> {description}
                    </Text>
                </div>

                <div>
                    <Text style={textStyles.subtitle}> Pré-Requisitos:
                    </Text> <br/>
                    <Text style={textStyles.base}> {requirements}
                    </Text>
                </div>

                <div>
                    <Text style={textStyles.subtitle}> Horário: </Text>
                    <Text style={textStyles.base}>{schedule}</Text>
                </div>

            </div>
        </div>
    );
}
