import { React, useState } from 'react';
import { Column, View, Pressable } from 'native-base';
import PropTypes from 'prop-types';
import RoundBorderedImage from './RoundBorderedImage';

export default function UserRow(props) {
	return (
		<Column {...props}>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'center',
					alignItems: 'center',
					flexWrap: 'wrap',
					gap: 25,
				}}
			>
				{props.objects.map((object) => {
					return (
						<RoundBorderedImage
							key={object.id}
							source={require(`../../assets/images/colabs/${String(object.id)}.png`)}
							containerRadius={props.containerRadius}
							link={'/User/' + String(object.id)}
							size={'inherit'}
							name={object.name}
						></RoundBorderedImage>
					);
				})}
			</View>
		</Column>
	);
}

UserRow.propTypes = {
	objects: PropTypes.array,
	containerRadius: PropTypes.number,
};
UserRow.defaultProps = {};
