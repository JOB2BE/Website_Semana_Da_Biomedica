import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useParams } from '../router';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text, View } from 'native-base';

export default function SpeakerPage() {
	const { id } = useParams();
	const styles = StyleSheet.create({
		container: {
			flex: 1,

			alignItems: 'center',
			justifyContent: 'center',
		},
	});

	const [counter, setCounter] = useState(0);
	console.log('Hello');
	return (
		<View style={styles.container}>
			<Text color={'yellow.100'}>This is the Speaker Page of the speaker with id {id} !</Text>
			<Button onPress={() => setCounter(counter + 1)}>Add +1 to counter</Button>
			<Text>You have pressed the button {counter} times</Text>
			<StatusBar style='auto' />
		</View>
	);
}
