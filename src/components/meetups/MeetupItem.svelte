<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import meetups from "../../stores/meetups-store";
	import Badge from "../ui/Badge.svelte";
	import Button from "../ui/Button.svelte";

	export let id: string,
		title: string,
		subtitle: string,
		imageUrl: string,
		description: string,
		address: string,
		email: string,
		isFavourite: boolean;

	const dispatch = createEventDispatcher();

	function toggleFavourite() {
		meetups.toggleFavourite(id);
	}
</script>

<article class="shadow-md rounded-md bg-white m-4">
	<header class="p-4">
		<h1 class=" flex text-2xl mx-0 m-2 font-roboto-slab font-bold">
			{title}
			{#if isFavourite}
				<Badge>🤍 Favourite</Badge>
			{/if}
		</h1>
		<h2 class="text-lg text-slate-500 mx-0 my-2">{subtitle}</h2>
		<p class="text-slate-600">{address}</p>
	</header>

	<!-- image -->
	<div class="w-full h-56 p-2">
		<img
			src={imageUrl}
			alt={title}
			class="w-full h-full object-cover rounded-md shadow-md"
		/>
	</div>

	<!-- content -->
	<div class="p-4">
		<p class="text-xl m-0 text-right truncate">{description}</p>
	</div>
	<footer class="pb-4">
		<div class="flex justify-around">
			<Button on:click={() => dispatch("showDetails", { id })}
				>🕵🏻‍♀️ Show Details</Button
			>
			<Button on:click={() => dispatch("edit", { id })}>✏ Edit Meetup</Button>
			<Button isFav={isFavourite} on:click={toggleFavourite}>
				{isFavourite ? "❌  Unfavourite" : "❤️ Favourite"}
			</Button>
			<!-- <Button href="mailto:{email}">☎ Contact</Button> -->
		</div>
	</footer>
</article>
