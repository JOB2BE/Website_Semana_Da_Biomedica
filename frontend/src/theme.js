import { extendTheme } from 'native-base';

export default extendTheme({
	colors: {
		// Add new colors
		dryBlue: {
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
	fontConfig: {
		TextMe: {
			0: {
				normal: 'TextMe',
			},
		},
	},

	// Make sure values below matches any of the keys in `fontConfig`
	fonts: {
		heading: 'TextMe',
		body: 'TextMe',
		mono: 'TextMe',
		customFont: 'TextMe',
	},
	components: {
		Text: {
			baseStyle: {
				color: '#2D6793',
			},
			defaultProps: {
				size: 'sm',
				fontFamily: 'TextMe',
			},
			sizes: {
				xl: {
					fontSize: '64px',
				},
				lg: {
					fontSize: '32px',
				},
				md: {
					fontSize: '16px',
				},
				sm: {
					fontSize: '12px',
				},
			},
		},
		Heading: {
			baseStyle: {
				color: '#2D6793',
			},
			defaultProps: {
				size: 'sm',
				fontFamily: 'TextMe',
			},
			sizes: {
				xl: {
					fontSize: '130px',
				},
				lg: {
					fontSize: '66px',
				},
				md: {
					fontSize: '34px',
				},
				sm: {
					fontSize: '26px',
				},
			},
		},
	},
});
