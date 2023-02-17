import * as React from 'react';
import { Button, Center, Input, Heading, Text, VStack, HStack, Box, Link } from 'native-base';
import { useState } from 'react';
import theme from '../theme';

// TODO: USE FORM CONTROL
// TODO: FUNCTION TO CHECK IF PASSWORD == CONFIRM PASSWORD
// TODO: FUNCTION TO ACTUALLY REGISTER
// TODO: VERIFY ON MOBILE

// https://docs.nativebase.io/input

export default function RegisterPage() {
	const [name, setName] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [degree, setDegree] = useState('');
	const [university, setUniversity] = useState('');

	const [showPw, setshowPw] = React.useState(false);
	const [showRp, setshowRp] = React.useState(false);

	const handleClickPw = () => setshowPw(!showPw);
	const handleClickRp = () => setshowRp(!showRp);

	return (
		<VStack className={'PageContainer'}>
			<Box /*Space from NavBar*/ h='1/6' />
			<Center>
				<VStack
					className={'RegisterContainer'}
					bg={theme.colors.medYellow}
					w='500'
					p='5'
					rounded='25'
				>
					<Heading alignSelf='center'>REGISTER</Heading>
					<Box /*Margin*/ h='5' /> <Text size='md'> Name</Text>
					<Input variant='filled' rounded='10' onChangeText={(name) => setName(name)} />
					<Box /*Margin*/ h='5' /> <Text size='md'>Username</Text>
					<Input
						variant='filled'
						rounded='10'
						onChangeText={(username) => setUsername(username)}
					/>
					<Box /*Margin*/ h='5' /> <Text size='md'> Email</Text>
					<Input
						variant='filled'
						rounded='10'
						onChangeText={(email) => setEmail(email)}
					/>
					<Box /*Margin*/ h='5' /> <Text size='md'> Password</Text>
					<HStack>
						<Input
							flexGrow='1'
							variant='filled'
							rounded='10'
							type={showPw ? 'text' : 'password'}
							onChangeText={(password) => setPassword(password)}
						/>
						<Button
							variant='alternating'
							size='xs'
							rounded='10'
							w='1/6'
							onPress={handleClickPw}
						>
							{showPw ? 'Hide' : 'Show'}
						</Button>
					</HStack>
					<Box /*Margin*/ h='5' /> <Text size='md'> Password</Text>
					<Input
						variant='filled'
						paddingRight='10'
						rounded='10'
						type={showRp ? 'text' : 'password'}
						InputRightElement={
							<Button
								variant='alternating'
								size='xs'
								roundedRight='10'
								roundedLeft='0'
								w='1/6'
								onPress={handleClickRp}
							>
								{showRp ? 'Hide' : 'Show'}
							</Button>
						}
						onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
					/>
					<Box /*Margin*/ h='5' /> <Text size='md'> Password</Text>
					<Input
						variant='filled'
						paddingRight='10'
						rounded='10'
						type={showRp ? 'text' : 'password'}
						InputRightElement={
							<Button
								variant='alternating'
								size='xs'
								rounded='10'
								w='1/6'
								onPress={handleClickRp}
							>
								{showRp ? 'Hide' : 'Show'}
							</Button>
						}
						onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
					/>
					<Box /*Margin*/ h='5' /> <Text size='md'> Confirm password</Text>
					<Input
						variant='filled'
						paddingRight='10'
						rounded='10'
						type={showRp ? 'text' : 'password'}
						InputRightElement={
							<Button
								variant='alternating'
								size='xs'
								rounded='10'
								w='1/6'
								onPress={handleClickRp}
							>
								{showRp ? 'Hide' : 'Show'}
							</Button>
						}
						onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
					/>
					<Box /*Margin*/ h='5' /> <Text size='md'> Degree</Text>
					<Input
						variant='filled'
						rounded='10'
						onChangeText={(degree) => setDegree(degree)}
					/>
					<Box /*Margin*/ h='5' /> <Text size='md'> University</Text>
					<Input
						variant='filled'
						rounded='10'
						onChangeText={(university) => setUniversity(university)}
					/>
					<Box /*Margin*/ h='5' />
					<Link alignSelf='center'>
						<Button variant='alternating'>Register</Button>
					</Link>
					<Box /*Margin*/ h='5' />
					<Link alignSelf='center'>
						<Text size='md'>Cancel</Text>
					</Link>
				</VStack>
			</Center>
		</VStack>
	);
}
