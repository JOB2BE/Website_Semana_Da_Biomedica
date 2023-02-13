import useWindowDimensions from './useWindowDimensions';

export default function responsiveHeight(min = null, max = null, coef = 1) {
	var windowArray = useWindowDimensions();

	let size = coef * windowArray.height;

	if ((min !== null) & (size < min)) {
		size = min;
	}
	if ((max !== null) & (size > max)) {
		size = max;
	}

	return size;
}
