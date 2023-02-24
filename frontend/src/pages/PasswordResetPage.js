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
	Column,
	Row,
	HStack,
	Box,
	Heading,
} from 'native-base';
import { useState } from 'react';
import StyledBox from '../components/information/StyledBox';
import theme from '../theme';
import { MaterialIcons, AntDesign, Fontisto } from '@expo/vector-icons';
import { Link } from '../router/index';
import { Platform } from 'react-native';

// TODO: VERIFY ON MOBILE

export default function RegisterPage() {
	const [pw1, setPw1] = useState('');
	const [pw2, setPw2] = useState('');
	const [validated, setValidated] = useState(false);

	// For showing and hiding password text
	const [show1, setShow1] = useState(false);
	const [show2, setShow2] = useState(false);

	//   Regex represent parameters we *want*.
	const regexPassword = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/; // Only numbers or letters. No spaces
	// valid email (https://www.w3resource.com/javascript/form/email-validation.php)

	//Warning colours
	const white = '#ffffff';
	const red = '#dc2626';
	const green = '#008000';

	const validate = () => {
		if (
			pw1 &&
			pw1.length > 5 &&
			pw1.length < 17 &&
			regexPassword.test(pw1) &&
			pw2 &&
			pw2 === pw1
		) {
			setValidated(true);
			console.log('Success!');
			// TODO: UPDATE PASSWORD
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
					headingText='Password Reset'
					childrenJustifyContent='center'
				>
					{!validated ? (
						<VStack className={'NotValidated'} space={'5'}>
							<FormControl className={'NewPasswordContainer'} isRequired>
								<FormControl.Label>
									<Text size='md'> New password</Text>
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
														name={
															show1 ? 'visibility' : 'visibility-off'
														}
													/>
												}
												size={5}
												mr='2'
												color='muted.400'
											/>
										</Pressable>
									}
									onChangeText={(value) => setPw1(value)}
								/>

								<VStack className={'ErrorContainerWrong'}>
									<Text> Password must contain</Text>
									{pw1.length < 6 || pw1.length > 15 ? (
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

									{!regexPassword.test(pw1) ? (
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
							</FormControl>

							<FormControl className={'ConfirmNewPasswordContainer'} isRequired>
								<FormControl.Label>
									<Text size='md'> Confirm new password</Text>
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
														name={
															show2 ? 'visibility' : 'visibility-off'
														}
													/>
												}
												size={5}
												mr='2'
												color='muted.400'
											/>
										</Pressable>
									}
									onChangeText={(value) => setPw2(value)}
								/>

								<VStack className={'ErrorContainerUnmatched'} marginTop='2'>
									{pw2 ? (
										pw2 !== pw1 ? (
											<HStack>
												<AntDesign
													name='closecircle'
													size='xs'
													color={red}
												/>
												<Text color={red}> Passwords do not match</Text>
											</HStack>
										) : (
											<HStack>
												<Fontisto name='smiley' size='xs' color={green} />
												{/* eslint-disable-next-line react/no-unescaped-entities */}
												<Text color={green}> It's a match!</Text>
											</HStack>
										)
									) : null}
								</VStack>
							</FormControl>

							<Button alignSelf='center' variant='alternating' onPress={validate}>
								Reset
							</Button>
						</VStack>
					) : (
						<VStack className={'Validated'} space={'5'}>
							<Box>
								<Heading>Password changed!</Heading>
								{/* eslint-disable-next-line react/no-unescaped-entities */}
								<Text>Now don't go and forget about it again ;p</Text>
							</Box>

							<Link to={'/Login'} style={{ textDecoration: 'none' }}>
								<Button alignSelf='center' variant='alternating'>
									Login
								</Button>
							</Link>

							{/*// TODO: SMALLER BUTTON*/}

							<Center>
								<Link to={'/'} style={{ textDecoration: 'none' }}>
									<Text size='md'>Back to Home Page</Text>
								</Link>
							</Center>
						</VStack>
					)}
				</StyledBox>
			</Row>
		</Column>
	);
}
