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
import { Hidden } from 'native-base';
import theme from '../theme';
import { StyleSheet } from 'react-native';
import { useWindowDimensions } from 'react-native';
import responsiveWidth from '../utils/responsiveWidth';
import StyledBox from '../components/information/StyledBox';

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
							<Row
								justifyContent={'space-between'}
								alignItems={'center'}
								style={styles.RectangleShapeViewAccordion}
								borderBottomRadius={currentIndex === 0 ? 0 : 30}
							>
								<Heading style={styles.textTitle}>Lectures</Heading>

								{currentIndex === 0 ? (
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
						{currentIndex === 0 ? (
							<Center style={styles.RectangleShapeViewInformation}>
								<Text style={styles.textBody} size='md'>
									This is about the lectures!
								</Text>
							</Center>
						) : (
							<></>
						)}
					</Column>
					<Column>
						<Pressable
							onPress={() => {
								if (currentIndex === 1) {
									setCurrentIndex(null);
								} else {
									setCurrentIndex(1);
								}
							}}
						>
							<Row
								justifyContent={'space-between'}
								alignItems={'center'}
								style={styles.RectangleShapeViewAccordion}
								borderBottomRadius={currentIndex === 1 ? 0 : 30}
							>
								<Heading style={styles.textTitle}>Workshops</Heading>

								{currentIndex === 1 ? (
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
						{currentIndex === 1 ? (
							<Center style={styles.RectangleShapeViewInformation}>
								<Text style={styles.textBody} size='md'>
									This is to present the workshops!
								</Text>
							</Center>
						) : (
							<></>
						)}
					</Column>
					<Column>
						<Pressable
							onPress={() => {
								if (currentIndex === 2) {
									setCurrentIndex(null);
								} else {
									setCurrentIndex(2);
								}
							}}
						>
							<Row
								justifyContent={'space-between'}
								alignItems={'center'}
								style={styles.RectangleShapeViewAccordion}
								borderBottomRadius={currentIndex === 2 ? 0 : 30}
							>
								<Heading style={styles.textTitle}>Networking Sessions</Heading>

								{currentIndex === 2 ? (
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
						{currentIndex === 2 ? (
							<Center style={styles.RectangleShapeViewInformation}>
								<Text style={styles.textBody} size='md'>
									This is about the Networking Sessions!
								</Text>
							</Center>
						) : (
							<></>
						)}
					</Column>
					<Column>
						<Pressable
							onPress={() => {
								if (currentIndex === 3) {
									setCurrentIndex(null);
								} else {
									setCurrentIndex(3);
								}
							}}
						>
							<Row
								justifyContent={'space-between'}
								alignItems={'center'}
								style={styles.RectangleShapeViewAccordion}
								borderBottomRadius={currentIndex === 3 ? 0 : 30}
							>
								<Heading style={styles.textTitle}>Alumni Sessions</Heading>

								{currentIndex === 3 ? (
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
						{currentIndex === 3 ? (
							<Center style={styles.RectangleShapeViewInformation}>
								<Text style={styles.textBody} size='md'>
									This is about the Alumni Sessions!
								</Text>
							</Center>
						) : (
							<></>
						)}
					</Column>
					<Column>
						<Pressable
							onPress={() => {
								if (currentIndex === 4) {
									setCurrentIndex(null);
								} else {
									setCurrentIndex(4);
								}
							}}
						>
							<Row
								justifyContent={'space-between'}
								alignItems={'center'}
								style={styles.RectangleShapeViewAccordion}
								borderBottomRadius={currentIndex === 4 ? 0 : 30}
							>
								<Heading style={styles.textTitle}>Others</Heading>

								{currentIndex === 4 ? (
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
						{currentIndex === 4 ? (
							<Center style={styles.RectangleShapeViewInformation}>
								<Text style={styles.textBody} size='md'>
									This is for other things ...
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
