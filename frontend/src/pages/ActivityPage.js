import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function ActivityPage() {
	const [counter, setCounter] = useState(0);

	return (
		<View style={styles.container}>
			<Text>This is the Activity Page!</Text>
			<Button title='Add +1 to counter' onPress={() => setCounter(counter + 1)}></Button>
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
