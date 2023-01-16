import type { Meetup } from "../types";
import meetupsStore from "../stores/meetups-store";

class Http {
	firebase = import.meta.env.VITE_FIREBASE;

	async get() {
		try {
			const response = await fetch(`${this.firebase}/meetups.json`);
			if (!response.ok) {
				throw new Error("Something went wrong");
			}
			const data = await response.json();
			return data;
		} catch (error) {
			throw new Error(error);
		}
	}

	async post(payload: Meetup) {
		try {
			const response = await fetch(`${this.firebase}/meetups.json`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(payload),
			});
			if (!response.ok) {
				throw new Error("Something went wrong!");
			}
			const data = await response.json();
			meetupsStore.addMeetup({ ...payload, id: data.name, isFavourite: false });
			return response;
		} catch (error) {
			throw new Error(error);
		}
	}

	private async patch_(id: string, payload?: Meetup) {
		try {
			const response = await fetch(`${this.firebase}/meetups/${id}.json`, {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(payload),
			});
			if (!response.ok) {
				throw new Error("Something went wrong!");
			}
			return response;
		} catch (error) {
			throw new Error(error);
		}
	}

	async patch(id: string, payload?: Meetup) {
		return this.patch_(id, payload);
	}

	async delete(id: string) {
		return this.patch_(id, null);
	}
}

const http = new Http();
export default http;
