<script lang="ts">
	import "./styles/global.css";
	import meetups from "./stores/meetups-store";
	import Header from "./components/ui/Header.svelte";
	import MeetupGrid from "./components/meetups/MeetupGrid.svelte";
	import Button from "./components/ui/Button.svelte";
	import EditMeetup from "./components/meetups/EditMeetup.svelte";

	let showEditMeetup: boolean = false;

	function closeModal() {
		showEditMeetup = false;
	}
</script>

<Header />

<main class="mt-20">
	<div class="flex justify-center">
		<Button on:click={() => (showEditMeetup = !showEditMeetup)}
			>➕ Add New Meetup</Button
		>
	</div>
	{#if showEditMeetup}
		<EditMeetup on:cancel={closeModal} />
	{/if}
	<MeetupGrid meetups={$meetups} />
</main>
