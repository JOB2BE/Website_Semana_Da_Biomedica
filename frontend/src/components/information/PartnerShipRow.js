import React from 'react';
import { Column, View } from 'native-base';
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
							key={index}
							source={object.companyImage}
							containerRadius={props.containerRadius}
							link={object.url}
							size={'inherit'}
							name={object.name}
							externalURL={true}
							isHover={false}
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
