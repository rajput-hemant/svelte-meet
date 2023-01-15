<script lang="ts">
	import "./styles/global.css";
	import meetups from "./stores/meetups-store";
	import Header from "./components/ui/Header.svelte";
	import MeetupGrid from "./components/meetups/MeetupGrid.svelte";
	import Button from "./components/ui/Button.svelte";
	import EditMeetup from "./components/meetups/EditMeetup.svelte";
	import MeetupDetails from "./components/meetups/MeetupDetails.svelte";

	enum pages {
		"home",
		"details",
	}

	let showEditMeetup = false,
		page: pages = pages.home,
		pageParams = { id: "" };

	function closeModal() {
		showEditMeetup = false;
	}

	function showDetails(e: CustomEvent) {
		page = pages.details;
		pageParams.id = e.detail.id;
	}
</script>

<Header />

<main class="mt-20">
	{#if page === pages.home}
		<div class="flex justify-center">
			<Button on:click={() => (showEditMeetup = !showEditMeetup)}
				>➕ Add New Meetup</Button
			>
		</div>
		{#if showEditMeetup}
			<EditMeetup on:close={closeModal} />
		{/if}
		<MeetupGrid meetups={$meetups} on:showDetails={showDetails} />
	{:else}
		<MeetupDetails
			id={pageParams.id}
			on:close={() => {
				page = pages.home;
				pageParams.id = "";
			}}
		/>
	{/if}
</main>
