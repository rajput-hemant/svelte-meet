<script lang="ts">
	import type { Meetup } from "../../types";
	import MeetupItem from "./MeetupItem.svelte";

	export let meetups: Meetup[] = [];
</script>

<!-- meetups -->
<section class="gap-4 grid grid-cols-1 md:grid-cols-2 lg:mx-20 2xl:grid-cols-3">
	{#each meetups as meetup}
		<MeetupItem
			id={meetup.id}
			title={meetup.title}
			subtitle={meetup.subtitle}
			description={meetup.description}
			imageUrl={meetup.imageUrl}
			address={meetup.address}
			email={meetup.contactEmail}
			isFavourite={meetup.isFavourite}
			on:showDetails
		/>
	{/each}
</section>
