import React from 'react';
import theme from '../../theme';
import { Box, HStack, VStack, Text, Heading } from 'native-base';
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
		<VStack w='100%' h='100%'>
			<HStack
				bg={theme.colors.medYellow}
				p='3'
				roundedTop='20'
				justifyContent='space-between'
				alignItems='center'
				flexWrap='wrap'
			>
				<Heading>{props.title}</Heading>

				<Box bg={theme.colors.engGrey} rounded='full' px='5' py='2'>
					<Text _web={{ fontSize: 'lg' }} size='md'>
						{props.type}
					</Text>
				</Box>
			</HStack>
			<VStack
				bg={white}
				flex='1'
				p='3'
				justifyContent='space-between'
				roundedBottom='20'
				borderColor={theme.colors.medYellow}
				borderWidth='2'
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
