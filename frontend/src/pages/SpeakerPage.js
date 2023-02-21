import React from "react";
import { Column, Row, Text, Image, View } from "native-base";
import extendTheme from '../theme';
import { StyleSheet, TouchableOpacity } from "react-native";
import ActivitiesIcon from '../assets/images/ActivitiesIcon';
//import ArrowIcon from '../assets/images/seta_azul'

const dataArray = [
    { category: "Curriculum Vitae", subCategories: ["É doutorado em engenharia pela RWTH Aachen University e MBA do The LisbonMBA (NOVA SBE + Católica SBE). Desenvolveu trabalhos na área de imagem molecular quantitativa (MR-PET) do cérebro, em pequenos animais e humanos, utilizando analítica avançada no Forschungszentrum Jülich da Helmholtz Association. Atualmente é diretor adjunto da Learning Health, responsável pela área de investigação, com foco em inteligência artificial e sistemas complexos aplicados à saúde.",] },
    { category: "Participação na JOB2BE", subCategories: ["Nuno André da Silva fará parte da ...",] },
    { category: "Contactos", subCategories: ["e-mail: blabla@gmail.com", "local: Hospital da Luz", "contacto telefónico: 967777777"] }
];

export default function AccordionExample() {

    var speaker = require('../assets/images/speaker_NunoSilva.svg')

    const styles = StyleSheet.create({
        container: {
            flexGrow: 1,
            justifyContent: 'center',
            alignContent: 'center',
        },

        RectangleShapeViewSpeaker: {
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

        RectangleShapeViewAccordion: {
            flexGrow: 1,
            width: 836,
            height: 91,
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            backgroundColor: extendTheme.colors['cream'],
            marginBottom: 44,
            marginTop: 22,
            marginLeft: 20,
            alignItems: 'left',
            padding: 20,
            justifyContent: 'center',
            alignSelf: 'center',
        },

        RectangleShapeViewInformation: {
            flexGrow: 1,
            backgroundColor: 'white',
            marginTop: -44,
            marginBottom: 22,
            marginLeft: 20,
            width: 836,
            padding: 20,
            borderBottomRightRadius: 30,
            borderBottomLeftRadius: 30,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'left',
        },

        cardContainer: {
            flexGrow: 1,
        },

        textTitle: {
            fontWeight: '1000',
            color: extendTheme.colors.dryBlue['0'],
            fontSize: 30,
            alignItems: 'center',
            alignContent: 'center',
            justifyContent: 'center',
            margimBottom: 50,
        },

        textBody: {
            fontSize: 20,
            lineHeight: 20 * 1.5,
            textAlign: 'center',
            color: extendTheme.colors['dryBlue[0]'],
        },
    });

    const [currentIndex, setCurrentIndex] = React.useState(null);
    return (
        <Column flex={2} space={10}>
            <Row justifyContent={'center'} style={styles.container}>
                <View style={styles.RectangleShapeViewSpeaker}>
                    <View style={styles.CircleShapeViewOut}>
                        <Image source={speaker} style={styles.CircleShapeViewIn}></Image>
                    </View>
                    <Text style={styles.TextName}> Nuno André da Silva </Text>
                </View>

                <View>
                    {dataArray.map(({ category, subCategories }, index) => {
                        return <TouchableOpacity
                            key={category}
                            onPress={() => {
                                setCurrentIndex(index === currentIndex ? null : index);
                            }}
                            style={StyleSheet.cardContainer}
                            activeOpacity={1}
                        >
                            <View style={styles.RectangleShapeViewAccordion}>
                                <Text style={styles.textTitle}>{category}</Text>
                                {ActivitiesIcon}
                            </View>

                            {index === currentIndex && (
                                <View style={styles.RectangleShapeViewInformation}>
                                    {subCategories.map((subCategory) => (
                                        <Text key={subCategory} style={styles.textBody}>
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
