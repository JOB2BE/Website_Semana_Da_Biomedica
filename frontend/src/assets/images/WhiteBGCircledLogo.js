import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgComponent = (props) => (
	<Svg width={239} height={142} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
		<Path
			d='M0 0h239v22.5C239 88.498 185.498 142 119.5 142 53.502 142 0 88.498 0 22.5V0Z'
			fill='#2D6793'
		/>
	</Svg>
);

export default SvgComponent;
