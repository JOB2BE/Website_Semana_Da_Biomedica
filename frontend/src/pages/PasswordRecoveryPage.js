import * as React from 'react';
import {
	Button,
	Center,
	Text,
	FormControl,
	Input,
	isEmptyObj,
	Column,
	Row,
	HStack,
	Box,
} from 'native-base';
import { useState } from 'react';
import StyledBox from '../components/information/StyledBox';
import theme from '../theme';
import { AntDesign } from '@expo/vector-icons';
import { Link } from '../router/index';
import { Platform } from 'react-native';

// TODO: VERIFY ON MOBILE

export default function PasswordRecoveryPage() {
	const [email, setEmail] = useState('');
	const [error, setError] = useState('');
	const [validated, setValidated] = useState(false);

	const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
	// valid email (https://www.w3resource.com/javascript/form/email-validation.php)

	//Warning colours
	const white = '#ffffff';
	const red = '#dc2626';

	const validate = () => {
		let newError = {};

		console.log(validated);

		if (email) {
			if (!regexEmail.test(email)) {
				newError = 'Please provide us with a valid email';
			}
		} else {
			newError = 'Forgot your email?';
		}

		setError(newError);

		if (isEmptyObj(newError)) {
			setValidated(true);
			console.log('Success!');
			// TODO: CODE OF RECOVERY
			// handleRecovery()
		}
	};

	return (
		<Column flex={1} space={120}>
			<Row justifyContent={'center'} pt='10%'>
				<StyledBox
					className={'PasswordRecoveryContainer'}
					flex={Platform.OS === ('ios' || 'android') ? 0.6 : 0.4}
					backgroundColor={theme.colors.medYellow['0']}
					rounded='25'
					headingText='Password Recovery'
					childrenJustifyContent='center'
				>
					{!validated ? (
						<Box className={'NotValidated'}>
							<Text size='md'>Enter your email in order to reset password:</Text>

							<FormControl isInvalid={!isEmptyObj(error)}>
								<Input
									variant='filled'
									rounded='10'
									_focus={{ bg: white }}
									onChangeText={(value) => setEmail(value)}
								/>

								{!isEmptyObj(error) ? (
									<HStack marginTop='2'>
										<AntDesign
											name='exclamationcircleo'
											size='xs'
											color={red}
										/>
										<Text color={red}> {error}</Text>
									</HStack>
								) : null}
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
						</Box>
					) : (
						<Box className={'Validated'} alignItems='center'>
							<Text size='md'>An email has been sent to the address:</Text>

							<Text size='md'>{email}</Text>

							<Column pt='10%' space={5}>
								<Link to={'/'} style={{ textDecoration: 'none' }}>
									<Text size='md'>Return to Home Page</Text>
								</Link>
							</Column>
						</Box>
					)}
				</StyledBox>
			</Row>
		</Column>
	);
}
