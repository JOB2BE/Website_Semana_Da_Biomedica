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
		<VStack
			className={'MainContainer'}
			h='100%'
			w='100%'
			justifyContent='space-between'
			space='5'
		>
			<VStack className={'UpperContainer'} flex='1'>
				<Box
					clasName={'TitleContainer'}
					bg={theme.colors.dryBlue['0']}
					roundedTop='15'
					alignItems='center'
					p='3'
				>
					<Text _web={{ fontSize: 'md' }} size='lg' color={theme.colors.medYellow['0']}>
						{props.title}
					</Text>
				</Box>
				<VStack
					className={'BodyContainer'}
					bg={theme.colors.engGrey['0']}
					roundedBottom='15'
					borderColor={theme.colors.dryBlue['0']}
					borderWidth='2'
					p='3'
					flex='1'
				>
					<Box className={'DescriptionContainer'} flex='1'>
						<Text _web={{ fontSize: 'md' }} size='md'>
							{props.description}
						</Text>
					</Box>
					<Box className={'IconContainer'} alignSelf='center'>
						{props.icon}
					</Box>
				</VStack>
			</VStack>

			{/*// TODO: LINK WELL DONE*/}
			<Link to={props.buttonRef} style={{ textDecoration: 'none' }}>
				<Button className={'ButtonContainer'} variant='alternating' alignSelf='center'>
					{props.buttonText}
				</Button>
			</Link>
		</VStack>
	);
}
