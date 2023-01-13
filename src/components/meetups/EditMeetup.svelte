<script lang="ts">
	import { createEventDispatcher } from "svelte";

	import Button from "../ui/Button.svelte";
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

<form
	on:submit|preventDefault={submitForm}
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
	<Button type="submit" className="w-20">Save</Button>
</form>
