import { React, useState } from 'react';
import { Column, View, Pressable } from 'native-base';
import PropTypes from 'prop-types';
import RoundBorderedImage from './RoundBorderedImage';

export default function UserRow(props) {
	const objects = props.objects;
	const [hoverText, setHoverText] = useState(undefined);

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
				{objects.map((object, index) => {
					return (
						<Pressable
							key={object.id}
							onHoverIn={() => {
								setHoverText(object.name);
							}}
							onHoverOut={() => {
								setHoverText(undefined);
							}}
						>
							<RoundBorderedImage
								source={object.profileImage}
								containerRadius={props.containerRadius}
								link={'/User/' + String(object.id)}
								size={'inherit'}
								hoverText={hoverText}
							></RoundBorderedImage>
						</Pressable>
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
