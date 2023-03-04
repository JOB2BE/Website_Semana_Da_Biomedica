import React from 'react';
import { StyleSheet } from 'react-native';
import { Row, Heading, Column, ChevronDownIcon, ChevronUpIcon, Text, Center } from 'native-base';
import PropTypes from 'prop-types';
import theme from '../../theme';
import UserRow from './UserRow';
import { useWindowDimensions } from 'react-native';
import responsiveWidth from '../../utils/responsiveWidth';
import { colabs } from '../../assets/objects/colabObjects';
export default function DropDownTeam(props) {
	var currentIndex = props.index;
	var window = useWindowDimensions();
	var imageRadius = responsiveWidth(window, 150, 300, 0.1);
	var parternshipBoxWidth = responsiveWidth(window, null, null, 0.6);

	// colabs.forEach((colab, index) => {
	// 	colab['id'] = index;
	// });
	// console.log(colabs);
	// Run this when new colabs are added to the file to atribute new ids, or insert them manually by incrementation

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
				{ id: 26, name: 'Irina Lopes' },
				{ id: 34, name: 'João Brázia' },
				{ id: 10, name: 'Alexandra Bob' },
			],
		},
		{
			name: 'Departamento de Tech',
			elements: [{ id: 33, name: 'Miguel Dinis de Sousa' }],
			title: 'Cordenador',
			subelements: [
				{
					name: 'David Fontoura',
					id: 0,
				},
				{
					name: 'Maria Pereira',
					id: 13,
				},
				{
					name: 'Isabel Campagnolo',
					id: 35,
				},
			],
			subtitle: 'Colaboradores',
		},
		{
			name: 'Departamento de Design',
			elements: [
				{
					name: 'Maria Louro',
					id: 4,
				},
			],
			title: 'Cordenador',
			subelements: [
				{
					name: 'Ana Alfaiate',
					id: 9,
				},
				{
					name: 'Raquel Coelho',
					id: 29,
				},
				{
					name: 'Tomás Serra',
					id: 36,
				},
			],
			subtitle: 'Colaboradores',
		},
		{
			name: 'Departamento de Media',
			elements: [
				{
					name: 'Carolina Ruas',
					id: 20,
				},
			],
			title: 'Cordenador',
			subelements: [
				{
					name: 'Beatriz Martins',
					id: 8,
				},
				{
					name: 'Martina Machado',
					id: 12,
				},
				{
					name: 'Inês Mabutana',
					id: 15,
				},
				{
					name: 'Beatriz Martins',
					id: 19,
				},
			],
			subtitle: 'Colaboradores',
		},
		{
			name: 'Departamento de Logística',
			elements: [
				{
					name: 'Tiago Engenheiro',
					id: 11,
				},
			],
			title: 'Cordenador',
			subelements: [
				{
					name: 'Marta Alves',
					id: 2,
				},
				{
					name: 'Joana Andrade',
					id: 14,
				},
				{
					name: 'Filipa Araújo',
					id: 16,
				},
				{
					name: 'João Mata',
					id: 27,
				},
				{
					name: 'João Freitas',
					id: 31,
				},
			],
			subtitle: 'Colaboradores',
		},
		{
			name: 'Departamento de Research',
			elements: [
				{
					name: 'Daniela Ferreira',
					id: 17,
				},
			],
			title: 'Cordenador',
			subelements: [
				{
					name: 'André Pestana',
					id: 21,
				},
				{
					name: 'Mariana Oliveira',
					id: 3,
				},
				{
					name: 'Mafalda Carreira',
					id: 5,
				},
				{
					name: 'Letícia Sousa',
					id: 6,
				},
				{
					name: 'Isabel Encarnação',
					id: 7,
				},
				{
					name: 'Beatriz Martins',
					id: 18,
				},
			],
			subtitle: 'Colaboradores',
		},
		{
			name: 'Departamento de Partnerships',
			elements: [
				{
					name: 'Tomás Inácio',
					id: 32,
				},
				{
					name: 'Beatriz Saragoça',
					id: 23,
				},
			],
			title: 'Cordenador',
			subelements: [
				{
					name: 'Matilde Correia',
					id: 1,
				},
				{
					name: 'Ana Silva',
					id: 24,
				},
				{
					name: 'Francisco Neves da Silva',
					id: 25,
				},
				{
					name: 'Maria Pio',
					id: 28,
				},
				{
					name: 'Laura Barradas',
					id: 30,
				},
			],
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
