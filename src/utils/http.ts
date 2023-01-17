import type { Meetup } from "../types";

class Http {
	firebase = import.meta.env.VITE_FIREBASE;

	async get() {
		try {
			const response = await fetch(`${this.firebase}/meetups.json`);
			if (!response.ok) {
				throw new Error("Something went wrong");
			}
			const data: Meetup = await response.json();
			return { data, response };
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
			return { data, response };
		} catch (error) {
			throw new Error(error);
		}
	}

	async patch(id: string, payload?: Meetup) {
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

	async delete(id: string) {
		try {
			const response = await fetch(`${this.firebase}/meetups/${id}.json`, {
				method: "DELETE",
			});
			if (!response.ok) {
				throw new Error("Something went wrong!");
			}
			return response;
		} catch (error) {
			throw new Error(error);
		}
	}
}

const http = new Http();
export default http;
