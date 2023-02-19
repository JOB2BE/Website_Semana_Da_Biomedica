import * as React from 'react';
import {
	Button,
	Center,
	Heading,
	Text,
	VStack,
	Box,
	FormControl,
	Pressable,
	Icon,
	WarningOutlineIcon,
	Input,
	isEmptyObj,
} from 'native-base';
import { useState } from 'react';
import theme from '../theme';
import { MaterialIcons } from '@expo/vector-icons';
import { Link } from '../router/index';

// TODO: VERIFY ON MOBILE

export default function RegisterPage() {
	const [regData, setData] = useState('');
	const [errors, setErrors] = React.useState({});

	const [show1, setShow1] = React.useState(false);
	const [show2, setShow2] = React.useState(false);

	const validate = () => {
		let newErrors = {};

		// TODO: EACH FIELD'S REQUIREMENTS

		// if (regData.FIELDNAME !== undefined) {
		// 	if (condition) {
		// 		newErrors = { ...newErrors, name: 'FIELDNAME doesn't respect condition' };
		// 	}
		// 	...
		// } else { (If FIELDNAME is required)
		// 	newErrors = { ...newErrors, FIELDNAME: 'FIELDNAME is mandatory' };
		// }

		// Name
		// ..

		// Username
		// ...

		// Email
		// ...

		// Password
		if (regData.password !== undefined) {
			// Password validation parameters, if any
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
		// ...

		// University
		// ...

		setErrors(newErrors);

		if (isEmptyObj(newErrors)) {
			// TODO: CODE OF REGISTRATION
			// handleRegister()
		}
	};

	return (
		<VStack className={'PageContainer'}>
			<Box /*Space from NavBar*/ h='1/6' />
			<Center>
				<VStack
					className={'RegisterContainer'}
					bg={theme.colors.medYellow[0]}
					w='500'
					p='5'
					rounded='25'
				>
					<Heading alignSelf='center'>REGISTER</Heading>

					<Box /*Margin*/ h='5' />

					<FormControl className={'NameContainer'} isInvalid={'name' in errors}>
						<FormControl.Label>
							<Text size='md'> Name</Text>
						</FormControl.Label>

						<Input
							variant='filled'
							rounded='10'
							_focus={{ bg: '#ffffff' }}
							onChangeText={(value) => setData({ ...regData, name: value })}
						/>

						{'name' in errors ? (
							<FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size='xs' />}>
								{errors.name}
							</FormControl.ErrorMessage>
						) : (
							<FormControl.HelperText>{null}</FormControl.HelperText>
						)}
					</FormControl>

					<Box /*Margin*/ h='5' />

					<FormControl className={'UsernameContainer'} isInvalid={'username' in errors}>
						<FormControl.Label>
							<Text size='md'> Username</Text>
						</FormControl.Label>

						<Input
							variant='filled'
							rounded='10'
							_focus={{ bg: '#ffffff' }}
							onChangeText={(value) => setData({ ...regData, username: value })}
						/>

						{'username' in errors ? (
							<FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size='xs' />}>
								{errors.username}
							</FormControl.ErrorMessage>
						) : (
							<FormControl.HelperText>{null}</FormControl.HelperText>
						)}
					</FormControl>

					<Box /*Margin*/ h='5' />

					<FormControl className={'EmailContainer'} isInvalid={'email' in errors}>
						<FormControl.Label>
							<Text size='md'> Email</Text>
						</FormControl.Label>

						<Input
							variant='filled'
							rounded='10'
							_focus={{ bg: '#ffffff' }}
							onChangeText={(value) => setData({ ...regData, email: value })}
						/>

						{'email' in errors ? (
							<FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size='xs' />}>
								{errors.email}
							</FormControl.ErrorMessage>
						) : (
							<FormControl.HelperText>{null}</FormControl.HelperText>
						)}
					</FormControl>

					<Box /*Margin*/ h='5' />

					<FormControl
						className={'PasswordContainer'}
						isRequired
						isInvalid={'password' in errors}
					>
						<FormControl.Label>
							<Text size='md'> Password</Text>
						</FormControl.Label>

						<Input
							variant='filled'
							rounded='10'
							_focus={{ bg: '#ffffff' }}
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

						{'password' in errors ? (
							<FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size='xs' />}>
								{errors.password}
							</FormControl.ErrorMessage>
						) : (
							<FormControl.HelperText>{null}</FormControl.HelperText>
						)}
					</FormControl>

					<Box /*Margin*/ h='5' />

					<FormControl
						className={'ConfirmPasswordContainer'}
						isRequired
						isInvalid={'password2' in errors}
					>
						<FormControl.Label>
							<Text size='md'> Confirm password</Text>
						</FormControl.Label>

						<Input
							variant='filled'
							rounded='10'
							_focus={{ bg: '#ffffff' }}
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

						{'password2' in errors ? (
							<FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size='xs' />}>
								{errors.password2}
							</FormControl.ErrorMessage>
						) : (
							<FormControl.HelperText>{null}</FormControl.HelperText>
						)}
					</FormControl>

					<Box /*Margin*/ h='5' />

					<FormControl className={'DegreeContainer'} isInvalid={'degree' in errors}>
						<FormControl.Label>
							<Text size='md'> Degree</Text>
						</FormControl.Label>

						<Input
							variant='filled'
							rounded='10'
							_focus={{ bg: '#ffffff' }}
							onChangeText={(value) => setData({ ...regData, degree: value })}
						/>

						{'degree' in errors ? (
							<FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size='xs' />}>
								{errors.degree}
							</FormControl.ErrorMessage>
						) : (
							<FormControl.HelperText>{null}</FormControl.HelperText>
						)}
					</FormControl>

					<Box /*Margin*/ h='5' />

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
							_focus={{ bg: '#ffffff' }}
							onChangeText={(value) => setData({ ...regData, university: value })}
						/>

						{'university' in errors ? (
							<FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size='xs' />}>
								{' '}
								{errors.university}
							</FormControl.ErrorMessage>
						) : (
							<FormControl.HelperText>{null}</FormControl.HelperText>
						)}
					</FormControl>

					<Box /*Margin*/ h='5' />

					<Button alignSelf='center' variant='alternating' onPress={validate}>
						Register
					</Button>

					<Box /*Margin*/ h='5' />

					<Center>
						<Link to={'/'} style={{ textDecoration: 'none' }}>
							<Text size='md'>Cancel</Text>
						</Link>
					</Center>
				</VStack>
			</Center>
		</VStack>
	);
}
