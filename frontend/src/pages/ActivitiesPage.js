import React from 'react';
import {
	Column,
	Text,
	Center,
	Stack,
	Heading,
	Pressable,
	Row,
	ChevronDownIcon,
	ChevronUpIcon,
} from 'native-base';

import theme from '../theme';
import { StyleSheet } from 'react-native';
import { useWindowDimensions } from 'react-native';
import responsiveWidth from '../utils/responsiveWidth';
import { Link } from '../router';

export default function ActivitiesPage() {
	var window = useWindowDimensions();
	var pageWidth = responsiveWidth(window, null, null, 0.85);
	var isScreenSmall = window.width < 850;

	const styles = StyleSheet.create({
		TextName: {
			fontWeight: '1000',
		},

		RectangleShapeViewAccordion: {
			borderTopRightRadius: 30,
			borderTopLeftRadius: 30,
			backgroundColor: theme.colors.medYellow[0],
			paddingHorizontal: 15,
			paddingVertical: 7,
		},

		RectangleShapeViewInformation: {
			backgroundColor: theme.colors.medYellow.pastel,
			borderBottomRightRadius: 30,
			borderBottomLeftRadius: 30,
			padding: 20,
		},

		textTitle: {
			fontWeight: '1000',
		},

		page: {
			width: pageWidth,
		},
	});
	var activitiesObject = [
		{
			name: 'Palestras',
			activities: [
				{
					name: 'Gamificação na Saúde',
					id: 3,
				},
				{
					name: 'Data Science em Medicina',
					id: 6,
				},
				{
					name: 'Engenharia e Neurociências',
					id: 7,
				},
				{
					name: 'Terapia Genética e Edição Genética',
					id: 10,
				},
			],
		},
		{
			name: 'Workshops',
			activities: [
				{
					name: 'Paving the way for personalised medicine: challenges of data science in healthcare',
					id: 4,
				},
				{
					name: 'Agile Project Management in Healthcare',
					id: 5,
				},
				{
					name: 'Breaking Down the Black Box: A Workshop on Responsible AI Development',
					id: 8,
				},
			],
		},
		{
			name: 'Sessões de Networking',
			activities: [
				{
					name: 'Networking - Dia 6',
					id: 1,
				},
				{
					name: 'Networking - Dia 8',
					id: 9,
				},
			],
		},
		{
			name: 'Sessões Alumni',
			activities: [
				{
					name: 'Sessão Alumni',
					id: 11,
				},
			],
		},
		{
			name: 'Outras',
			activities: [
				{
					name: 'Sessão de Boas-Vindas',
					id: 0,
				},
				{
					name: 'Pitch',
					id: 2,
				},
				{
					name: 'Sessão de Encerramento',
					id: 12,
				},
			],
		},
	];

	const [currentIndex, setCurrentIndex] = React.useState(null);
	return (
		<Column alignItems={'center'} py={'2.5%'}>
			<Stack
				justifyContent={'center'}
				direction={isScreenSmall ? 'column' : 'row'}
				space={25}
				style={styles.page}
			>
				<Column flex={0.7} space={currentIndex !== null ? 2 : 8}>
					{activitiesObject.map((object, index) => {
						if (currentIndex === null || currentIndex === index) {
							return (
								<Column key={index}>
									<Pressable
										onPress={() => {
											if (currentIndex === index) {
												setCurrentIndex(null);
											} else {
												setCurrentIndex(index);
											}
										}}
									>
										<Row
											justifyContent={'space-between'}
											alignItems={'center'}
											style={styles.RectangleShapeViewAccordion}
											borderBottomRadius={currentIndex === index ? 0 : 30}
										>
											<Heading style={styles.textTitle}>
												{object.name}
											</Heading>

											{currentIndex === index ? (
												<ChevronUpIcon
													size={5}
													style={{ color: theme.colors.dryBlue[0] }}
												/>
											) : (
												<ChevronDownIcon
													size={5}
													style={{ color: theme.colors.dryBlue[0] }}
												/>
											)}
										</Row>
									</Pressable>
									{currentIndex === index ? (
										<Column
											space={6}
											alignItems={'center'}
											style={styles.RectangleShapeViewInformation}
										>
											{object.activities.map((activity) => {
												return (
													<Link
														key={activity.id}
														to={'/Activity/' + String(activity.id)}
													>
														<Text
															fontWeight={'bold'}
															style={styles.textBody}
															size='md'
														>
															{activity.name}
														</Text>
													</Link>
												);
											})}
										</Column>
									) : (
										<></>
									)}
								</Column>
							);
						}
					})}
				</Column>
			</Stack>
		</Column>
	);
}
