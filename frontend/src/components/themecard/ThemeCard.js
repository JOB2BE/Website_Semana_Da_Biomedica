import React from 'react';
import { Box, Button, Text, VStack } from 'native-base';
import { Link } from '../../router/index';
import theme from '../../theme';

// <ThemeCard
// 	title='Ciência de Dados em Medicina'
// 	description='Descrição do tema...'
// 	icon=<FontAwesome5 name='hospital-alt' size={24} color='black' />
// buttonText='Quero ver as atividades!'
// buttonRef='/Speakers'
// 	/>

export default function ThemeCard(props) {
	return (
		<VStack h='100%' w='100%' space='5'>
			<VStack flex='1'>
				<Box
					bg={theme.colors.dryBlue.bg}
					roundedTop='15'
					alignItems='center'
					p='3'
					borderColor={theme.colors.dryBlue['0']}
					borderWidth='2'
					borderBottomWidth='0'
				>
					<Text _web={{ fontSize: 'md' }} size='lg' color={theme.colors.medYellow}>
						{props.title}
					</Text>
				</Box>
				<VStack
					bg={theme.colors.engGrey}
					roundedBottom='15'
					borderColor={theme.colors.dryBlue['0']}
					borderWidth='2'
					p='3'
					flex='1'
				>
					<Box flex='1'>
						<Text _web={{ fontSize: 'md' }} size='md'>
							{props.description}
						</Text>
					</Box>
					<Box alignSelf='center'>{props.icon}</Box>
				</VStack>
			</VStack>

			{/*TODO: BUTTON WITH SMALLER WIDTH*/}

			<Link to={props.buttonRef} style={{ textDecoration: 'none' }}>
				<Button variant='alternating'>{props.buttonText}</Button>
			</Link>
		</VStack>
	);
}
