<script lang="ts">
	export let href = "",
		className = "",
		isFav = false,
		type: "button" | "submit" | "reset" = "button";

	$: classes =
		className +
		(isFav
			? " border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
			: " border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white") +
		" border-2 p-2 rounded shadow-md font-bold focus:outline-none";
</script>

{#if href}
	<a {href} class={classes}><slot /></a>
{:else}
	<button {type} class={classes} on:click><slot /></button>
{/if}
