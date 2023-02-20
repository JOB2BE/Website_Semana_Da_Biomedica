import React, { Component } from "react";
import { Container, Column, Row, Text, Image, Header, Content, Accordion, View } from "native-base";
import extendTheme from '../theme';
import { StyleSheet, TouchableOpacity } from "react-native";

const dataArray = [
    { bg: extendTheme.colors['cream'], color: extendTheme.colors['dryBlue[0]'], category: "Curriculum Vitae", subCategories: ["Lorem ipsum dolor sit amet",] },
    { bg: extendTheme.colors['cream'], color: extendTheme.colors['dryBlue[0]'], category: "Participação na JOB2BE", subCategories: ["Lorem ipsum dolor sit amet",] },
    { bg: extendTheme.colors['cream'], color: extendTheme.colors['dryBlue[0]'], category: "Contactos", subCategories: ["Lorem ipsum dolor sit amet",] }
];

export default function AccordionExample() {

    var speaker = require('../assets/images/speaker_NunoSilva.svg')

    const styles = StyleSheet.create({
        container: {
            flexGrow: 1,
            justifyContent: 'center',
        },

        RectangleShapeViewLeft: {
            width: 260,
            height: 449.42,
            borderRadius: 30,
            backgroundColor: extendTheme.colors['cream'],
            marginTop: 20,
            marginBottom: 20,
            marginLeft: 20,
            alignItems: 'center',
            alignContent: 'center',
            display: 'flex',
        },

        CircleShapeViewOut: {
            width: 230,
            height: 230,
            borderRadius: 230 / 2,
            backgroundColor: extendTheme.colors['medYellow'],
            marginBottom: 50,
            marginTop: 50,
        },

        CircleShapeViewIn: {
            width: 210,
            height: 210,
            borderRadius: 210 / 2,
            backgroundColor: extendTheme.colors['cream'],
            position: 'absolute',
            left: (230 - 210) / 2,
            top: (230 - 210) / 2,
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
        },

        TextName: {
            fontWeight: '1000',
            color: extendTheme.colors.dryBlue['0'],
            fontSize: 30,
            backgroundColor: 'transparent',
            alignItems: 'center',
            textAlign: 'center',
            alignContent: 'center',
            justifyContent: 'center',
            margimBottom: 50,
        },

        TextTitle: {
            fontWeight: '1000',
            color: extendTheme.colors.dryBlue['0'],
            fontSize: 30,
            backgroundColor: 'transparent',
            alignItems: 'center',
            alignContent: 'center',
            justifyContent: 'center',
            margimBottom: 50,
        },

        RectangleShapeViewRight1: {
            flexGrow: 1,
            width: 836,
            height: 91,
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            //backgroundColor: extendTheme.colors['cream'],
            marginBottom: 44,
            marginTop: 22,
            marginLeft: 20,
            //marginLeft: 20,
            alignItems: 'left',
            padding: 20,
            //alignContent: 'left',
            justifyContent: 'center',
            alignSelf: 'center',
            //display: 'flex',
        },

        subCategoriesList: {
            flexGrow: 1,
            backgroundColor: 'white',
            marginTop: -44,
            marginBottom: 22,
            marginLeft: 20,
            width: 836,
            height: 361,
            borderBottomRightRadius: 30,
            borderBottomLeftRadius: 30,
            alignSelf: 'center',
        },

        cardContainer: {
            flexGrow: 1,
        },

        heading: {
            fontWeight: '1000',
            color: extendTheme.colors.dryBlue['0'],
            fontSize: 30,
            backgroundColor: 'transparent',
            alignItems: 'center',
            alignContent: 'center',
            justifyContent: 'center',
            margimBottom: 50,
        },

        body: {
            fontSize: 20,
            lineHeight: 20 * 1.5,
            textAlign: 'center',
        }
    });

    const [currentIndex, setCurrentIndex] = React.useState(null);
    return (
        <Column flex={2} space={10}>
            <Row justifyContent={'center'} style={styles.container}>
                <View style={styles.RectangleShapeViewLeft}>
                    <View style={styles.CircleShapeViewOut}>
                        <Image source={speaker} style={styles.CircleShapeViewIn}></Image>
                    </View>
                    <Text style={styles.TextName}> Nuno André da Silva </Text>
                </View>
                <View >
                    {dataArray.map(({ bg, color, category, subCategories }, index) => {
                        return <TouchableOpacity
                            key={category}
                            onPress={() => {
                                setCurrentIndex(index === currentIndex ? null : index);
                            }}
                            style={StyleSheet.cardContainer}
                            activeOpacity={0.9}
                        >
                            <View style={[styles.RectangleShapeViewRight1, { backgroundColor: bg }]}>
                                <Text style={[styles.heading, { color }]}>{category}</Text>
                            </View>
                            {index === currentIndex && (

                                <View style={styles.subCategoriesList}>
                                    {subCategories.map((subCategory) => (
                                        <Text key={subCategory} style={[styles.body, { color }]}>
                                            {subCategory}
                                        </Text>
                                    ))}
                                </View>
                            )}

                        </TouchableOpacity>
                    })}
                </View>

            </Row>
        </Column>
    );


}