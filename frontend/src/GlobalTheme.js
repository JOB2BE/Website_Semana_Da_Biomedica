import { extendTheme } from 'native-base';

export const GlobalTheme = extendTheme({
	colors: {
		// Add new colors
		darkBlue: {
			0: '#2D6793',
		},
		cream: {
			0: '#FFEFD3',
		},
		lightViolet: {
			0: '#A7A5C6',
		},
		medYellow: {
			0: '#FDBA35',
		},
	},
	config: {
		// Changing initialColorMode to 'light'
		initialColorMode: 'light',
	},
});
