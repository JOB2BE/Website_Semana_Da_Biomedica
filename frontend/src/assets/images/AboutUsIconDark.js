import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgComponent = (props) => (
	<Svg width={40} height={40} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
		<Path
			d='M26.25 17.5h7.5a2.5 2.5 0 0 0 2.5-2.5V7.5a2.5 2.5 0 0 0-2.5-2.5h-7.5a2.5 2.5 0 0 0-2.5 2.5V10H22.5a5.016 5.016 0 0 0-5 5v3.75h-3.75v-1.875a2.5 2.5 0 0 0-2.5-2.5H5a2.5 2.5 0 0 0-2.5 2.5v6.25a2.5 2.5 0 0 0 2.5 2.5h6.25a2.5 2.5 0 0 0 2.5-2.5V21.25h3.75V25a5.016 5.016 0 0 0 5 5h1.25v2.5a2.5 2.5 0 0 0 2.5 2.5h7.5a2.5 2.5 0 0 0 2.5-2.5V25a2.5 2.5 0 0 0-2.5-2.5h-7.5a2.5 2.5 0 0 0-2.5 2.5v2.5H22.5A2.5 2.5 0 0 1 20 25V15a2.5 2.5 0 0 1 2.5-2.5h1.25V15a2.5 2.5 0 0 0 2.5 2.5Zm-15 5.625H5v-6.25h6.25v6.25Zm15 1.875h7.5v7.5h-7.5V25Zm0-17.5h7.5V15h-7.5V7.5Z'
			fill='#000'
		/>
	</Svg>
);

export default SvgComponent;
