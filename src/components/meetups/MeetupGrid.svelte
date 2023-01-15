<script lang="ts">
	import { createEventDispatcher } from "svelte";

	import type { Meetup } from "../../types";

	import Button from "../ui/Button.svelte";
	import MeetupItem from "./MeetupItem.svelte";
	import MeetupFilter from "./MeetupFilter.svelte";

	export let meetups: Meetup[] = [];

	const dispatch = createEventDispatcher();

	let favsOnly = false;

	$: filteredMeetups = favsOnly
		? meetups.filter((m) => m.isFavourite)
		: meetups;

	function setFilter(e: CustomEvent) {
		favsOnly = e.detail === 1;
	}
</script>

<div class="flex justify-between py-2 px-4 lg:px-24">
	<Button on:click={() => dispatch("add")}>➕ Add New Meetup</Button>
	<div class="flex">
		<MeetupFilter on:select={setFilter} />
	</div>
</div>

<!-- meetups -->
<section
	class="grid grid-cols-1 md:gap-4 md:grid-cols-2 lg:mx-20 2xl:grid-cols-3"
>
	{#each filteredMeetups as meetup}
		<MeetupItem
			id={meetup.id}
			title={meetup.title}
			subtitle={meetup.subtitle}
			description={meetup.description}
			imageUrl={meetup.imageUrl}
			address={meetup.address}
			email={meetup.email}
			isFavourite={meetup.isFavourite}
			on:showDetails
			on:edit
		/>
	{/each}
</section>
