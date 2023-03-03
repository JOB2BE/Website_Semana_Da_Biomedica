import React from 'react';
import ActivityCard from '../components/activitycard/ActivityCard';
import { useParams } from '../router';
import { activitiesSpeakersDay1 } from '../assets/objects/activitiesSpeakersDay1';
import { activitiesSpeakersDay2 } from '../assets/objects/activitiesSpeakersDay2';
import { activitiesSpeakersDay3 } from '../assets/objects/activitiesSpeakersDay3';

export default function ActivityPage() {
	const activitiesList = activitiesSpeakersDay1
		.concat(activitiesSpeakersDay2)
		.concat(activitiesSpeakersDay3);

	const { id } = useParams();
	const activity = activitiesList[id];

	return (
		<ActivityCard
			title={activity.name}
			type={activity.activityType}
			speakers={activity.speakers}
			description={activity.description}
			requirements={activity.requirements}
			schedule={activity.scheduleAndLocation}
			enrollmentLink={activity.enrollmentLink}
			id={id}
		/>
	);
}
