<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import Button from "../ui/Button.svelte";

	const dispatch = createEventDispatcher();

	let selectedButton = 0;
	let activeclass = "!text-white !bg-pink-600";
</script>

<Button
	on:click={() => {
		selectedButton = 0;
		dispatch("select", 0);
	}}
	className="w-16 mr-0 pr-0 rounded-tr-none rounded-br-none md:w-28 {selectedButton ===
	0
		? activeclass
		: ''}">All</Button
>
<Button
	on:click={() => {
		selectedButton = 1;
		dispatch("select", 1);
	}}
	className="w-24 ml-0 pl-0 rounded-tl-none rounded-bl-none md:w-28 {selectedButton ===
	1
		? activeclass
		: ''}">Favourites</Button
>
