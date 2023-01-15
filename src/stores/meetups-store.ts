import { writable, type Writable } from "svelte/store";
import { v4 as uuid } from "uuid";
import type { Meetup } from "../types";

const meetups: Writable<Meetup[]> = writable([
	{
		id: "m1",
		title: "Coding Bootcamp",
		subtitle: "Learn to code in 2 hours",
		description:
			"In this meetup, we will have some experts that teach you how to code!",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Caffe_Nero_coffee_bar%2C_High_St%2C_Sutton%2C_Surrey%2C_Greater_London.JPG/800px-Caffe_Nero_coffee_bar%2C_High_St%2C_Sutton%2C_Surrey%2C_Greater_London.JPG",
		address: "27th Nerd Road, 32523 New York",
		contactEmail: "code@test.com",
		isFavourite: false,
	},
	{
		id: "m2",
		title: "Swim Together",
		subtitle: "Let's go for some swimming",
		description: "We will simply swim some rounds!",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Olympic_swimming_pool_%28Tbilisi%29.jpg/800px-Olympic_swimming_pool_%28Tbilisi%29.jpg",
		address: "27th Nerd Road, 32523 New York",
		contactEmail: "swim@test.com",
		isFavourite: false,
	},
]);

const meetupsStore = {
	subscribe: meetups.subscribe,

	addMeetup: (meetupData: Meetup) => {
		const newMeetup = {
			...meetupData,
			id: uuid(),
			isFavourite: false,
		};
		meetups.update((items) => {
			return [newMeetup, ...items];
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
