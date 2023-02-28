import { React, useState } from 'react';
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
	Button,
	Icon,
	IconButton,
} from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import UserEdition from './UserEdition';
import theme from '../theme';
import { StyleSheet } from 'react-native';
import { useWindowDimensions } from 'react-native';
import responsiveWidth from '../utils/responsiveWidth';
import responsiveHeight from '../utils/responsiveHeight';
import RoundBorderedImage from '../components/information/RoundBorderedImage';
import StyledBox from '../components/information/StyledBox';
import { Link, useParams } from '../router';

export default function UserPage() {
	const id = useParams();
	var window = useWindowDimensions();
	var paddingBox = responsiveHeight(window, null, null, 0.1);
	var pageWidth = responsiveWidth(window, null, null, 0.85);
	var imageRadius = responsiveWidth(window, 100, 450, 0.15);
	var isScreenSmall = window.width < 850;
	const [edition, setEdition] = useState(false);

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
		container: {
			paddingVertical: paddingBox,
		},
	});

	const [currentIndex, setCurrentIndex] = useState(null);

	if (edition) {
		return <UserEdition id={id} style={styles.container}></UserEdition>;
	}
	return (
		<Column flex={1} alignItems={'center'} style={styles.container}>
			<Stack
				justifyContent={'center'}
				direction={isScreenSmall ? 'column' : 'row'}
				space={25}
				style={styles.page}
			>
				<Column>
					<StyledBox stackSpace={10} childrenInRow={isScreenSmall} centerChildren={true}>
						<RoundBorderedImage
							source={''}
							containerRadius={imageRadius}
							size={'inherit'}
						></RoundBorderedImage>
						<Column alignItems='center' space={3}>
							<Heading>{user.name}</Heading>
							<Text fontWeight={1000} size='md'>
								{user.university}
							</Text>
							<Text fontWeight={1000} size='md'>
								{user.degree}
							</Text>
							<Button variant={'alternating'} fontWeight={1000} size='md'>
								{user.cv}
							</Button>
						</Column>
					</StyledBox>
				</Column>
				<Column flex={0.7} space={currentIndex !== null ? 2 : 8}>
					{user.description && (
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
										{user.description}
									</Text>
								</Center>
							) : (
								<></>
							)}
						</Column>
					)}
					{user.enrolledActivities[0] && (
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
									{user.enrolledActivities.map((activity) => {
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
					)}
					{user.contacts && (
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
									<Link style={styles.textBody} to={user.contacts} size='md'>
										linkedIn
									</Link>
								</Center>
							) : (
								<></>
							)}
						</Column>
					)}
					{user.researchInterests && (
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
										{user.researchInterests}
									</Text>
								</Center>
							) : (
								<></>
							)}
						</Column>
					)}

					<Row justifyContent={'flex-end'}>
						<Column>
							<IconButton
								backgroundColor={theme.colors.medYellow[0]}
								onPress={() => setEdition(true)}
								accessibilityLabel={'Editar Perfil'}
								icon={
									<Icon
										size='md'
										as={AntDesign}
										name='edit'
										color={theme.colors.dryBlue[0]}
									/>
								}
							/>
						</Column>
					</Row>
				</Column>
			</Stack>
		</Column>
	);
}
