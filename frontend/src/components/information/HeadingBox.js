import React from 'react';
import { StyleSheet } from 'react-native';
import { Stack, Heading } from 'native-base';
import PropTypes from 'prop-types';
import theme from '../../theme';
import CustomBox from './CustomBox';

export default function HeadingBox(props) {
	const styles = StyleSheet.create({
		heading: {
			color: props.headingColor,
		},
	});

	return (
		<CustomBox {...props}>
			{' '}
			{/* //Inherit the Custom Box Component */}
			<Stack direction={'column'} space={props.stackSpace}>
				<Heading style={styles.heading} size={props.headingSize}>
					{props.headingText}
				</Heading>

				{props.children}
			</Stack>
		</CustomBox>
	);
}

HeadingBox.propTypes = {
	headingColor: PropTypes.string,
	children: PropTypes.element,
	stackSpace: PropTypes.number,
	headingSize: PropTypes.string,
	headingText: PropTypes.string,
};
HeadingBox.defaultProps = {
	headingColor: theme.colors.dryBlue[0],
	headingSize: 'md',
	children: <></>,
	stackSpace: 10,
	headingText: 'Replace Me!!! \n (ﾉಥ益ಥ）ﾉ彡┻━┻',
};
