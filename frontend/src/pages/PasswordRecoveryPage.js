import * as React from 'react';
import {
	Button,
	Text,
	FormControl,
	Input,
	isEmptyObj,
	Column,
	Row,
	HStack,
	VStack,
	Box,
} from 'native-base';
import { useState } from 'react';
import StyledBox from '../components/information/StyledBox';
import theme from '../theme';
import { AntDesign } from '@expo/vector-icons';
import { Link } from '../router/index';
import { Platform } from 'react-native';

// TODO: VERIFY ON MOBILE

export default function ActivitiesPage() {
	const [email, setEmail] = useState('');
	const [error, setError] = useState(0);
	const [validated, setValidated] = useState(false);

	// valid email (https://www.w3resource.com/javascript/form/email-validation.php)
	const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

	//Warning colours
	const white = '#ffffff';
	const red = '#dc2626';

	// Possible errors
	const errorList = {
		0: null,
		1: 'Forgot your email?',
		2: 'Please provide us with a valid email',
	};

	const validate = () => {
		let newError;

		if (!email) newError = 1;
		else if (!regexEmail.test(email)) newError = 2;
		else {
			setValidated(true);
			// TODO: CODE OF RECOVERY
		}

		setError(newError);
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
						<VStack space='5' alignItems='center' flex='1'>
							<Text size='md'>Enter your email to reset your password</Text>

							<FormControl isInvalid={!isEmptyObj(error)}>
								<Input
									variant='filled'
									rounded='10'
									_focus={{ bg: white }}
									flex='1'
									onChangeText={(value) => setEmail(value)}
								/>

								{error !== 0 && (
									<HStack mt='2' alignItems='center'>
										<AntDesign
											name='exclamationcircleo'
											size='xs'
											color={red}
										/>
										<Text color={red}> {errorList[error]}</Text>
									</HStack>
								)}
							</FormControl>

							<Button variant='alternating' onPress={validate}>
								Register
							</Button>

							<Link to={'/'} style={{ textDecoration: 'none' }}>
								<Text size='md'>Cancel</Text>
							</Link>
						</VStack>
					) : (
						<VStack space='5' alignItems='center' flex='1'>
							<Box alignItems='center'>
								<Text size='md'>An email has been sent to the address</Text>
								<Text size='md'>{email}</Text>
							</Box>

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
