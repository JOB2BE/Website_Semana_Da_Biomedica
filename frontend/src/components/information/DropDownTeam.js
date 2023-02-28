import React from 'react';
import { StyleSheet } from 'react-native';
import { Row, Heading, Column } from 'native-base';
import PropTypes from 'prop-types';
import theme from '../../theme';

export default function DropDownTeam(props) {
	const styles = StyleSheet.create({
		heading: {
			color: theme.colors.dryBlue[0],
		},
	});

	return (
		<Row alignSelf={'stretch'} flexWrap={'wrap'}>
			{/* {icon} */}
			<Heading font style={styles.heading}>
				{props.year}
			</Heading>
		</Row>
	);
}

DropDownTeam.propTypes = {
	year: PropTypes.string,
	team: PropTypes.object,
};
DropDownTeam.defaultProps = {
	team: {},
};
