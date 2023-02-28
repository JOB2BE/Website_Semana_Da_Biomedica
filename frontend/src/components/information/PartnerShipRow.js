import React from 'react';
import { Row, Column, View } from 'native-base';
import PropTypes from 'prop-types';
import RoundBorderedImage from './RoundBorderedImage';

export default function PartnerShipRow(props) {
	const objects = props.objects;

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
						<RoundBorderedImage
							key={object.id}
							source={object.companyImage}
							containerRadius={props.containerRadius}
							link={'/Speaker/' + String(object.id)}
							size={'inherit'}
						></RoundBorderedImage>
					);
				})}
			</View>
		</Column>
	);
}

PartnerShipRow.propTypes = {
	objects: PropTypes.array,
	containerRadius: PropTypes.number,
};
PartnerShipRow.defaultProps = {};
