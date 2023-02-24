import React from 'react';
import { Column, Row } from 'native-base';
import StyledBox from '../components/information/StyledBox';
import theme from '../theme';
import { Link } from '../router/index';
import { Platform, StyleSheet } from 'react-native';

export default function ActivitiesPage() {
	const styles = StyleSheet.create({
		aboutBox: {
			paddingTop: '7%',
		},
	});

	return (
		<Row justifyContent={'center'} style={styles.aboutBox}>
			<Column flex={0.5} space={30}>
				<Link to={'/Lectures'} style={{ textDecoration: 'none' }}>
					<StyledBox
						flex={Platform.OS === ('ios' || 'android') ? 0.6 : 0.4}
						stackSpace={'30'}
						className={'LecturesContainer'}
						bg={theme.colors.medYellow}
						borderRadius={25}
						backgroundColor={theme.colors.medYellow[0]}
						headingText={'Lectures'} // can't get it in the center, the way it is on figma
						childrenJustifyContent={'center'}
					></StyledBox>
				</Link>
				<Link to={'/Workshops'} style={{ textDecoration: 'none' }}>
					<StyledBox
						flex={Platform.OS === ('ios' || 'android') ? 0.6 : 0.4}
						stackSpace={'30'}
						className={'WorkshopsContainer'}
						bg={theme.colors.medYellow}
						borderRadius={25}
						backgroundColor={theme.colors.medYellow[0]}
						headingText={'Workshops'} // can't get it in the center, the way it is on figma
						childrenJustifyContent={'center'}
					></StyledBox>
				</Link>
				<Link to={'/Networking'} style={{ textDecoration: 'none' }}>
					<StyledBox
						flex={Platform.OS === ('ios' || 'android') ? 0.6 : 0.4}
						stackSpace={'30'}
						className={'NetworkingContainer'}
						bg={theme.colors.medYellow}
						borderRadius={25}
						backgroundColor={theme.colors.medYellow[0]}
						headingText={'Networking Sessions'} // can't get it in the center, the way it is on figma
						childrenJustifyContent={'center'}
					></StyledBox>
				</Link>
				<Link to={'/AlumniSessions'} style={{ textDecoration: 'none' }}>
					<StyledBox
						flex={Platform.OS === ('ios' || 'android') ? 0.6 : 0.4}
						stackSpace={'30'}
						className={'AlumniSessionsContainer'}
						bg={theme.colors.medYellow}
						borderRadius={25}
						backgroundColor={theme.colors.medYellow[0]}
						headingText={'Alumni Sessions'} // can't get it in the center, the way it is on figma
						childrenJustifyContent={'center'}
					></StyledBox>
				</Link>
			</Column>
		</Row>
	);
}
