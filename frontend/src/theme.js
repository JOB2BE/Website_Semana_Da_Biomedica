import { extendTheme } from 'native-base';

export default extendTheme({
	colors: {
		// Add new colors
		dryBlue: {
			0: '#2D6793',
			bg: '#5788AC',
		},
		cream: {
			0: '#FFEFD3',
		},
		medYellow: {
			0: '#FDBA35',
			pastel: '#FFEFD3',
		},
		engGrey: {
			0: '#C0C0C0',
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
					fontSize: '45px',
				},
				sm: {
					fontSize: '26px',
				},
			},
		},
		Button: {
			variants: {
				medical: () => {
					return {
						bgColor: '#FDBA35',
						borderWidth: 1,
						borderColor: '#2D6793',
						_hover: {
							bg: '#fdc85d',
							shadow: 9,
						},
						_pressed: {
							bg: '#fed686',
						},
						_text: {
							color: '#2D6793',
							fontWeight: 'bold',
						},
						rounded: 15,
						baseStyle: {
							borderWidth: 5,
						},
					};
				},
				engineering: () => {
					return {
						bgColor: '#FFEFD3',
						borderWidth: 1,
						borderColor: '#2D6793',
						_hover: {
							bg: '#e6d7be',
							shadow: 9,
						},
						_pressed: {
							bg: '#ccbfa9',
						},
						_text: {
							color: '#2D6793',
							fontWeight: 'bold',
						},
						rounded: 15,
						baseStyle: {
							borderWidth: 5,
						},
					};
				},
				alternating: () => {
					return {
						bgColor: '#2D6793',
						borderWidth: 1,
						borderColor: '#FDBA35',
						_hover: {
							bg: '#FDBA35',
							shadow: 9,
							borderColor: '#2D6793',
							_text: { color: '#2D6793' },
						},
						_pressed: {
							bg: '#fed686',
							_text: { color: '#2D6793' },
						},
						_text: {
							color: '#FDBA35',
							fontWeight: 'bold',
						},
						rounded: 15,
						baseStyle: {
							borderWidth: 5,
						},
					};
				},
			},
		},
	},
});
