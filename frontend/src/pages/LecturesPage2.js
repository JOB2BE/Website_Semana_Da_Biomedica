import React from 'react';
import {
	Column,
	Text,
	Center,
	Stack,
	Heading,
	Pressable,
	Row,
	Link,
	ChevronDownIcon,
	ChevronUpIcon,
} from 'native-base';
import theme from '../theme';
import { StyleSheet } from 'react-native';
import { useWindowDimensions } from 'react-native';
import responsiveWidth from '../utils/responsiveWidth';

export default function SpeakerPageDummy() {
	//var speaker = require('../assets/images/speaker_NunoSilva.svg');
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
					<Column>
						<Pressable
							onPress={() => {
								if (currentIndex === 0) {
									setCurrentIndex(null);
								} else {
									setCurrentIndex(0);
								}
							}}
						>
							{currentIndex === 0 ? (
								<Link to={'/Activities2'} style={{ textDecoration: 'none' }}></Link>
							) : (
								<></>
							)}
							<Row
								justifyContent={'space-between'}
								alignItems={'center'}
								style={styles.RectangleShapeViewAccordion}
								borderBottomRadius={currentIndex === null ? 0 : 30}
							>
								<Heading style={styles.textTitle}>Lectures</Heading>

								{currentIndex === null ? (
									<ChevronUpIcon
										size={5}
										style={{ color: theme.colors.dryBlue[0] }}
									/>
								) : (
									<ChevronDownIcon
										size={5}
										style={{ color: theme.colors.dryBlue[0] }}
									/>
									/*<Link to={'/Activities2'} style={{ textDecoration: 'none' }}>
										<ChevronDownIcon
											size={5}
											style={{ color: theme.colors.dryBlue[0] }}
										/>
									</Link>*/
								)}
							</Row>
						</Pressable>
						{currentIndex === null ? (
							<Center style={styles.RectangleShapeViewInformation}>
								<Text style={styles.textBody} size='md'>
									This is about the lectures!
								</Text>
							</Center>
						) : (
							<></>
						)}
					</Column>
				</Column>
			</Stack>
		</Column>
	);
}
