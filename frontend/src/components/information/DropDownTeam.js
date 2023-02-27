import React from 'react';
import { StyleSheet } from 'react-native';
import { Row, Heading, Column, ChevronDownIcon, ChevronUpIcon, Text, Center } from 'native-base';
import PropTypes from 'prop-types';
import theme from '../../theme';
import UserRow from './UserRow';
import RoundBorderedImage from './RoundBorderedImage';
import { useWindowDimensions } from 'react-native';
import responsiveWidth from '../../utils/responsiveWidth';

export default function DropDownTeam(props) {
	var currentIndex = props.index;
	var window = useWindowDimensions();
	var imageRadius = responsiveWidth(window, 100, 300, 0.1);
	var parternshipBoxWidth = responsiveWidth(window, null, null, 0.6);
	const styles = StyleSheet.create({
		heading: {
			color: theme.colors.dryBlue[0],
		},
		userRow: { width: parternshipBoxWidth },
	});
	//fill in with team data after queries
	const teams = [
		{
			name: 'Presidência',
			elements: [
				{
					name: 'John Doe',
					id: 1,
					profileImage: require('../../assets/images/WhiteBGLogo.svg'),
				},
			],
		},
		{
			name: 'Departamento de Tech',
			elements: [{}],
			title: 'Cordenador',
			subelements: [],
			subtitle: 'Colaboradores',
		},
		{
			name: 'Departamento de Design',
			elements: [],
			title: 'Cordenador',
			subelements: [],
			subtitle: 'Colaboradores',
		},
		{
			name: 'Departamento de Media',
			elements: [],
			title: 'Cordenador',
			subelements: [],
			subtitle: 'Colaboradores',
		},
		{
			name: 'Departamento de Logística',
			elements: [],
			title: 'Cordenador',
			subelements: [],
			subtitle: 'Colaboradores',
		},
		{
			name: 'Departamento de Research',
			elements: [],
			title: 'Cordenador',
			subelements: [],
			subtitle: 'Colaboradores',
		},
		{
			name: 'Departamento de Partnerships',
			elements: [],
			title: 'Cordenador',
			subelements: [],
			subtitle: 'Colaboradores',
		},
	];

	return (
		<Row flex={1} flexWrap={'wrap'}>
			<Column flex={1}>
				<Row justifyContent={'space-between'} alignItems={'center'}>
					<Heading font style={styles.heading}>
						{props.year}
					</Heading>

					{currentIndex === 0 ? (
						<ChevronUpIcon size={5} style={{ color: theme.colors.dryBlue[0] }} />
					) : (
						<ChevronDownIcon size={5} style={{ color: theme.colors.dryBlue[0] }} />
					)}
				</Row>

				{currentIndex === 0 ? (
					<Column space={250} py={'2.5%'}>
						{teams.map((team, index) => {
							return (
								<Column
									justifyContent={'center'}
									alignItems={'center'}
									space={7}
									key={index}
								>
									<Heading size={'sm'}> {team.name} </Heading>
									{team.name === 'Presidência' ? (
										<UserRow
											objects={team.elements}
											containerRadius={imageRadius}
											justifyContent={'center'}
											alignItems={'center'}
											style={styles.userRow}
										></UserRow>
									) : (
										<>
											<Text size={'md'}> {team.title} </Text>
											<UserRow
												objects={team.elements}
												containerRadius={imageRadius}
												justifyContent={'center'}
												alignItems={'center'}
												style={styles.userRow}
											></UserRow>
											<Text size={'md'}>{team.subtitle}</Text>
											<UserRow
												objects={team.subelements}
												containerRadius={imageRadius}
												justifyContent={'center'}
												alignItems={'center'}
												style={styles.userRow}
											></UserRow>
										</>
									)}
								</Column>
							);
						})}
					</Column>
				) : (
					<></>
				)}
			</Column>
		</Row>
	);
}

DropDownTeam.propTypes = {
	year: PropTypes.string,
	team: PropTypes.object,
};
DropDownTeam.defaultProps = {
	team: {},
	index: null,
};
