<script lang="ts">
	export let id: string,
		label: string,
		type = "text",
		value = null,
		rows = null;
	const inputClass =
		"block w-full p-2 transition-all ease-out duration-500 border-2 border-gray-400 rounded focus:outline-none focus:border-red-500";
</script>

<div class="px-0 py-2 mx-0 my-1 w-full">
	<label for={id} class="text-xl font-bold block mb-2"><slot />{label}</label>
	{#if type === "textarea"}
		<textarea {id} {rows} {value} class={inputClass} />
		<!-- can't use {type} i.e dynamic type with bind -->
	{:else if type == "text"}
		<input type="text" {id} bind:value class={inputClass} />
	{:else if type == "email"}
		<input type="email" {id} bind:value class={inputClass} />
	{/if}
</div>
