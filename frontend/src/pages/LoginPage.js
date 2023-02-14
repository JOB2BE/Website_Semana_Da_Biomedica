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
} from 'native-base';
import { useState } from 'react';

export default function LoginPage() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	return (
		<Stack space='lg' w='100%' h='500px' bg='#FDBA35' rounded='15'>
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
		</Stack>
	);
}
