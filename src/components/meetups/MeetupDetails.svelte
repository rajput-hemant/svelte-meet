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

<section class="m-24 md:mx-60">
	<div class="h-96">
		<img
			src={selectedMeetup.imageUrl}
			alt={selectedMeetup.title}
			class="w-full h-full object-cover rounded-xl"
		/>
	</div>
	<div class="text-center">
		<h1 class="text-4xl font-roboto-slab font-bold py-3">
			{selectedMeetup.title}
		</h1>
		<h2 class="text-xl text-stone-500 italic">
			{selectedMeetup.subtitle}- {selectedMeetup.address}
		</h2>
		<p class="text-xl py-5">{selectedMeetup.description}</p>
		<Button href="mailto:{selectedMeetup.email}">☎ Contact</Button>
		<Button on:click={() => dispatch("close")}>❌ Close</Button>
	</div>
</section>
