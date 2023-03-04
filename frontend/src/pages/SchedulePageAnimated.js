import React, { useState } from 'react';
import { VStack, HStack, Pressable, Text, Heading, Row, Collapse, Column } from 'native-base';
import theme from '../theme';
import { AntDesign } from '@expo/vector-icons';
import { Link } from '../router';
import { useWindowDimensions } from 'react-native';
import responsiveWidth from '../utils/responsiveWidth';

// TODO: CHECK ON MOBILE

export default function SchedulePageAnimated() {
	var window = useWindowDimensions();
	var isSmallScreen = window.width < 850;
	var widthBars = responsiveWidth(window, null, null, isSmallScreen ? 0.95 : 0.65);
	const [selectedDay, setSelectedDay] = useState(undefined);

	return (
		<VStack flex={isSmallScreen ? 1 : true} my={'2.5%'}>
			<HStack justifyContent={'center'} alignItems={'center'}>
				<VStack width={widthBars} space={selectedDay !== undefined ? 3 : 10}>
					{[6, 7, 8].map((componentDay) => (
						<VStack key={componentDay} rounded='20' overflow='hidden'>
							<Pressable
								onPress={() => {
									if (selectedDay === undefined) {
										setSelectedDay(componentDay);
									} else {
										setSelectedDay(undefined);
									}
								}}
							>
								<HStack
									bg={theme.colors.medYellow[0]}
									justifyContent='space-between'
									alignItems='center'
									p='3'
								>
									<AntDesign
										name='down'
										size={24}
										color={theme.colors.medYellow[0]}
									/>
									<Heading>Dia {componentDay}</Heading>
									<AntDesign
										name={selectedDay === componentDay ? 'up' : 'down'}
										size={24}
										color='white'
									/>
								</HStack>
							</Pressable>

							<Collapse duration='400' isOpen={selectedDay === componentDay}>
								<Row
									bg={theme.colors.cream[0]}
									py={5}
									justifyContent={'center'}
									alignItems={'center'}
								>
									<Column flex={0.7} flexGrow={1}>
										{schedule[componentDay].map((activity, index) => (
											<Row
												key={index}
												space={isSmallScreen ? 2 : 4}
												justifyContent='center'
											>
												<Column flex={0.1} flexGrow={0.25}>
													<Text size='md' fontWeight={'bold'}>
														{activity.time}
													</Text>
												</Column>

												<Column flex={0.05}>
													<Text size='md' fontWeight={'bold'}>
														➔
													</Text>
												</Column>
												<Column flex={0.3} flexGrow={0.4}>
													{activity.id !== undefined ? (
														<Link
															to={'/Activity/' + String(activity.id)}
														>
															<Text size='md'>{activity.name}</Text>
														</Link>
													) : (
														<Text size='md'>{activity.name}</Text>
													)}
												</Column>
											</Row>
										))}
									</Column>
								</Row>

								{/* <VStack
									bg={theme.colors.cream[0]}
									py={5}
									space={1.5}
									alignItems={'center'}
									justifyContent={'center'}
								>
									<Center>
										{schedule[componentDay].map((activity, index) => (
											<HStack
												key={index}
												space={isSmallScreen ? 2 : 4}
												alignSelf={'flex-start'}
											>
												<Text size='md' fontWeight={'bold'}>
													{activity.time} ➔
												</Text>

												{activity.id !== undefined ? (
													<Link to={'/Activity/' + String(activity.id)}>
														<Text size='md'>{activity.name}</Text>
													</Link>
												) : (
													<Text size='md'>{activity.name}</Text>
												)}
											</HStack>
										))}
									</Center>
								</VStack> */}
							</Collapse>
						</VStack>
					))}
				</VStack>
			</HStack>
		</VStack>
	);
}

const schedule = {
	6: [
		{
			time: '9h - 9h30',
			name: 'Sessão de Boas-Vindas',
			local: 'Anf. Abreu Faro',
			type: '',
			id: 0,
		},
		{
			time: '9h30 - 11h',
			name: 'Networking',
			local: 'Átrio Central',
			type: 'Networking',
			id: 1,
		},
		{
			time: '11h - 11h30',
			name: 'Coffee Break',
			local: 'Átrio Central',
			type: '',
			id: undefined,
		},
		{
			time: '11h30 - 12h',
			name: 'Pitch',
			local: 'Anf. Abreu Faro',
			type: 'Pitch',
			id: 2,
		},
		{
			time: '13h30 - 15h',
			name: 'Palestra: Gamificação na Saúde',
			local: 'Anf. Abreu Faro',
			type: 'Palestra',
			id: 3,
		},
		{
			time: '15h - 15h30',
			name: 'Coffee Break',
			local: 'Átrio Anf. Abreu Faro',
			type: '',
			id: undefined,
		},
		{
			time: '15h30 - 17h',
			name: 'Workshop',
			local: 'Sala C01',
			type: 'Workshop',
			id: 4,
		},
	],
	7: [
		{
			time: '9h - 10h30',
			name: 'Workshop',
			local: 'Átrio Central',
			type: '',
			id: 5,
		},
		{
			time: '10h30 - 11h',
			name: 'Coffee Break',
			local: 'Átrio Central',
			type: '',
			id: undefined,
		},
		{
			time: '11h - 12h30',
			name: 'Palestra: Data Science em Medicina',
			local: 'Anf. Abreu Faro',
			type: 'Palestra',
			id: 6,
		},
		{
			time: '14h - 15h30',
			name: 'Palestra: Engenharia e Neurociências',
			local: 'Anf. Abreu Faro',
			type: 'Palestra',
			id: 7,
		},
		{
			time: '15h30 - 16h',
			name: 'Coffee Break',
			local: 'Átrio Anf. Abreu Faro',
			type: '',
			id: undefined,
		},
		{
			time: '16h - 17h30',
			name: 'Workshop',
			local: 'Sala C01',
			type: 'Workshop',
			id: 8,
		},
	],
	8: [
		{
			time: '9h - 10h30',
			name: 'Networking',
			local: 'Sala C01',
			type: 'Workshop',
			id: 9,
		},
		{
			time: '10h30 - 11h',
			name: 'Coffee Break',
			local: 'Átrio Anf. Abreu Faro',
			type: '',
			id: undefined,
		},
		{
			time: '11h - 12h30',
			name: 'Palestra: Terapia Genética e Edição Genética',
			local: 'Anf. Abreu Faro',
			type: 'Palestra',
			id: 10,
		},
		{
			time: '14h - 15h30',
			name: 'Sessão Alumni',
			local: 'Átrio Central',
			type: '',
			id: 11,
		},
		{
			time: '15h30 - 16h',
			name: 'Coffee Break',
			local: 'Átrio Anf. Abreu Faro',
			type: '',
			id: undefined,
		},
		{
			time: '16h - 16h30',
			name: 'Sessão de Encerramento',
			local: 'Anf. Abreu Faro',
			type: '',
			id: 12,
		},
	],
};
