<script lang="ts">
	import "./styles/global.css";
	import Header from "./components/ui/Header.svelte";
	import MeetupGrid from "./components/meetups/MeetupGrid.svelte";
	import Button from "./components/ui/Button.svelte";
	import EditMeetup from "./components/meetups/EditMeetup.svelte";

	let meetups = [
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
	];

	let showEditMeetup: boolean = false;

	function addMeetup(e: CustomEvent) {
		const meetup = {
			id: Math.random().toString(),
			title: e.detail.title,
			subtitle: e.detail.subtitle,
			address: e.detail.address,
			imageUrl: e.detail.imageUrl,
			description: e.detail.description,
			contactEmail: e.detail.email,
			isFavourite: false,
		};

		meetups = [...meetups, meetup];
		showEditMeetup = false;
	}

	function onToggleFavourite(e: CustomEvent) {
		const id = e.detail;
		const meetup = meetups.find((meetup) => meetup.id === id);
		const meetupIdx = meetups.findIndex((meetup) => meetup.id === id);
		meetup.isFavourite = !meetup.isFavourite;
		meetups[meetupIdx] = meetup;
	}
</script>

<Header />

<main class="mt-20">
	<div class="flex justify-center">
		<Button on:click={() => (showEditMeetup = !showEditMeetup)}
			>Add New Meetup</Button
		>
	</div>
	{#if showEditMeetup}
		<EditMeetup on:save={addMeetup} />
	{/if}
	<MeetupGrid {meetups} on:toggleFavourite={onToggleFavourite} />
</main>
