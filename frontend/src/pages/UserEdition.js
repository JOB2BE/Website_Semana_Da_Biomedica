import { React, useState, useEffect } from 'react';
import {
	Column,
	Text,
	Center,
	Stack,
	Heading,
	Row,
	FormControl,
	Input,
	IconButton,
	CheckIcon,
	Button,
	useToast,
} from 'native-base';
import theme from '../theme';
import { StyleSheet } from 'react-native';
import { useWindowDimensions } from 'react-native';
import responsiveWidth from '../utils/responsiveWidth';
import { FontAwesome } from '@expo/vector-icons';
import StyledBox from '../components/information/StyledBox';
import * as DocumentPicker from 'expo-document-picker';

export default function UserEdition(props) {
	const id = props.id;
	var window = useWindowDimensions();
	var pageWidth = responsiveWidth(window, null, null, 0.85);
	var isScreenSmall = window.width < 850;
	const toast = useToast();

	const [photo, setPhoto] = useState(null);
	const [university, setUniversity] = useState(null);
	const [degree, setDegree] = useState(null);
	const [cv, setCv] = useState(null);
	const [description, setDescription] = useState(null);
	const [contact, setContact] = useState(null);
	const [keywords, setKeywords] = useState(null);

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
	const handleError = (err) => {
		throw err;
	};

	function save() {
		if (cv != null) {
			//If cv selected then create FormData
			const fileToUpload = cv;
			const data = new FormData();
			data.append('name', 'cv');
			data.append('file_attachment', fileToUpload);
		}
		if (photo != null) {
			//If photo selected then create FormData
			const fileToUpload = photo;
			const data = new FormData();
			data.append('name', 'profileImage');
			data.append('file_attachment', fileToUpload);
		}
		// if (!toast.isActive(id)) {
		// 	toast.show({
		// 		id,
		// 		title: 'Guardado!',
		// 	});
		// }
	}

	useEffect(() => {
		if (photo !== null) {
			toast.show({
				id,
				title: 'PDF selecionado!',
			});
			console.log(JSON.stringify(cv, null, 2));
		}
	}, [cv]);
	useEffect(() => {
		if (photo !== null) {
			toast.show({
				id,
				title: 'Imagem selecionada!',
			});
			console.log(JSON.stringify(photo, null, 2));
		}
	}, [photo]);
	return (
		<Column flex={1} alignItems={'center'} {...props}>
			<Stack
				justifyContent={'center'}
				direction={isScreenSmall ? 'column' : 'row'}
				space={25}
				style={styles.page}
			>
				<Column>
					<StyledBox stackSpace={10} childrenInRow={isScreenSmall} centerChildren={true}>
						<IconButton
							variant='solid'
							backgroundColor={theme.colors.dryBlue[0]}
							icon={
								<FontAwesome
									name='camera'
									size={24}
									color={theme.colors.medYellow[0]}
								/>
							}
							onPress={async () => {
								try {
									const pickerResult = await DocumentPicker.getDocumentAsync({
										presentationStyle: 'fullScreen',
										copyToCacheDirectory: true,
										type: 'images/*',
									});
									setPhoto([pickerResult]);
								} catch (e) {
									handleError(e);
								}
							}}
						/>

						<Column alignItems='center' space={3}>
							<FormControl>
								<FormControl.Label>
									<Text size='md' style={[styles.textLeftPadding, styles.text]}>
										Universidade
									</Text>
								</FormControl.Label>

								<Input
									bg={'white'}
									rounded='10'
									onChangeText={(string) => setUniversity(string)}
								/>
							</FormControl>
							<FormControl>
								<FormControl.Label>
									<Text size='md' style={[styles.textLeftPadding, styles.text]}>
										Curso
									</Text>
								</FormControl.Label>

								<Input
									bg={'white'}
									rounded='10'
									onChangeText={(string) => setDegree(string)}
								/>
							</FormControl>
							<Button
								onPress={async () => {
									try {
										const pickerResult = await DocumentPicker.getDocumentAsync({
											presentationStyle: 'fullScreen',
											copyToCacheDirectory: true,
											type: 'application/pdf',
										});
										setCv([pickerResult]);
									} catch (e) {
										handleError(e);
									}
								}}
								variant='engineering'
								leftIcon={
									<FontAwesome
										name='file-o'
										size={24}
										color={theme.colors.dryBlue[0]}
									/>
								}
							>
								Submeter o CV
							</Button>
						</Column>
					</StyledBox>
				</Column>
				<Column flex={0.7} space={2}>
					<Column>
						<Row
							justifyContent={'space-between'}
							alignItems={'center'}
							style={styles.RectangleShapeViewAccordion}
						>
							<Heading style={styles.textTitle}>Bio</Heading>
						</Row>

						<Center style={styles.RectangleShapeViewInformation}>
							<FormControl>
								<FormControl.Label>
									<Text size='md' style={[styles.textLeftPadding, styles.text]}>
										Descrição
									</Text>
								</FormControl.Label>

								<Input
									bg={'white'}
									rounded='10'
									onChangeText={(string) => setDescription(string)}
								/>
							</FormControl>
						</Center>
					</Column>
					<Column>
						<Row
							justifyContent={'space-between'}
							alignItems={'center'}
							style={styles.RectangleShapeViewAccordion}
						>
							<Heading style={styles.textTitle}>Contactos</Heading>
						</Row>

						<Center style={styles.RectangleShapeViewInformation}>
							<FormControl>
								<FormControl.Label>
									<Text size='md' style={[styles.textLeftPadding, styles.text]}>
										LinkedIn ou outro site similar
									</Text>
								</FormControl.Label>

								<Input
									bg={'white'}
									rounded='10'
									onChangeText={(string) => setContact(string)}
								/>
							</FormControl>
						</Center>
					</Column>
					<Column>
						<Row
							justifyContent={'space-between'}
							alignItems={'center'}
							style={styles.RectangleShapeViewAccordion}
						>
							<Heading style={styles.textTitle}>Palavras-Chave</Heading>
						</Row>

						<Center style={styles.RectangleShapeViewInformation}>
							<FormControl>
								<FormControl.Label>
									<Text size='md' style={[styles.textLeftPadding, styles.text]}>
										Palavras-Chave
									</Text>
								</FormControl.Label>

								<Input
									bg={'white'}
									rounded='10'
									onChangeText={(string) => setKeywords(string)}
								/>
							</FormControl>
						</Center>
					</Column>
					<Row justifyContent={'flex-end'}>
						<Column>
							<IconButton
								backgroundColor={theme.colors.medYellow[0]}
								onPress={() => save()}
								accessibilityLabel={'Guardar Alterações'}
								icon={<CheckIcon />}
							/>
						</Column>
					</Row>
				</Column>
			</Stack>
		</Column>
	);
}
