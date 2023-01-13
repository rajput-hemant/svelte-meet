<script lang="ts">
	export let href = "",
		caption = "",
		className = "",
		type: "button" | "submit" | "reset" = "button";

	const classes =
		className +
		" !bg-pink-500 p-2 rounded shadow-md text-white font-bold hover:!bg-pink-600 focus:outline-none";
</script>

{#if href}
	<a {href} class={classes}>{caption}</a>
{:else}
	<button {type} class={classes}>{caption}</button>
{/if}
