import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgComponent = (props) => (
	<Svg
		width={30}
		height={25}
		fill='none'
		viewBox='0 0 38 30'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<Path
			d='M24.25 12.5h7.5a2.5 2.5 0 0 0 2.5-2.5V2.5a2.5 2.5 0 0 0-2.5-2.5h-7.5a2.5 2.5 0 0 0-2.5 2.5V5H20.5a5.016 5.016 0 0 0-5 5v3.75h-3.75v-1.875a2.5 2.5 0 0 0-2.5-2.5H3a2.5 2.5 0 0 0-2.5 2.5v6.25a2.5 2.5 0 0 0 2.5 2.5h6.25a2.5 2.5 0 0 0 2.5-2.5V16.25h3.75V20a5.016 5.016 0 0 0 5 5h1.25v2.5a2.5 2.5 0 0 0 2.5 2.5h7.5a2.5 2.5 0 0 0 2.5-2.5V20a2.5 2.5 0 0 0-2.5-2.5h-7.5a2.5 2.5 0 0 0-2.5 2.5v2.5H20.5A2.5 2.5 0 0 1 18 20V10a2.5 2.5 0 0 1 2.5-2.5h1.25V10a2.5 2.5 0 0 0 2.5 2.5Zm-15 5.625H3v-6.25h6.25v6.25Zm15 1.875h7.5v7.5h-7.5V20Zm0-17.5h7.5V10h-7.5V2.5Z'
			fill='#fff'
		/>
	</Svg>
);

export default SvgComponent;
