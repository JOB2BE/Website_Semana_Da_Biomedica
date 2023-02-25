import React from 'react';
import theme from '../../theme';
import { Box, Container, HStack, VStack, Text, Heading } from 'native-base';
import { Platform } from 'react-native';

const white = '#ffffff';

// <ActivityCard
// 	title='Como Fazer uma Terapia Virtual com VR'
// 	type='Workshop'
// 	speaker='Estevão Trabalhos'
// 	description='Words words words words words words words words words words words words'
// 	requirements='Words words words words words'
// 	schedule='6 de Março 15h00, sala C01'
// />

export default function ActivityCard(props) {
	return (
		<VStack className={'MainContainer'} w='100%' h='100%'>
			<HStack
				className={'HeaderContainer'}
				bg={theme.colors.medYellow['0']}
				borderTopRadius='15'
				p='3'
				justifyContent='space-between'
				alignItems='center'
				flexWrap='wrap'
			>
				<Heading>{props.title}</Heading>

				<Container
					className={'TypePill'}
					bg={theme.colors.engGrey['0']}
					rounded='999999999'
					px='5'
					py='2'
				>
					<Text _web={{ fontSize: 'lg' }} size='md'>
						{props.type}
					</Text>
				</Container>
			</HStack>
			<VStack
				className={'Body'}
				bg={white}
				borderBottomRadius='15'
				borderColor={theme.colors.medYellow['0']}
				borderWidth='2'
				flex='1'
				p='3'
				justifyContent='space-between'
			>
				<HStack flexWrap='wrap'>
					<Text _web={{ fontSize: 'md' }} size='lg'>
						Instrutor/Palestrante:{' '}
					</Text>
					<Text _web={{ fontSize: 'md' }} size='lg'>
						{props.speaker}
					</Text>
				</HStack>

				<VStack>
					<Text _web={{ fontSize: 'md' }} size='lg'>
						Descrição:
					</Text>
					<Text _web={{ fontSize: 'md' }} size='lg'>
						{props.description}
					</Text>
				</VStack>

				<VStack>
					<Text _web={{ fontSize: 'md' }} size='lg'>
						Pré-Requisitos:
					</Text>
					<Text _web={{ fontSize: 'md' }} size='lg'>
						{props.requirements}
					</Text>
				</VStack>

				<HStack flexWrap='wrap'>
					<Text _web={{ fontSize: 'md' }} size='lg'>
						Horário:{' '}
					</Text>
					<Text _web={{ fontSize: 'md' }} size='lg'>
						{props.schedule}
					</Text>
				</HStack>
			</VStack>
		</VStack>
	);
}
