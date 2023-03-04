import React from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import { Column, Row, Heading, View } from 'native-base';
import PartnerShipRow from '../components/information/PartnerShipRow';
import responsiveWidth from '../utils/responsiveWidth';
import StyledBox from '../components/information/StyledBox';
import theme from '../theme';

export default function PartnershipsPage() {
	var window = useWindowDimensions();
	var imageRadius = responsiveWidth(window, 100, 300, 0.1);
	var parternshipBoxWidth = responsiveWidth(window, null, null, 0.6);

	const styles = StyleSheet.create({
		text: {
			borderColor: theme.colors.medYellow[0],
			borderWidth: 5,
			shadowColor: theme.colors.dryBlue[0],
			shadowOffset: {
				width: 7,
				height: 7,
			},
			shadowRadius: 0.5,
			shadowOpacity: 0.7,
		},
		partnerRows: { width: parternshipBoxWidth },
	});

	const institutionalPartners = [
		{
			name: 'IST',
			companyImage: require('../assets/images/partners/logo_ist.svg'),
			url: 'https://tecnico.ulisboa.pt/',
		},
		{
			name: 'DBE',
			companyImage: require('../assets/images/partners/DBE_RGB.png'),
			url: 'https://dbe.tecnico.ulisboa.pt/',
		},
		{
			name: 'NEBM',
			companyImage: require('../assets/images/partners/Logo_NEBM.svg'),
			url: 'http://nebm.tecnico.ulisboa.pt/',
		},
	];

	const goldPartners = [
		{
			name: 'Accenture',
			companyImage: require('../assets/images/partners/accenture.png'),
			url: 'https://www.accenture.com/pt-pt',
		},
		{
			name: 'BNP Paribas',
			companyImage: require('../assets/images/partners/paribas.png'),
			url: 'https://www.bnpparibas.pt/en/',
		},
	];
	const basePartners = [
		{
			name: 'Glintt',
			companyImage: require('../assets/images/partners/glintt.png'),
			url: 'https://www.glintt.com/pt/Paginas/home.aspx',
		},
		{
			name: 'TeachforPortugal',
			companyImage: require('../assets/images/partners/TFP.png'),
			url: 'https://www.bnpparibas.pt/en/',
		},
		{
			name: 'ScientISST',
			companyImage: require('../assets/images/partners/scientisst.png'),
			url: 'https://www.scientisst.com/',
		},
		{
			name: 'Astrolabe',
			companyImage: require('../assets/images/partners/astrolabe.png'),
			url: 'https://astrolabe-medical.com/',
		},
	];

	const miscPartners = [
		{
			name: 'Fraunhofer Portugal AICOS',
			companyImage: require('../assets/images/partners/fraunhifer.svg'),
			url: 'https://www.aicos.fraunhofer.pt/en/home.html',
		},
		{
			name: 'iLof',
			companyImage: require('../assets/images/partners/ilof.jpg'),
			url: 'https://ilof.tech/',
		},
		{
			name: 'Celeiro',
			companyImage: require('../assets/images/partners/celeiro.webp'),
			url: 'https://www.celeiro.pt/',
		},
		{
			name: 'Paladin',
			companyImage: require('../assets/images/partners/paladin.png'),
			url: 'https://www.paladin.pt/pt-pt',
		},
		{
			name: 'Shaeco',
			companyImage: require('../assets/images/partners/shaeco.png'),
			url: 'https://www.shaecoshop.com/pt/',
		},
		{
			name: 'Sumol + Compal',
			companyImage: require('../assets/images/partners/sumol+compal.svg'),
			url: 'https://sumolcompal.pt/',
		},
		{
			name: 'Haribo',
			companyImage: require('../assets/images/partners/haribo.png'),
			url: 'https://www.haribo.com/pt-pt',
		},

		{
			name: 'Nestlé',
			companyImage: require('../assets/images/partners/nestle.png'),
			url: 'https://empresa.nestle.pt/',
		},
		{
			name: 'Odisseias',
			companyImage: require('../assets/images/partners/odisseias.png'),
			url: 'https://www.odisseias.com/',
		},
		{
			name: 'Nicola Cafés',
			companyImage: require('../assets/images/partners/nicola.png'),
			url: 'https://nicola.pt/',
		},
		{
			name: 'Luso',
			companyImage: require('../assets/images/partners/luso.png'),
			url: 'https://www.aguadeluso.pt/pt/',
		},
		{
			name: 'Bhout',
			companyImage: require('../assets/images/partners/bhout.png'),
			url: 'https://www.bhoutboxingclub.com/',
		},
		{
			name: 'Red Bull',
			companyImage: require('../assets/images/partners/redbull.svg'),
			url: 'https://www.redbull.com/pt-pt/',
		},
		{
			name: 'Tetley',
			companyImage: require('../assets/images/partners/tetley.png'),
			url: 'https://www.tetley.pt/',
		},
		// {
		// 	name: 'Saborosa',
		// 	companyImage: require('../assets/images/partners/saborosa.png'),
		// 	url: 'https://saborosa.pt/',
		// },
	];
	// const LogoIst = require('../assets/images/logo_ist.svg');
	// const LogoNEBM = require('../assets/images/Logo_NEBM.svg');

	return (
		<Column
			space={20}
			justifyContent={'center'}
			alignItems={'center'}
			alignContent={'center'}
			py={'2.5%'}
		>
			<StyledBox style={styles.text}>
				<Heading>Parceiros Institucionais</Heading>
			</StyledBox>

			<PartnerShipRow
				justifyContent={'center'}
				alignItems={'center'}
				space={10}
				containerRadius={imageRadius}
				objects={institutionalPartners}
				style={styles.partnerRows}
			></PartnerShipRow>

			<StyledBox style={styles.text}>
				<Heading>Parceiros Gold</Heading>
			</StyledBox>

			<PartnerShipRow
				justifyContent={'center'}
				alignItems={'center'}
				space={10}
				containerRadius={imageRadius}
				objects={goldPartners}
				style={styles.partnerRows}
			></PartnerShipRow>

			<StyledBox style={styles.text}>
				<Heading>Parceiros de Base e Giveaways</Heading>
			</StyledBox>

			<PartnerShipRow
				justifyContent={'center'}
				alignItems={'center'}
				space={10}
				containerRadius={imageRadius}
				objects={basePartners}
				style={styles.partnerRows}
			></PartnerShipRow>

			<StyledBox style={styles.text}>
				<Heading>Cattering e Atividades</Heading>
			</StyledBox>

			<PartnerShipRow
				justifyContent={'center'}
				alignItems={'center'}
				space={10}
				containerRadius={imageRadius}
				objects={miscPartners}
				style={styles.partnerRows}
			></PartnerShipRow>
		</Column>
	);
}
