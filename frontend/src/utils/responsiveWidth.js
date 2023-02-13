import useWindowDimensions from './useWindowDimensions';

export default function responsiveWidth(min = null, max = null, coef = 1) {
	var windowArray = useWindowDimensions();
	
	let size = coef * windowArray.width;

	if ((min !== null) & (size < min)) {
		size = min;
	}
	if ((max !== null) & (size > max)) {
		size = max;
	}

	return size;
}
