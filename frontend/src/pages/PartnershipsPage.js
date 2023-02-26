import React from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import { Column, Row, Heading, View } from 'native-base';
import PartnerShipRow from '../components/information/PartnerShipRow';
import responsiveWidth from '../utils/responsiveWidth';
import StyledBox from '../components/information/StyledBox';
import theme from '../theme';

export default function PartnershipsPage() {
	var window = useWindowDimensions();
	var imageRadius = responsiveWidth(window, 70, 300, 0.1);
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

	// Dummy objects that will be retrieved from the database
	const dummyObjects = [
		{
			id: 0,
			companyImage: require('../assets/images/logo_ist.svg'),
		},
		{
			id: 1,
			companyImage: require('../assets/images/logo_ist.svg'),
		},
		{
			id: 2,
			companyImage: require('../assets/images/logo_ist.svg'),
		},
		{
			id: 3,
			companyImage: require('../assets/images/logo_ist.svg'),
		},
		{
			id: 4,
			companyImage: require('../assets/images/logo_ist.svg'),
		},
		{
			id: 5,
			companyImage: require('../assets/images/logo_ist.svg'),
		},
		{
			id: 6,
			companyImage: require('../assets/images/logo_ist.svg'),
		},
		{
			id: 7,
			companyImage: require('../assets/images/logo_ist.svg'),
		},
		{
			id: 8,
			companyImage: require('../assets/images/logo_ist.svg'),
		},
		{
			id: 9,
			companyImage: require('../assets/images/logo_ist.svg'),
		},
		{
			id: 10,
			companyImage: require('../assets/images/logo_ist.svg'),
		},
	];
	// const LogoIst = require('../assets/images/logo_ist.svg');
	// const LogoNEBM = require('../assets/images/Logo_NEBM.svg');

	return (
		<Column
			flex={1}
			space={20}
			justifyContent={'center'}
			alignItems={'center'}
			alignContent={'center'}
			py={20}
		>
			<StyledBox style={styles.text}>
				<Heading>Institutional Partners</Heading>
			</StyledBox>

			<PartnerShipRow
				justifyContent={'center'}
				alignItems={'center'}
				space={10}
				containerRadius={imageRadius}
				objects={dummyObjects}
				style={styles.partnerRows}
			></PartnerShipRow>

			<StyledBox style={styles.text}>
				<Heading>Gold Partners</Heading>
			</StyledBox>

			<PartnerShipRow
				justifyContent={'center'}
				alignItems={'center'}
				space={10}
				containerRadius={imageRadius}
				objects={dummyObjects}
				style={styles.partnerRows}
			></PartnerShipRow>

			<StyledBox style={styles.text}>
				<Heading>Base and Giveway Partners</Heading>
			</StyledBox>

			<PartnerShipRow
				justifyContent={'center'}
				alignItems={'center'}
				space={10}
				containerRadius={imageRadius}
				objects={dummyObjects}
				style={styles.partnerRows}
			></PartnerShipRow>

			<StyledBox style={styles.text}>
				<Heading>Cattering and Activities</Heading>
			</StyledBox>

			<PartnerShipRow
				justifyContent={'center'}
				alignItems={'center'}
				space={10}
				containerRadius={imageRadius}
				objects={dummyObjects}
				style={styles.partnerRows}
			></PartnerShipRow>
		</Column>
	);
}
