import React from 'react';
import { StyleSheet } from 'react-native';
import { Row, Heading, Column } from 'native-base';
import PropTypes from 'prop-types';
import theme from '../../theme';

export default function StyledBox(props) {
	const styles = StyleSheet.create({
		heading: {
			color: props.headingColor,
		},
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
		<Column space={props.stackSpace} style={styles.container} flexWrap={'wrap'} {...props}>
			{props.headingText !== '' && (
				<Heading style={styles.heading} size={props.headingSize}>
					{props.headingText}
				</Heading>
			)}
			<Row alignSelf={'stretch'} flexWrap={'wrap'}>
				{props.children}
			</Row>
		</Column>
	);
}

StyledBox.propTypes = {
	headingColor: PropTypes.string,
	stackSpace: PropTypes.number,
	headingSize: PropTypes.string,
	headingText: PropTypes.string,
	borderRadius: PropTypes.number,
	backgroundColor: PropTypes.string,
	shadowColor: PropTypes.string,
	shadowOffset: PropTypes.object,
	shadowRadius: PropTypes.number,
	shadowOpacity: PropTypes.number,
	elevation: PropTypes.number,
	padding: PropTypes.number,
};
StyledBox.defaultProps = {
	headingColor: theme.colors.dryBlue[0],
	headingSize: 'md',
	stackSpace: 10,
	headingText: '',
	borderRadius: 15,
	backgroundColor: theme.colors.medYellow.pastel,
	shadowColor: theme.colors.dryBlue[0],
	shadowOffset: {
		width: 7,
		height: 7,
	},
	shadowRadius: 0.5,
	shadowOpacity: 0.7,
	elevation: 10,
	padding: 5,
};