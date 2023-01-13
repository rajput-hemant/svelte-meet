<script lang="ts">
	import { createEventDispatcher } from "svelte";

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

	function submitForm() {
		dispatch("save", {
			title,
			subtitle,
			address,
			imageUrl,
			email,
			description,
		});
	}
</script>

<Modal title="Add Meetup" on:cancel>
	<form on:submit|preventDefault={submitForm} class="flex flex-col">
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
	</form>
	<div slot="footer">
		<Button className="w-20" on:click={submitForm}>💾 Save</Button>
	</div>
</Modal>
