export default function responsiveWidth(window, min = null, max = null, coef = 1) {
	let size = coef * window.width;

	if ((min !== null) & (size < min)) {
		size = min;
	}
	if ((max !== null) & (size > max)) {
		size = max;
	}

	return size;
}
