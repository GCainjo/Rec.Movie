import { defineStore, acceptHMRUpdate } from 'pinia'

export const useFavoriteStore = defineStore({
	id: 'favorite',
	state: () => ({
		favorites: [] as string[],
	}),
	getters: {
		getFavorites: (state): Array<string> =>
			state.favorites.reduce((items, item) => {
				const existingItem = items.find((it) => it === item)

				if (!existingItem) {
					items.push(item)
				}

				return items
			}, [] as Array<string>),
	},
	actions: {
		addItem(name: string) {
			if (!this.favorites.some(data => data === name)) {
				this.favorites.push(name)
			}
		},

		removeItem(name: string) {
			const i = this.favorites.lastIndexOf(name)
			if (i > -1) this.favorites.splice(i, 1)
		},

	},
})