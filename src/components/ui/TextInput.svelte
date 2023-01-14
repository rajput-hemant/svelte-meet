<script lang="ts">
	export let id: string,
		label: string,
		type = "text",
		value = null,
		rows = null,
		valid = true,
		validityMessage = null;

	let isActive = false;

	$: inputClass =
		"block w-full p-2 transition-all ease-out duration-500 border-2 rounded focus:outline-none " +
		(valid
			? "focus:border-green-500"
			: "focus:border-red-500 focus:bg-red-200");
</script>

<div class="my-1 w-full">
	<label for={id} class="text-xl font-bold block mb-2"><slot />{label}</label>
	{#if type === "textarea"}
		<textarea
			{id}
			{rows}
			bind:value
			class={inputClass}
			on:blur={() => (isActive = true)}
		/>
		<!-- can't use {type} i.e dynamic type with bind -->
	{:else if type == "text"}
		<input
			type="text"
			{id}
			bind:value
			class={inputClass}
			on:blur={() => (isActive = true)}
		/>
	{:else if type == "email"}
		<input
			type="email"
			{id}
			bind:value
			class={inputClass}
			on:blur={() => (isActive = true)}
		/>
	{/if}
	{#if isActive && validityMessage && !valid}
		<p class="m-0 text-red-500 text-sm italic">{validityMessage}</p>
	{/if}
</div>
