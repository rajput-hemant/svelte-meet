<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import Button from "./Button.svelte";

	export let title: string;

	const dispatch = createEventDispatcher();

	function closeModal() {
		dispatch("cancel");
	}
</script>

<div
	on:click={closeModal}
	aria-hidden="true"
	class="fixed top-0 left-0 w-full h-screen bg-black opacity-75 z-10"
/>
<div
	class="fixed w-3/4 top-16 left-[12.5%] max-h-[90vh] bg-white border-5 z-50 shadow-md rounded-lg lg:w-1/2 lg:left-[25%]"
>
	<h1
		class="p-4 m-0 border-b border-slate-300 font-roboto-slab text-center font-bold text-3xl"
	>
		{title}
	</h1>
	<div class="p-4"><slot /></div>
	<footer class="pb-4 flex gap-4 justify-center">
		<slot name="footer" />
		<Button on:click={closeModal}>❌ Close</Button>
	</footer>
</div>
