import React from 'react';
import { useParams } from '../router';
import { activitiesSpeakersDay1 } from '../../assets/objects/activitiesSpeakersDay1';
import { activitiesSpeakersDay2 } from '../../assets/objects/activitiesSpeakersDay2';
import { activitiesSpeakersDay3 } from '../../assets/objects/activitiesSpeakersDay3';

export default function SpeakerController() {
	const activitiesList = activitiesSpeakersDay1
		.concat(activitiesSpeakersDay2)
		.concat(activitiesSpeakersDay3);

	const { id } = useParams();
	const activity = activitiesList[id];

	console.log(activity.name);
	return (

	);
}
