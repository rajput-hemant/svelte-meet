<script lang="ts">
	import MeetupItem from "./MeetupItem.svelte";

	type Meetup = {
		id: string;
		title: string;
		subtitle: string;
		description: string;
		imageUrl: string;
		address: string;
		contactEmail: string;
		isFavourite: boolean;
	}[];

	export let meetups: Meetup = [];
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
			on:toggleFavourite
		/>
	{/each}
</section>
