<script lang="ts">
	import MeetupItem from "./MeetupItem.svelte";

	export let meetups = [];
</script>

<!-- meetups -->
<section class="w-full gap-4 grid grid-cols-1 md:grid-cols-2">
	{#each meetups as meetup}
		<MeetupItem
			title={meetup.title}
			subtitle={meetup.subtitle}
			description={meetup.description}
			imageUrl={meetup.imageUrl}
			address={meetup.address}
			email={meetup.contactEmail}
		/>
	{/each}
</section>
