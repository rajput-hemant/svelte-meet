<script lang="ts">
	import "./styles/global.css";
	import Header from "./components/ui/Header.svelte";
	import MeetupItem from "./components/meetups/MeetupItem.svelte";

	const meetups = [
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
		},
	];
</script>

<Header />

<section class="mt-20">
	{#each meetups as meetup}
		<MeetupItem
			title={meetup.title}
			subtitle={meetup.subtitle}
			description={meetup.description}
			imageUrl={meetup.imageUrl}
			address={meetup.address}
			email={meetup.contactEmail}
		/>
	{/each}
</section>
