import React, { useState } from 'react';
import {
	Button,
	Text,
	VStack,
	FormControl,
	Pressable,
	Icon,
	Input,
	isEmptyObj,
	Column,
	Row,
	HStack,
	Box,
	Heading,
} from 'native-base';
import StyledBox from '../components/information/StyledBox';
import theme from '../theme';
import { MaterialIcons, AntDesign, Fontisto } from '@expo/vector-icons';
import { Link } from '../router/index';
import { StyleSheet } from 'react-native';
import { useWindowDimensions } from 'react-native';
import responsiveWidth from '../utils/responsiveWidth';
import responsiveHeight from '../utils/responsiveHeight';


// TODO: VERIFY ON MOBILE

export default function RegisterPage() {
	var window = useWindowDimensions();
	var paddingBox = responsiveHeight(window, null, null, 0.1);
	var boxWidthMobile = responsiveWidth(window, 150, null, 0.8);
	var boxWidth = responsiveWidth(window, null, 1000, 0.4);
	var isSmallScreen = window.width < 850;

	const styles = StyleSheet.create({
		aboutBox: {
			paddingVertical: paddingBox,
			borderRadius: 25,
		},
		text: { fontWeight: 'bold' },
		textLeftPadding: {
			paddingLeft: '1%',
		},
	});

	const [regData, setData] = useState('');
	const [errors, setErrors] = useState({});
	const [validated, setValidated] = useState(false);

	// For showing and hiding password text
	const [show1, setShow1] = useState(false);
	const [show2, setShow2] = useState(false);

	// Regex represent parameters we *want*.

	const regexPassword = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/; // Only numbers or letters. No spaces
	const regexDegree = /^([^0-9]*)$/; // Anything but numbers
	const regexUniversity = /^([^0-9]*)$/; // Anything but numbers
	const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
	// valid email (https://www.w3resource.com/javascript/form/email-validation.php)

	//Warning colours
	const white = '#ffffff';
	const red = '#dc2626';
	const green = '#008000';

	const validate = () => {
		let newErrors = {};

		if (!regData.name) newErrors = { ...newErrors, name: 'Please provide us your name' };
		// else if (profanity) TODO: PROFANITY CHECK

		if (!regData.email) newErrors = { ...newErrors, email: 'You need your email to login!' };
		else if (!regexEmail.test(regData.email)) {
			newErrors = { ...newErrors, email: 'Please provide us with a valid email' };
		}

		// Passwords
		if (
			!regData.password ||
			regData.password.length < 6 ||
			regData.password.length > 16 ||
			!regexPassword.test(regData.password)
		) {
			newErrors = { ...newErrors, password: 'error' };
		}

		if (!regData.password2 || regData.password2 !== regData.password) {
			newErrors = { ...newErrors, password2: 'error' };
		}

		// Degree
		if (!regData.degree && !regexDegree.test(regData.degree)) {
			newErrors = { ...newErrors, degree: 'Remove any number' };
		}

		// University
		if (!regData.university && !regexUniversity.test(regData.university)) {
			newErrors = { ...newErrors, university: 'Remove any number' };

		}


		setErrors(newErrors);

		if (isEmptyObj(newErrors)) {


			setValidated(true);


			// TODO: CODE OF REGISTRATION
			// handleRegister()
		}
	};

	const Errors = ({ e }) => {
		return (
			<HStack marginTop='2'>
				<AntDesign name='exclamationcircleo' size='xs' color={red} />
				<Text color={red}> {e}</Text>
			</HStack>
		);
	};

	const BadWarning = ({ text }) => {
		return (
			<HStack>
				<AntDesign name='closecircle' size='xs' color={red} />
				<Text color={red} style={styles.textLeftPadding}>{text}</Text>
			</HStack>
		);
	};

	const GoodWarning = ({ text }) => {
		return (
			<HStack>
				<AntDesign name='checkcircle' size='xs' color={green} />
				<Text color={green} style={styles.textLeftPadding}>
					{text}
				</Text>
			</HStack>
		);
	};

	return (
		<Column flex={1} space={120} style={styles.aboutBox}>
			<Row justifyContent={'center'}>
				<StyledBox
					width={isSmallScreen ? boxWidthMobile : boxWidth}
					backgroundColor={theme.colors.medYellow['0']}
					rounded='25'
					headingText='Register'
					childrenJustifyContent='center'
				>
					{!validated ? (
						<VStack space='5' flex='1'>
							{/*Name*/}
							<FormControl isInvalid={'name' in errors}>
								<Text style={[styles.text, styles.textLeftPadding]} size='md'>
									Nome*
								</Text>
								<Input
									variant='filled'
									rounded='10'
									_focus={{ bg: white }}
									onChangeText={(value) => setData({ ...regData, name: value })}
								/>
								{'name' in errors && <Errors e={errors.name} />}
							</FormControl>

							{/*Email*/}
							<FormControl isInvalid={'email' in errors}>
								<Text style={[styles.text, styles.textLeftPadding]} size='md'>
									Email*
								</Text>
								<Input
									variant='filled'
									rounded='10'
									_focus={{ bg: white }}
									onChangeText={(value) => setData({ ...regData, email: value })}
								/>
								{'email' in errors && <Errors e={errors.email} />}
							</FormControl>

							{/*Password*/}
							<FormControl>
								<Text style={[styles.text, styles.textLeftPadding]} size='md'>
									Password*
								</Text>

								<Input
									variant='filled'
									rounded='10'
									_focus={{ bg: white }}
									type={show1 ? 'text' : 'password'}
									InputRightElement={
										<Pressable onPress={() => setShow1(!show1)} px={'1%'}>
											<Icon
												as={
													<MaterialIcons
														name={
															show1 ? 'visibility' : 'visibility-off'
														}
													/>
												}
												size='5'
												color='muted.400'
											/>
										</Pressable>
									}
									onChangeText={(value) =>
										setData({ ...regData, password: value })
									}
								/>

								{regData.password ? (
									<VStack marginTop='2'>
										<Text style={styles.text}>Password deve conter</Text>
										{regData.password.length < 6 ||
										regData.password.length > 15 ? (
											<BadWarning text='6 a 16 caracteres' />
										) : (
											<GoodWarning text='6 a 16 caracteres' />
										)}

										{!regexPassword.test(regData.password) ? (
											<BadWarning text='Pelo menos um número e uma letra' />
										) : (
											<GoodWarning text='Pelo menos um número e uma letra' />
										)}
									</VStack>
								) : (
									'password' in errors && <Errors e={'Password é obrigatória!'} />
								)}
							</FormControl>

							{/*Confirm password*/}
							<FormControl>
								<Text style={[styles.text, styles.textLeftPadding]} size='md'>
									Repetir Password*
								</Text>

								<Input
									variant='filled'
									rounded='10'
									_focus={{ bg: white }}
									type={show2 ? 'text' : 'password'}
									InputRightElement={
										<Pressable onPress={() => setShow2(!show2)} px={'1%'}>
											<Icon
												as={
													<MaterialIcons
														name={
															show2 ? 'visibility' : 'visibility-off'
														}
													/>
												}
												size='5'
												color='muted.400'
											/>
										</Pressable>
									}
									onChangeText={(value) =>
										setData({ ...regData, password2: value })
									}
								/>

								{regData.password2 ? (
									<VStack marginTop='2'>
										{regData.password2 !== regData.password ? (
											<BadWarning text='As passwords diferem' />
										) : (
											<HStack>
												<Fontisto name='smiley' size='xs' color={green} />
												<Text color={green} style={styles.textLeftPadding}>
													São idênticas!
												</Text>
											</HStack>
										)}
									</VStack>
								) : (
									'password2' in errors && (
										<Errors e={'Por favor confirma a tua password'} />
									)
								)}
							</FormControl>

							{/*Degree*/}
							<FormControl isInvalid={'degree' in errors}>
								<Text style={[styles.text, styles.textLeftPadding]} size='md'>
									Curso
								</Text>
								<Input
									variant='filled'
									rounded='10'
									_focus={{ bg: white }}
									onChangeText={(value) => setData({ ...regData, degree: value })}
								/>
								{'degree' in errors && <Errors e={errors.degree} />}
							</FormControl>

							{/*University*/}
							<FormControl isInvalid={'university' in errors}>
								<Text style={[styles.text, styles.textLeftPadding]} size='md'>
									Universidade
								</Text>
								<Input
									variant='filled'
									rounded='10'
									_focus={{ bg: white }}
									onChangeText={(value) =>
										setData({ ...regData, university: value })
									}
								/>
								{'university' in errors && <Errors e={errors.university} />}
							</FormControl>

							<Button variant='alternating' onPress={validate} alignSelf='center'>
								Registar
							</Button>

							<Box alignSelf='center'>
								<Link to={'/'} style={{ textDecoration: 'none' }}>
									<Text size='md'>Cancelar</Text>
								</Link>
							</Box>
						</VStack>
					) : (
						<VStack alignItems='center' space='5'>
							{/* eslint-disable-next-line react/no-unescaped-entities */}
							<Heading>Parabéns, foi um sucesso!</Heading>

							<Link to={'/Login'} style={{ textDecoration: 'none' }}>
								<Button alignSelf='center' variant='alternating'>
									Fazer Login
								</Button>
							</Link>

							<Link to={'/'} style={{ textDecoration: 'none' }}>
								<Text size='md'>Voltar à página inicial</Text>
							</Link>
						</VStack>
					)}
				</StyledBox>
			</Row>
		</Column>
	);
}
