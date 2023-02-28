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
		{ name: 'Palestras', activities: [{ name: 'placeholder', id: 0 }] },
		{ name: 'Workshops', activities: [{ name: 'placeholder', id: 0 }] },
		{ name: 'Sessões de Networking', activities: [{ name: 'placeholder', id: 0 }] },
		{ name: 'Sessões Alumni', activities: [{ name: 'placeholder', id: 0 }] },
		{ name: 'Outras', activities: [{ name: 'placeholder', id: 0 }] },
	];

	const [currentIndex, setCurrentIndex] = React.useState(null);
	return (
		<Column flex={1} alignItems={'center'} py={'2.5%'}>
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
										<Center style={styles.RectangleShapeViewInformation}>
											{object.activities.map((activity) => {
												return (
													<Link
														key={activity.id}
														to={'Activity/' + String(activity.id)}
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
										</Center>
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
