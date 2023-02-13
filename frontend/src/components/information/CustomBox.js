import React from 'react';
import { StyleSheet } from 'react-native';
<<<<<<< HEAD
import { Container, Stack } from 'native-base';
=======
import { Container } from 'native-base';
>>>>>>> 175c868c649dfe3dc1fe25baf2a88e261216858b
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
<<<<<<< HEAD
		<Stack direction={'row'} justifyContent={'center'} alignItems={'stretch'}>
			<Container {...props} style={styles.container}>
				{props.children}
			</Container>
		</Stack>
=======
		<Container {...props} style={styles.container}>
			{props.children}
		</Container>
>>>>>>> 175c868c649dfe3dc1fe25baf2a88e261216858b
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
<<<<<<< HEAD
	padding: PropTypes.number,
=======
>>>>>>> 175c868c649dfe3dc1fe25baf2a88e261216858b
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
<<<<<<< HEAD
	padding: 5,
=======
>>>>>>> 175c868c649dfe3dc1fe25baf2a88e261216858b
};
