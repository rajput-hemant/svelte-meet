<script>
	import { slide } from "svelte/transition";
</script>

<span
	class="block mx-1 px-2 py-0.5 border bg-pink-600 text-white text-sm  rounded-md h-min"
	transition:slide
>
	<slot />
</span>
