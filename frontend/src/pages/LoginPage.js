import React from 'react';
import {
	Button,
	Center,
	Input,
	Stack,
	Heading,
	Text,
	Divider,
	Pressable,
	HStack,
	Column,
	Row,
	FormControl,
	Icon,
	View,
} from 'native-base';
import { useState } from 'react';
import StyledBox from '../components/information/StyledBox';
import theme from '../theme';
import { MaterialIcons } from '@expo/vector-icons';
import { Link } from '../router/index';
import { Platform, StyleSheet } from 'react-native';

export default function LoginPage() {
	const styles = StyleSheet.create({
		aboutBox: {
			paddingTop: '10%',
		},
	});

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [show, setShow] = useState(false);

	return (
		<Column flex={1} space={120}>
			<Row justifyContent={'center'} style={styles.aboutBox}>
				<StyledBox
					flex={Platform.OS === ('ios' || 'android') ? 0.6 : 0.4}
					className={'LoginContainer'}
					bg={theme.colors.medYellow}
					borderRadius={25}
					backgroundColor={theme.colors.medYellow[0]}
					headingText={'LOGIN'} // can't get it in the center, the way it is on figma
					childrenJustifyContent={'center'}
				>
					<FormControl>
						<FormControl.Label>
							<Text size='md'> Email</Text>
						</FormControl.Label>

						<Input variant='filled' rounded='10' _focus={{ bg: '#ffffff' }} />
					</FormControl>

					<FormControl>
						<FormControl.Label>
							<Text size='md'> Password</Text>
						</FormControl.Label>

						<Input
							variant='filled'
							rounded='10'
							_focus={{ bg: '#ffffff' }}
							type={show ? 'text' : 'password'}
							InputRightElement={
								<Pressable onPress={() => setShow(!show)}>
									<Icon
										as={
											<MaterialIcons
												name={show ? 'visibility' : 'visibility-off'}
											/>
										}
										size={5}
										mr='2'
										color='muted.400'
									/>
								</Pressable>
							}
						/>
					</FormControl>
					<View mt='1.5' ml='3'>
						<Link to={'/PasswordRecovery'} style={{ textDecoration: 'none' }}>
							<Text size='md' color='#2D6793' fontWeight='medium'>
								Forgot your password?
							</Text>
						</Link>
					</View>
					<Button ml='80%' size='sm' color='#2D6793' mb='3'>
						<Text size='md' ml='3' mr='3' fontWeight='medium' color='#FDBA35'>
							Enter
						</Text>
					</Button>
					<Divider color='#2D6793' />
					<View mt='3' ml='3' mr='3'>
						<Link to={'/Register'} style={{ textDecoration: 'none' }}>
							<Text size='md' color='#2D6793' fontWeight='medium'>Don't have an account? Sign up here!</Text>
						</Link>
					</View>
				</StyledBox>
			</Row>
		</Column>
	);
}

//<Row mt= '1' display='flex' flexDirection='row' justifyContent='space-between'>
//</Row>

/*<Stack space='lg' w='100%' h='500px' bg='#FDBA35' rounded='15'>
			<Heading mt='100px' color='#2D6793'>
				<Center>LOGIN</Center>
			</Heading>
			<Stack space='xs'>
				<Text ml='3' fontWeight='medium' color='#2D6793'>
					Username:
				</Text>
				<Input
					variant='filled'
					ml='3'
					mr='3'
					onChangeText={(username) => setUsername(username)}
				/>
			</Stack>
			<Stack space='xs'>
				<Text ml='3' fontWeight='medium' color='#2D6793'>
					Password:
				</Text>
				<Input
					type='password'
					variant='filled'
					ml='3'
					mr='3'
					onChangeText={(password) => setPassword(password)}
				/>
			</Stack>
<HStack display='flex' flexDirection='row' justifyContent='space-between'>
				<Pressable ml='3' mt='1' variant='ghost'>
					<Text color='#2D6793' fontWeight='medium'>
						Forgot your password?
					</Text>
				</Pressable>
				<Button size='sm' color='#2D6793' mr='3'>
					<Text ml='3' mr='3' fontWeight='medium' color='white'>
						Enter
					</Text>
				</Button>
			</HStack>
			<Divider />
			<Pressable ml='3' mr='3' variant='ghost'>
				<Center>
					<Text color='#2D6793' fontWeight='medium'>
						Don't have an account? Sign up here!
					</Text>
				</Center>
			</Pressable>

			*/

	
/*<Pressable mt='3' ml='3' mr='3' variant='ghost'>
						<Center>
							<Text size='md' color='#2D6793' fontWeight='medium'>
								Don't have an account? Sign up here!
							</Text>
						</Center>
					</Pressable>

<Pressable ml='3' mt='1' variant='ghost'>
						<Text size='md' color='#2D6793' fontWeight='medium'>
							Forgot your password?
						</Text>
					</Pressable>
					*/
