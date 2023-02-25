import useWindowDimensions from 'react-native';

export default function responsiveHeight(window, min = null, max = null, coef = 1) {
	let size = coef * window.height;

	if ((min !== null) & (size < min)) {
		size = min;
	}
	if ((max !== null) & (size > max)) {
		size = max;
	}

	return size;
}
