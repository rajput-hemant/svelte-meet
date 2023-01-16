<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import { flip } from "svelte/animate";
	import { scale } from "svelte/transition";

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
	<div class="flex">
		<MeetupFilter on:select={setFilter} />
	</div>
	<Button on:click={() => dispatch("add")}>➕ Add New Meetup</Button>
</div>

<!-- meetups -->
{#if filteredMeetups.length === 0}
	<div class="flex justify-center pt-20" transition:scale>
		<h1 class="text-4xl font-bold">No meetups found.</h1>
	</div>
{:else}
	<section
		class="grid grid-cols-1 md:gap-4 md:grid-cols-2 lg:mx-20 2xl:grid-cols-3"
	>
		{#each filteredMeetups as meetup (meetup.id)}
			<div transition:scale animate:flip={{ duration: 300 }}>
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
			</div>
		{/each}
	</section>
{/if}
