import { defineStore, acceptHMRUpdate } from 'pinia'

export const useFavoriteStore = defineStore({
	id: 'favorite',
	state: () => ({
		rawItems: [] as string[],
	}),
	getters: {
		items: (state): Array<string> =>
			state.rawItems.reduce((items, item) => {
				const existingItem = items.find((it) => it === item)

				if (!existingItem) {
					items.push(item)
				}

				return items
			}, [] as Array<string>),
	},
	actions: {
		addItem(name: string) {
			if (!this.rawItems.some(data => data === name)) {
				this.rawItems.push(name)
			}
		},

		removeItem(name: string) {
			const i = this.rawItems.lastIndexOf(name)
			if (i > -1) this.rawItems.splice(i, 1)
		},

	},
})