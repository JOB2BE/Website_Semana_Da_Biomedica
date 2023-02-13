import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text, View } from 'native-base';

export default function ActivitiesPage() {
	const styles = StyleSheet.create({
		container: {
			flex: 1,
<<<<<<< HEAD

=======
			backgroundColor: '#fff',
>>>>>>> 175c868c649dfe3dc1fe25baf2a88e261216858b
			alignItems: 'center',
			justifyContent: 'center',
		},
	});

	const [counter, setCounter] = useState(0);

	return (
		<View style={styles.container}>
			<Text>This is the Activities Page!</Text>
			<Button onPress={() => setCounter(counter + 1)}>Add +1 to counter</Button>
			<Text>You have pressed the button {counter} times</Text>
			<StatusBar style='auto' />
		</View>
	);
}
