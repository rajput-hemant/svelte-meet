<script lang="ts">
	import "./styles/global.css";
	import Header from "./components/ui/Header.svelte";
	import TextInput from "./components/ui/TextInput.svelte";
	import MeetupGrid from "./components/meetups/MeetupGrid.svelte";
	import Button from "./components/ui/Button.svelte";

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

	let title = "",
		subtitle = "",
		address = "",
		imageUrl = "",
		email = "",
		description = "";

	function addMeetup() {
		const meetup = {
			id: Math.random().toString(),
			title,
			subtitle,
			address,
			imageUrl,
			description,
			contactEmail: email,
		};

		meetups = [...meetups, meetup];
	}
</script>

<Header />

<main class="mt-20">
	<form
		on:submit|preventDefault={addMeetup}
		class="flex flex-col w-[30rem] m-auto items-center "
	>
		<TextInput id="title" bind:value={title} label="Title" />
		<TextInput id="subtitle" bind:value={subtitle} label="Subtitle" />
		<TextInput id="address" bind:value={address} label="Address" />
		<TextInput id="image" bind:value={imageUrl} label="Image" />
		<TextInput id="email" type="email" bind:value={email} label="Email" />
		<TextInput
			id="description"
			rows="3"
			type="textarea"
			label="Description"
			bind:value={description}
		/>
		<Button type="submit" caption="Save" className="w-20" />
	</form>
	<MeetupGrid {meetups} />
</main>
