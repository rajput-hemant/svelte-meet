<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import { isEmpty, isValidEmail } from "../../utils/validation";

	import meetups from "../../stores/meetups-store";
	import Button from "../ui/Button.svelte";
	import Modal from "../ui/Modal.svelte";
	import TextInput from "../ui/TextInput.svelte";

	const dispatch = createEventDispatcher();

	let title = "",
		subtitle = "",
		address = "",
		imageUrl = "",
		email = "",
		description = "";

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
			email,
			description,
			isFavourite: false,
		};

		meetups.addMeetup(meetupData);
		dispatch("cancel");
	}
</script>

<Modal title="Add Meetup" on:cancel>
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
	<div slot="footer">
		<Button on:click={submitForm} {disabled}>💾 Save</Button>
	</div>
</Modal>
