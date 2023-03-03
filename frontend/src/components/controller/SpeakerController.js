import React from 'react';
import { useParams } from '../../router';
import { activitiesSpeakersDay1 } from '../../assets/objects/activitiesSpeakersDay1';
import { activitiesSpeakersDay2 } from '../../assets/objects/activitiesSpeakersDay2';
import { activitiesSpeakersDay3 } from '../../assets/objects/activitiesSpeakersDay3';
import SpeakerPage from '../../pages/SpeakerPage';

export default function SpeakerController() {
	const activitiesList = activitiesSpeakersDay1
		.concat(activitiesSpeakersDay2)
		.concat(activitiesSpeakersDay3);

	const { idActivity, idSpeaker } = useParams();
	const activity = activitiesList[idActivity];
	const speaker = activity.speakers[idSpeaker];

	return (
		<SpeakerPage
			profileImage={require('..//../assets/images/speaker/' + String(speaker.name) + '.png')}
			name={speaker.name}
			typeOfSpeaker={speaker.typeOfSpeaker}
			position={speaker.position}
			description={speaker.description}
			researchInterests={speaker.researchInterests}
			contacts={speaker.contacts}
		/>
	);
}
