import * as React from 'react';
import {
	Button,
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

export default function PasswordResetPage() {
	const [pw1, setPw1] = useState('');
	const [pw2, setPw2] = useState('');
	const [validated, setValidated] = useState(false);

	// For showing and hiding password text
	const [show1, setShow1] = useState(false);
	const [show2, setShow2] = useState(false);

	// Only numbers or letters. No spaces
	const regexPassword = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;

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
			// TODO: UPDATE PASSWORD
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
						<VStack space='5' alignItems='center' flex='1'>
							<FormControl
								isInvalid={
									pw1.length < 6 || pw1.length > 15 || !regexPassword.test(pw1)
								}
							>
								<Text size='md'> New password</Text>

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
												size='5'
												mr='2'
												color='muted.400'
											/>
										</Pressable>
									}
									onChangeText={(value) => setPw1(value)}
								/>

								<Text mt='2'> Password must contain</Text>

								{pw1.length < 6 || pw1.length > 15 ? (
									<HStack alignItems='center'>
										<AntDesign name='closecircle' size='xs' color={red} />
										<Text color={red}> 6 to 16 characters</Text>
									</HStack>
								) : (
									<HStack alignItems='center'>
										<AntDesign name='checkcircle' size='xs' color={green} />
										<Text color={green}> 6 to 16 characters</Text>
									</HStack>
								)}

								{!regexPassword.test(pw1) ? (
									<HStack alignItems='center'>
										<AntDesign name='closecircle' size='xs' color={red} />
										<Text color={red}> Only numbers and letters</Text>
									</HStack>
								) : (
									<HStack alignItems='center'>
										<AntDesign name='checkcircle' size='xs' color={green} />
										<Text color={green}> Only numbers and letters</Text>
									</HStack>
								)}
							</FormControl>

							<FormControl isInvalid={pw2 !== pw1}>
								<Text size='md'> Confirm new password</Text>

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
												size='5'
												mr='2'
												color='muted.400'
											/>
										</Pressable>
									}
									onChangeText={(value) => setPw2(value)}
								/>

								{pw2 &&
									(pw2 !== pw1 ? (
										<HStack mt='2' alignItems='center'>
											<AntDesign name='closecircle' size='xs' color={red} />
											<Text color={red}> Passwords do not match</Text>
										</HStack>
									) : (
										<HStack mt='2' alignItems='center'>
											<Fontisto name='smiley' size='xs' color={green} />
											{/* eslint-disable-next-line react/no-unescaped-entities */}
											<Text color={green}> It's a match!</Text>
										</HStack>
									))}
							</FormControl>

							<Button variant='alternating' onPress={validate}>
								Reset
							</Button>
						</VStack>
					) : (
						<VStack space='5' alignItems='center' flex='1'>
							<Box alignItems='center'>
								<Heading>Password changed!</Heading>
								{/* eslint-disable-next-line react/no-unescaped-entities */}
								<Text size='md'>Now don't go and forget about it again ;p</Text>
							</Box>

							<Link to={'/Login'} style={{ textDecoration: 'none' }}>
								<Button variant='alternating'>Login</Button>
							</Link>

							<Link to={'/'} style={{ textDecoration: 'none' }}>
								<Text size='md'>Return to Home Page</Text>
							</Link>
						</VStack>
					)}
				</StyledBox>
			</Row>
		</Column>
	);
}
