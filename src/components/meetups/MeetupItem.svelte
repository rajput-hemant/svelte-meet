<script lang="ts">
	import Button from "../ui/Button.svelte";

	export let title: string,
		subtitle: string,
		imageUrl: string,
		description: string,
		address: string,
		email: string;
</script>

<article class="shadow-md rounded-md bg-white m-4">
	<header class="p-4">
		<h1 class="text-2xl mx-0 m-2 font-roboto-slab font-bold">{title}</h1>
		<h2 class="text-lg text-slate-500 mx-0 my-2">{subtitle}</h2>
		<p class="text-slate-600">{address}</p>
	</header>

	<!-- h1.is-favorite {
    background: #01a129;
    color: white;
    padding: 0 0.5rem;
    border-radius: 5px;
  } -->
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
		<p class="text-xl m-0 text-right">{description}</p>
	</div>
	<footer class="p-4">
		<Button caption="Show Details" />
		<Button caption="Favourite" />
		<Button href="mailto:{email}" caption="Contact" className="p-2.5" />
	</footer>
</article>
