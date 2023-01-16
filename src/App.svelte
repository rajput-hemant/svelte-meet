<script lang="ts">
	import "./styles/global.css";
	import meetups from "./stores/meetups-store";
	import Header from "./components/ui/Header.svelte";
	import MeetupGrid from "./components/meetups/MeetupGrid.svelte";
	import EditMeetup from "./components/meetups/EditMeetup.svelte";
	import MeetupDetails from "./components/meetups/MeetupDetails.svelte";
	import LoadingSpinner from "./components/ui/LoadingSpinner.svelte";

	enum pages {
		"home",
		"details",
	}

	let editMode = null,
		page: pages = pages.home,
		params = { pageId: "", editId: "" },
		isLoading = false;

	async function fetchMeetups() {
		try {
			isLoading = true;
			const response = await fetch(
				`${import.meta.env.VITE_FIREBASE}/meetups.json`
			);
			if (!response.ok) {
				throw new Error("Something went wrong");
			}
			const data = await response.json();
			const loadedMeetups = [];
			for (const key in data) {
				loadedMeetups.push({
					id: key,
					...data[key],
				});
			}
			isLoading = false;
			meetups.setMeetups(loadedMeetups.reverse());
		} catch (error) {
			isLoading = false;
			console.log(error);
		}
	}
	fetchMeetups();

	function closeModal() {
		editMode = null;
		params.editId = "";
	}

	function showDetails(e: CustomEvent) {
		page = pages.details;
		params.pageId = e.detail.id;
	}

	function addMeetup() {
		editMode = "edit";
	}

	function editMeetup(e: CustomEvent) {
		editMode = "edit";
		params.editId = e.detail.id;
	}
</script>

<Header />

<main class="mt-20">
	{#if page === pages.home}
		{#if editMode === "edit"}
			<EditMeetup id={params.editId} on:close={closeModal} />
		{/if}
		{#if isLoading}
			<LoadingSpinner />
		{:else}
			<MeetupGrid
				meetups={$meetups}
				on:add={addMeetup}
				on:edit={editMeetup}
				on:showDetails={showDetails}
			/>
		{/if}
	{:else}
		<MeetupDetails
			id={params.pageId}
			on:close={() => {
				page = pages.home;
				params.pageId = "";
			}}
		/>
	{/if}
</main>
