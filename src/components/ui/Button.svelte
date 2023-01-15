<script lang="ts">
	export let href = "",
		className = "",
		isFav = false,
		disabled = false,
		type: "button" | "submit" | "reset" = "button";

	$: classes =
		className +
		(disabled ? " !bg-gray-200 border-gray-400 text-gray-400" : "") +
		(isFav
			? " border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
			: " border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white") +
		" border-2 p-2 rounded-md shadow-md font-bold focus:outline-none";
</script>

{#if href}
	<a {href} class="p-2.5 {classes}"><slot /></a>
{:else}
	<button {type} class={classes} on:click {disabled}><slot /></button>
{/if}
