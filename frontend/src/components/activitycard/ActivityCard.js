import React from 'react';
import theme from '../../theme';
import { Row, Column, Text, Heading, Center, Button } from 'native-base';
import { Link } from '../../router';
import { StyleSheet } from 'react-native';
import ActivityBox from '../information/ActivityBox';
import { Link as NBLink } from 'native-base';

const white = '#ffffff';

// <ActivityCard
// 	title='Como Fazer uma Terapia Virtual com VR'
// 	type='Workshop'
// 	speaker='Estevão Trabalhos'
// 	description='Words words words words words words words words words words words words'
// 	requirements='Words words words words words'
// 	schedule='6 de Março 15h00, sala C01'
// />

export default function ActivityCard(props) {
	const styles = StyleSheet.create({
		aboutBox: {
			paddingVertical: '2.5%',
		},
		activityType: {
			backgroundColor: theme.colors.medYellow[0],
			borderRadius: 15,
			shadowColor: theme.colors.dryBlue[0],
			shadowOffset: {
				width: 2,
				height: 2,
			},
			shadowRadius: 0.5,
			shadowOpacity: 0.7,
			elevation: 10,
			padding: 10,
		},
		bold: {
			fontWeight: 'bold',
		},
		heading: {
			color: theme.colors.medYellow[0],
			flexWrap: 'wrap',
			flex: 1,
		},
	});
	return (
		<Column style={styles.aboutBox}>
			<Row justifyContent={'center'}>
				<ActivityBox
					flex={0.95}
					stackSpace={12}
					headingChildren={
						<Row justifyContent={'space-between'}>
							<Column flex={0.95}>
								<Heading size='md' style={styles.heading}>
									{props.title}
								</Heading>
							</Column>
							<Column>
								<Center style={styles.activityType}>
									<Text size='md' style={styles.bold}>
										{props.type}
									</Text>
								</Center>
							</Column>
						</Row>
					}
				>
					<Row>
						<Column>
							<Text size='md' style={styles.bold}>
								Instrutor(es)/Palestrante(s):
							</Text>
							{props.speakers.map((speaker, index) => {
								return (
									<Link
										key={index}
										to={'/Speaker/' + String(props.id) + '/' + String(index)}
									>
										<Text paddingLeft={3} size='md' fontWeight={'bold'}>
											{speaker.name}
										</Text>
									</Link>
								);
							})}
						</Column>
					</Row>
					<Row>
						<Column flex={1} flexWrap={'wrap'}>
							<Text size='md' style={styles.bold}>
								Descrição:
							</Text>
							<Text paddingLeft={3} size='md'>
								{props.description}
							</Text>
						</Column>
					</Row>

					{props.requirements && (
						<Row>
							<Column flexWrap={'wrap'}>
								<Text size='md' style={styles.bold}>
									Pré-Requisitos:
								</Text>
								<Text paddingLeft={3} size='md'>
									{props.requirements}
								</Text>
							</Column>
						</Row>
					)}

					<Row alignItems={'center'} space={4}>
						<Text size='md' style={styles.bold}>
							Horário:
						</Text>
						<Text size='md'>{props.schedule}</Text>
					</Row>
					{props.enrollmentLink && (
						<Row justifyContent={'center'}>
							<NBLink href={props.enrollmentLink}>
								<Button variant={'alternating'}>Inscreve-te!</Button>
							</NBLink>
						</Row>
					)}
				</ActivityBox>
			</Row>
		</Column>
	);
}
