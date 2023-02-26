import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text, View } from 'native-base';

export default function SchedulePage() {
	const styles = StyleSheet.create({
		container: {
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center',
		},
	});

	const [counter, setCounter] = useState(0);

	return (
		<View style={styles.container}>
			<Text>This is the Schedule Page!</Text>
			<Button variant='engineering' onPress={() => setCounter(counter + 1)}>
				Add +1 to counter
			</Button>
			<Text>You have pressed the button {counter} times</Text>
			<StatusBar style='auto' />
		</View>
	);
}
