<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import { isEmpty, isValidEmail } from "../../utils/validation";

	import meetups from "../../stores/meetups-store";
	import Button from "../ui/Button.svelte";
	import Modal from "../ui/Modal.svelte";
	import TextInput from "../ui/TextInput.svelte";

	export let id: string;

	let title = "",
		subtitle = "",
		address = "",
		imageUrl = "",
		email = "",
		description = "";

	if (id) {
		const unsubscribe = meetups.subscribe((meetups) => {
			const selectedMeetup = meetups.find((meetup) => meetup.id === id);
			if (selectedMeetup) {
				title = selectedMeetup.title;
				subtitle = selectedMeetup.subtitle;
				address = selectedMeetup.address;
				imageUrl = selectedMeetup.imageUrl;
				email = selectedMeetup.email;
				description = selectedMeetup.description;
			}
		});

		unsubscribe();
	}

	const dispatch = createEventDispatcher();

	$: disabled =
		isEmpty(title) ||
		isEmpty(subtitle) ||
		isEmpty(address) ||
		isEmpty(imageUrl) ||
		isEmpty(description) ||
		!isValidEmail(email);

	function submitForm() {
		const meetupData = {
			title,
			subtitle,
			address,
			imageUrl,
			description,
			email,
			isFavourite: false,
		};

		if (id) {
			meetups.updateMeetup(id, meetupData);
		} else {
			meetups.addMeetup(meetupData);
		}

		dispatch("close");
	}

	function deleteMeetup() {
		meetups.deleteMeetup(id);
		dispatch("close");
	}

	function closeModal() {
		dispatch("close");
	}
</script>

<Modal title="Add Meetup" on:close>
	<form on:submit|preventDefault={submitForm} class="flex flex-col">
		<TextInput
			id="title"
			bind:value={title}
			label="Title"
			valid={!isEmpty(title)}
			validityMessage="Please enter a valid Title."
		/>
		<TextInput
			id="subtitle"
			bind:value={subtitle}
			label="Subtitle"
			valid={!isEmpty(subtitle)}
			validityMessage="Please enter a valid Subtitle."
		/>
		<TextInput
			id="address"
			bind:value={address}
			label="Address"
			valid={!isEmpty(address)}
			validityMessage="Please enter a valid Address."
		/>
		<TextInput
			id="image"
			bind:value={imageUrl}
			label="Image"
			valid={!isEmpty(imageUrl)}
			validityMessage="Please enter a valid Image Url."
		/>
		<TextInput
			id="email"
			type="email"
			bind:value={email}
			label="Email"
			valid={isValidEmail(email)}
			validityMessage="Please enter a valid Email."
		/>
		<TextInput
			id="description"
			rows="3"
			type="textarea"
			label="Description"
			valid={!isEmpty(description)}
			bind:value={description}
			validityMessage="Please enter a valid Description."
		/>
	</form>
	<footer slot="footer" class="pb-4 flex justify-center gap-4">
		<Button on:click={submitForm} {disabled}>💾 Save</Button>
		{#if id}
			<Button on:click={deleteMeetup}>🗑 Delete</Button>
		{/if}
		<Button on:click={closeModal}>❌ Close</Button>
	</footer>
</Modal>
