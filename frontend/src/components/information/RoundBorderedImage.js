import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Center, Image, Tooltip } from 'native-base';
import PropTypes from 'prop-types';
import theme from '../../theme';
import { Link } from '../../router';
import { Link as NBLink } from 'native-base';

export default function RoundBorderedImage(props) {
	const styles = StyleSheet.create({
		container: {
			borderRadius: props.borderRadius,
			shadowColor: props.shadowColor,
			shadowOffset: props.shadowOffset,
			shadowRadius: props.shadowRadius,
			shadowOpacity: props.shadowOpacity,
			elevation: props.elevation,
			padding: props.padding,
			width: props.containerRadius,
			height: props.containerRadius,
		},
		hoverBackground: {
			backgroundColor: theme.colors.engGrey[0],
			shadowOffset: {
				width: 10,
				height: 14,
			},
		},
	});

	return props.externalURL ? (
		<NBLink href={props.link} style={{ textDecoration: 'none' }} isExternal>
			{props.hoverText ? (
				<Center {...props} style={[styles.container, styles.hoverBackground]}>
					<Text>{props.hoverText}</Text>
				</Center>
			) : (
				<Center style={styles.container}>
					<Tooltip label={props.name}>
						<Image {...props} resizeMode={props.resizeMode}></Image>
					</Tooltip>
				</Center>
			)}
		</NBLink>
	) : (
		<Link to={props.link} style={{ textDecoration: 'none' }}>
			{props.hoverText ? (
				<Center {...props} style={[styles.container, styles.hoverBackground]}>
					<Text>{props.hoverText}</Text>
				</Center>
			) : (
				<Center style={styles.container}>
					<Tooltip label={props.name}>
						<Image {...props} resizeMode={props.resizeMode}></Image>
					</Tooltip>
				</Center>
			)}
		</Link>
	);
}

RoundBorderedImage.propTypes = {
	borderRadius: PropTypes.number,
	backgroundColor: PropTypes.string,
	shadowColor: PropTypes.string,
	shadowOffset: PropTypes.object,
	shadowRadius: PropTypes.number,
	shadowOpacity: PropTypes.number,
	elevation: PropTypes.number,
	padding: PropTypes.number,
	containerRadius: PropTypes.number,
	resizeMode: PropTypes.string,
	borderColor: PropTypes.string,
	borderWidth: PropTypes.number,
	link: PropTypes.string,
	hoverText: PropTypes.string,
};
RoundBorderedImage.defaultProps = {
	borderRadius: 1500,
	backgroundColor: theme.colors.medYellow.pastel,
	shadowColor: theme.colors.dryBlue[0],
	shadowOffset: {
		width: 7,
		height: 7,
	},
	shadowRadius: 0.5,
	shadowOpacity: 0.7,
	elevation: 10,
	resizeMode: 'contain',
	borderColor: theme.colors.medYellow[0],
	borderWidth: 5,
};
