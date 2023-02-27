import React from 'react';
import {
	Button,
	Center,
	Input,
	Text,
	Divider,
	Pressable,
	Column,
	Row,
	FormControl,
	Icon,
} from 'native-base';
import { useState } from 'react';
import StyledBox from '../components/information/StyledBox';
import theme from '../theme';
import { MaterialIcons } from '@expo/vector-icons';
import { Link } from '../router/index';
import { Platform, StyleSheet } from 'react-native';
import { useWindowDimensions } from 'react-native';
import responsiveWidth from '../utils/responsiveWidth';
import responsiveHeight from '../utils/responsiveHeight';

export default function LoginPage() {
	const window = useWindowDimensions();
	var paddingBox = responsiveHeight(window, 70, 300, 0.1);
	var parternshipBoxWidth = responsiveWidth(window, null, null, 0.6);
	const styles = StyleSheet.create({
		aboutBox: {
			paddingTop: paddingBox,
			borderRadius: 25,
		},
		textLeftPadding: {
			paddingLeft: '1%',
		},
		divider: {
			backgroundColor: theme.colors.dryBlue.bg,
		},
		link: {
			textDecorationColor: theme.colors.dryBlue[0],
		},
		text: { fontWeight: 'bold' },
	});

	const [email, setEmail] = useState(undefined);
	const [password, setPassword] = useState(undefined);

	const [show, setShow] = useState(false);

	return (
		<Column flex={1} space={120}>
			<Row justifyContent={'center'} style={styles.aboutBox}>
				<StyledBox
					flex={Platform.OS === ('ios' || 'android') ? 0.6 : 0.4}
					bg={theme.colors.medYellow}
					borderRadius={25}
					headingText={'LOGIN'} // can't get it in the center, the way it is on figma
					childrenJustifyContent={'center'}
				>
					<Column alignItems={'stretch'} flex={1} space={9}>
						<Column alignItems={'stretch'} flex={1}>
							<FormControl>
								<FormControl.Label>
									<Text size='md' style={[styles.textLeftPadding, styles.text]}>
										Email
									</Text>
								</FormControl.Label>

								<Input
									bg={'white'}
									rounded='10'
									onChangeText={(string) => setEmail(string)}
								/>
							</FormControl>
							<FormControl>
								<FormControl.Label>
									<Text size='md' style={[styles.textLeftPadding, styles.text]}>
										Password
									</Text>
								</FormControl.Label>

								<Input
									rounded='10'
									bg={'white'}
									type={show ? 'text' : 'password'}
									onChangeText={(string) => setPassword(string)}
									InputRightElement={
										<Pressable onPress={() => setShow(!show)} px={'1%'}>
											<Icon
												as={
													<MaterialIcons
														name={
															show ? 'visibility' : 'visibility-off'
														}
													/>
												}
												size={5}
												color='muted.400'
											/>
										</Pressable>
									}
								/>
							</FormControl>
						</Column>

						<Column alignItems={'center'} justifyContent={'center'} space={6}>
							<Link style={styles.link}>
								<Text style={styles.text} size='md'>
									Esqueceu-se da sua password?
								</Text>
							</Link>
							<Divider style={styles.divider} thickness='2' />
							<Link style={styles.link}>
								<Center>
									<Text style={styles.text} size='md'>
										Não tem uma conta? Registe-se aqui!
									</Text>
								</Center>
							</Link>
							<Button
								size='sm'
								variant='alternating'
								_text={{
									fontweight: 'bold',
									fontSize: '16px',
								}}
							>
								Login
							</Button>
						</Column>
					</Column>
				</StyledBox>
			</Row>
		</Column>
	);
}
