import * as React from 'react';
import {
	Button,
	Center,
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
} from 'native-base';
import { useState } from 'react';
import StyledBox from '../components/information/StyledBox';
import theme from '../theme';
import { MaterialIcons, AntDesign, Fontisto } from '@expo/vector-icons';
import { Link } from '../router/index';
import { Platform } from 'react-native';

// TODO: VERIFY ON MOBILE

export default function RegisterPage() {
	const [regData, setData] = useState('');
	const [errors, setErrors] = React.useState({});

	// For showing and hiding password text
	const [show1, setShow1] = React.useState(false);
	const [show2, setShow2] = React.useState(false);

	//   Regex represent parameters we *want*.
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

		if (regData.name !== undefined) {
			// TODO: PROFANITY CHECK
		} else {
			newErrors = { ...newErrors, name: 'Please provide us your name' };
		}

		if (regData.email !== undefined) {
			if (!regexEmail.test(regData.email)) {
				newErrors = { ...newErrors, email: 'Please provide us with a valid email' };
			}
		} else {
			newErrors = { ...newErrors, email: 'You need your email to login!' };
		}

		// Password
		if (regData.password !== undefined) {
			if (
				regData.password.length < 6 ||
				regData.password.length > 16 ||
				!regexPassword.test(regData.password)
			) {
				newErrors = {
					...newErrors,
					password:
						'Password must contain 6 to 16 characters with only numbers or letters!',
				};
			}
		} else {
			newErrors = { ...newErrors, password: 'Password is mandatory' };
		}

		// Confirm password
		if (regData.password2 !== undefined) {
			if (regData.password2 !== regData.password) {
				newErrors = { ...newErrors, password2: 'Passwords do not match!' };
			}
		} else {
			newErrors = { ...newErrors, password2: 'Please confirm your password' };
		}

		// Degree
		if (regData.degree !== undefined) {
			if (!regexDegree.test(regData.degree)) {
				newErrors = { ...newErrors, degree: 'Remove any number' };
			}
		}

		// University
		if (regData.university !== undefined) {
			if (!regexUniversity.test(regData.university)) {
				newErrors = { ...newErrors, university: 'Remove any number' };
			}
		}

		setErrors(newErrors);

		if (isEmptyObj(newErrors)) {
			console.log('Success!');
			// TODO: CODE OF REGISTRATION
			// handleRegister()
		}
	};

	return (
		<Column flex={1} space={120}>
			<Row justifyContent={'center'} pt='10%'>
				<StyledBox
					className={'RegisterContainer'}
					flex={Platform.OS === ('ios' || 'android') ? 0.6 : 0.4}
					backgroundColor={theme.colors.medYellow['0']}
					rounded='25'
					headingText='Register'
					childrenJustifyContent='center'
				>
					<FormControl
						className={'NameContainer'}
						isRequired
						isInvalid={'name' in errors}
					>
						<FormControl.Label>
							<Text size='md'> Name</Text>
						</FormControl.Label>

						<Input
							variant='filled'
							rounded='10'
							_focus={{ bg: white }}
							onChangeText={(value) => setData({ ...regData, name: value })}
						/>

						{'name' in errors ? (
							<HStack marginTop='2'>
								<AntDesign name='exclamationcircleo' size='xs' color={red} />
								<Text color={red}> {errors.name}</Text>
							</HStack>
						) : (
							<FormControl.HelperText>{null}</FormControl.HelperText>
						)}
					</FormControl>

					<FormControl
						className={'EmailContainer'}
						isRequired
						isInvalid={'email' in errors}
					>
						<FormControl.Label>
							<Text size='md'> Email</Text>
						</FormControl.Label>

						<Input
							variant='filled'
							rounded='10'
							_focus={{ bg: white }}
							onChangeText={(value) => setData({ ...regData, email: value })}
						/>

						{'email' in errors ? (
							<HStack marginTop='2'>
								<AntDesign name='exclamationcircleo' size='xs' color={red} />
								<Text color={red}> {errors.email}</Text>
							</HStack>
						) : (
							<FormControl.HelperText>{null}</FormControl.HelperText>
						)}
					</FormControl>

					<FormControl
						className={'PasswordContainer'}
						isRequired
						// isInvalid={'password' in errors}
					>
						<FormControl.Label>
							<Text size='md'> Password</Text>
						</FormControl.Label>

						<Input
							variant='filled'
							rounded='10'
							_focus={{ bg: white }}
							type={show1 ? 'text' : 'password'}
							InputRightElement={
								<Pressable onPress={() => setShow1(!show1)}>
									<Icon
										as={
											<MaterialIcons
												name={show1 ? 'visibility' : 'visibility-off'}
											/>
										}
										size={5}
										mr='2'
										color='muted.400'
									/>
								</Pressable>
							}
							onChangeText={(value) => setData({ ...regData, password: value })}
						/>

						{regData.password !== undefined ? (
							<VStack className={'ErrorContainerWrong'} marginTop='2'>
								<Text> Password must contain</Text>
								{regData.password.length < 6 || regData.password.length > 15 ? (
									<HStack>
										<AntDesign name='closecircle' size='xs' color={red} />
										<Text color={red}> 6 to 16 characters</Text>
									</HStack>
								) : (
									<HStack>
										<AntDesign name='checkcircle' size='xs' color={green} />
										<Text color={green}> 6 to 16 characters</Text>
									</HStack>
								)}

								{!regexPassword.test(regData.password) ? (
									<HStack>
										<AntDesign name='closecircle' size='xs' color={red} />
										<Text color={red}> Only numbers and letters</Text>
									</HStack>
								) : (
									<HStack>
										<AntDesign name='checkcircle' size='xs' color={green} />
										<Text color={green}> Only numbers and letters</Text>
									</HStack>
								)}
							</VStack>
						) : 'password' in errors ? (
							<HStack className={'ErrorContainerUndefined'} marginTop='2'>
								<AntDesign name='exclamationcircleo' size='xs' color={red} />
								<Text color={red}> Password is mandatory!</Text>
							</HStack>
						) : null}

						{/* In order to use validate function
						{'password' in errors ? (
							<FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size='xs' />}>
								{errors.password}
							</FormControl.ErrorMessage>
						) : (
							<FormControl.HelperText>{null}</FormControl.HelperText>
						)}
						*/}
					</FormControl>

					<FormControl
						className={'ConfirmPasswordContainer'}
						isRequired
						// isInvalid={'password2' in errors}
					>
						<FormControl.Label>
							<Text size='md'> Confirm password</Text>
						</FormControl.Label>

						<Input
							variant='filled'
							rounded='10'
							_focus={{ bg: white }}
							type={show2 ? 'text' : 'password'}
							InputRightElement={
								<Pressable onPress={() => setShow2(!show2)}>
									<Icon
										as={
											<MaterialIcons
												name={show2 ? 'visibility' : 'visibility-off'}
											/>
										}
										size={5}
										mr='2'
										color='muted.400'
									/>
								</Pressable>
							}
							onChangeText={(value) => setData({ ...regData, password2: value })}
						/>

						{regData.password2 !== undefined ? (
							<VStack className={'ErrorContainerUnmatched'} marginTop='2'>
								{regData.password2 !== regData.password ? (
									<HStack>
										<AntDesign name='closecircle' size='xs' color={red} />
										<Text color={red}> Passwords do not match</Text>
									</HStack>
								) : (
									<HStack>
										<Fontisto name='smiley' size='xs' color={green} />
										{/* eslint-disable-next-line react/no-unescaped-entities */}
										<Text color={green}> It's a match!</Text>
									</HStack>
								)}
							</VStack>
						) : 'password2' in errors ? (
							<HStack className={'ErrorContainerUndefined'} marginTop='2'>
								<AntDesign name='exclamationcircleo' size='xs' color={red} />
								<Text color={red}> Please confirm your password</Text>
							</HStack>
						) : null}

						{/* In order to use validate function
						{'password2' in errors ? (
							<FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size='xs' />}>
								{errors.password2}
							</FormControl.ErrorMessage>
						) : (
							<FormControl.HelperText>{null}</FormControl.HelperText>
						)}
						*/}
					</FormControl>

					<FormControl className={'DegreeContainer'} isInvalid={'degree' in errors}>
						<FormControl.Label>
							<Text size='md'> Degree</Text>
						</FormControl.Label>

						<Input
							variant='filled'
							rounded='10'
							_focus={{ bg: white }}
							onChangeText={(value) => setData({ ...regData, degree: value })}
						/>

						{'degree' in errors ? (
							<HStack marginTop='2'>
								<AntDesign name='exclamationcircleo' size='xs' color={red} />
								<Text color={red}> {errors.degree}</Text>
							</HStack>
						) : (
							<FormControl.HelperText>{null}</FormControl.HelperText>
						)}
					</FormControl>

					<FormControl
						className={'UniversityContainer'}
						isInvalid={'university' in errors}
					>
						<FormControl.Label>
							<Text size='md'> University</Text>
						</FormControl.Label>

						<Input
							variant='filled'
							rounded='10'
							_focus={{ bg: white }}
							onChangeText={(value) => setData({ ...regData, university: value })}
						/>

						{'university' in errors ? (
							<HStack marginTop='2'>
								<AntDesign name='exclamationcircleo' size='xs' color={red} />
								<Text color={red}> {errors.university}</Text>
							</HStack>
						) : (
							<FormControl.HelperText>{null}</FormControl.HelperText>
						)}
					</FormControl>

					<Column pt='10%' space={5}>
						<Button alignSelf='center' variant='alternating' onPress={validate}>
							Register
						</Button>

						<Center>
							<Link to={'/'} style={{ textDecoration: 'none' }}>
								<Text size='md'>Cancel</Text>
							</Link>
						</Center>
					</Column>
				</StyledBox>
			</Row>
		</Column>
	);
}
