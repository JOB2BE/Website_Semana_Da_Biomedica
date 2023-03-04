import React from 'react';
import { useParams } from '../../router';
import { colabObjects } from '../../assets/objects/colabObjects';
import SpeakerPage from '../../pages/SpeakerPage';

export default function UserController() {
	const { id } = useParams();

	const demouser = colabObjects[id];
	console.log(demouser);

	return (
		<SpeakerPage
			profileImage={require(`../../assets/images/colabs/${String(id)}.png`)}
			name={demouser.name}
			typeOfSpeaker={demouser.typeOfSpeaker}
			position={demouser.department}
			description={demouser.description}
			researchInterests={demouser.researchInterests}
			contacts={demouser.contacts}
		/>
	);
}
