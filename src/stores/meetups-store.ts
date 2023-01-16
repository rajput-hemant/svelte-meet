import { writable, type Writable } from "svelte/store";

import type { Meetup } from "../types";

const meetups: Writable<Meetup[]> = writable([]);

const meetupsStore = {
	subscribe: meetups.subscribe,

	addMeetup: (meetupData: Meetup) => {
		meetups.update((items) => {
			return [meetupData, ...items];
		});
	},

	setMeetups: (meetupArray: Meetup[]) => {
		meetups.set(meetupArray);
	},

	updateMeetup: (id: string, meetupData: Meetup) => {
		meetups.update((items) => {
			const meetupIdx = items.findIndex((meetup) => meetup.id === id);
			const updatedMeetup = { ...items[meetupIdx], ...meetupData };
			const updatedMeetups = [...items];
			updatedMeetups[meetupIdx] = updatedMeetup;

			return updatedMeetups;
		});
	},

	deleteMeetup: (id: string) => {
		meetups.update((items) => {
			return items.filter((meetup) => meetup.id !== id);
		});
	},

	toggleFavourite: (id: string) => {
		meetups.update((items) => {
			const meetup = items.find((meetup) => meetup.id === id);
			const meetupIdx = items.findIndex((meetup) => meetup.id === id);
			meetup.isFavourite = !meetup.isFavourite;
			items[meetupIdx] = meetup;
			return items;
		});
	},
};

export default meetupsStore;
