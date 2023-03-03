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
import RoundBorderedImage from '../components/information/RoundBorderedImage';
import StyledBox from '../components/information/StyledBox';
import { FontAwesome5 } from '@expo/vector-icons';
import { Link as NBLink } from 'native-base';

export default function SpeakerPage(props) {
	//const speaker = getSpeaker(id)
	var window = useWindowDimensions();
	var pageWidth = responsiveWidth(window, null, null, 0.85);
	var imageRadius = responsiveWidth(window, 100, 450, 0.15);
	var isScreenSmall = window.width < 850;
	const styles = StyleSheet.create({
		TextName: {
			fontWeight: '1000',
		},

		RectangleShapeViewAccordion: {
			borderTopRightRadius: 30,
			borderTopLeftRadius: 30,
			backgroundColor: theme.colors.cream[0],
			paddingHorizontal: 15,
			paddingVertical: 7,
		},

		RectangleShapeViewInformation: {
			backgroundColor: 'white',
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
		<Column alignItems={'center'} py={'2.5%'}>
			<Stack
				justifyContent={'center'}
				direction={isScreenSmall ? 'column' : 'row'}
				space={25}
				style={styles.page}
			>
				<Column flex={!isScreenSmall && 0.3}>
					<StyledBox stackSpace={10} childrenInRow={isScreenSmall} centerChildren={true}>
						<RoundBorderedImage
							source={props.profileImage ? props.profileImage : ''}
							containerRadius={imageRadius}
							size={'inherit'}
						></RoundBorderedImage>
						<Column alignItems='center' space={3} flex={1}>
							<Heading> {props.name} </Heading>
							<Text fontWeight={1000} size='md'>
								{props.typeOfSpeaker}
							</Text>
							{props.position && (
								<Text fontWeight={1000} size='md'>
									{props.position}
								</Text>
							)}
						</Column>
					</StyledBox>
				</Column>
				<Column flex={0.7} space={currentIndex !== null ? 2 : 8}>
					{props.description && (
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
									<Heading style={styles.textTitle}>Bio</Heading>

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
										{props.description}
									</Text>
								</Center>
							) : (
								<></>
							)}
						</Column>
					)}
					{/* {props.activities[0] && (
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
									<Heading style={styles.textTitle}>Actividades</Heading>

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
										Nuno André da Silva fará parte da ...
									</Text>

									{speaker.activities.map((activity) => {
										return (
											<Link
												key={activity.id}
												to={'Activity/' + String(activity.id)}
											>
												<Text style={styles.textBody} size='md'>
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
					)} */}
					{props.contacts && (
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
									<Heading style={styles.textTitle}>Contactos</Heading>

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
									<NBLink href={props.contacts}>
										<FontAwesome5
											name='linkedin'
											size={24}
											color={theme.colors.medYellow[0]}
										/>
									</NBLink>
								</Center>
							) : (
								<></>
							)}
						</Column>
					)}
					{props.researchInterests && (
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
									<Heading style={styles.textTitle}>Palavras-Chave</Heading>

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
										{props.researchInterests}
									</Text>
								</Center>
							) : (
								<></>
							)}
						</Column>
					)}
				</Column>
			</Stack>
		</Column>
	);
}
