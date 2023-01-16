<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import { fade, fly } from "svelte/transition";

	export let title: string;

	const dispatch = createEventDispatcher();

	function closeModal() {
		dispatch("close");
	}
</script>

<!-- Backdrop -->
<div
	on:click={closeModal}
	aria-hidden="true"
	class="fixed top-0 left-0 w-full h-screen bg-black opacity-75 z-10"
	transition:fade
/>
<!-- Modal -->
<div
	class="fixed w-full top-0 bg-white border-5 z-50 shadow-md rounded-lg sm:w-3/4 sm:top-16 sm:left-[12.5%] sm:max-w-[90vh] lg:w-1/2 lg:left-[25%]"
	transition:fly={{ y: 100, duration: 300 }}
>
	<h1
		class="p-4 m-0 border-b border-slate-300 font-roboto-slab text-center font-bold text-3xl"
	>
		{title}
	</h1>
	<div class="p-4"><slot /></div>
	<slot name="footer" />
</div>
