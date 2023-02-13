import React from 'react';
import { StyleSheet } from 'react-native';
import { Container } from 'native-base';
import PropTypes from 'prop-types';
import theme from '../../theme';

export default function CustomBox(props) {
	const styles = StyleSheet.create({
		container: {
			borderRadius: props.borderRadius,
			backgroundColor: props.backgroundColor,
			shadowColor: props.shadowColor,
			shadowOffset: props.shadowOffset,
			shadowRadius: props.shadowRadius,
			shadowOpacity: props.shadowOpacity,
			elevation: props.elevation,
		},
	});

	return (
		<Container {...props} style={styles.container}>
			{props.children}
		</Container>
	);
}

CustomBox.propTypes = {
	borderRadius: PropTypes.number,
	backgroundColor: PropTypes.string,
	shadowColor: PropTypes.string,
	shadowOffset: PropTypes.object,
	shadowRadius: PropTypes.number,
	shadowOpacity: PropTypes.number,
	elevation: PropTypes.number,
	children: PropTypes.element,
};
CustomBox.defaultProps = {
	borderRadius: 15,
	backgroundColor: theme.colors.medYellow.pastel,
	shadowColor: theme.colors.dryBlue[0],
	shadowOffset: {
		width: 1,
		height: 2,
	},
	shadowRadius: 0.5,
	shadowOpacity: 0.2,
	elevation: 10,
	children: <></>,
};
