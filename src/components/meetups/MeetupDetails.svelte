<script lang="ts">
	import { createEventDispatcher, onDestroy } from "svelte";
	import type { Meetup } from "../../types";
	import Button from "../ui/Button.svelte";
	import meetups from "../../stores/meetups-store";

	export let id: string;

	let selectedMeetup: Meetup;

	const unsubscribe = meetups.subscribe((meetups) => {
		selectedMeetup = meetups.find((meetup) => meetup.id === id);
	});

	const dispatch = createEventDispatcher();

	onDestroy(() => {
		unsubscribe();
	});
</script>

<section>
	<div>
		<img src={selectedMeetup.imageUrl} alt={selectedMeetup.title} />
	</div>
	<div>
		<h1>{selectedMeetup.title}</h1>
		<h2>{selectedMeetup.subtitle}- {selectedMeetup.address}</h2>
		<p>{selectedMeetup.description}</p>
		<Button href="mailto:{selectedMeetup.contactEmail}">☎ Contact</Button>
		<Button on:click={() => dispatch("close")}>❌ Close</Button>
	</div>
</section>
