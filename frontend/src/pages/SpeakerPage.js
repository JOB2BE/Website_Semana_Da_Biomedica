import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text, View } from 'native-base';

export default function LandingPage() {
	const [counter, setCounter] = useState(0);

	return (
		<View style={styles.container}>
			<Text>This is the Speaker Page!</Text>
			<Button onPress={() => setCounter(counter + 1)}>Add +1 to counter</Button>
			<Text>You have pressed the button {counter} times</Text>
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
