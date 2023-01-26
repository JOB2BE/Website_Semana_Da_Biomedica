import { useState, useEffect } from 'react';
import { Dimensions, Platform } from 'react-native';

function getWindowDimensions() {
	const width = Dimensions.get('window').width;
	const height = Dimensions.get('window').height;
	return {
		width,
		height,
	};
}

export default function useWindowDimensions() {
	if (Platform.OS === 'web') {
		// Is only of use in Web not in mobile
		const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

		useEffect(() => {
			function handleResize() {
				setWindowDimensions(getWindowDimensions());
			}

			window.addEventListener('resize', handleResize);
			return () => window.removeEventListener('resize', handleResize);
		}, []);

		return windowDimensions;
	} else {
		return { width: null, height: null };
	}
}
