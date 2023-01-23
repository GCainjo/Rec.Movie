import { defineStore, acceptHMRUpdate } from 'pinia'
type Movies = {
	adult: false,
	backdrop_path: string,
	genre_ids: number[],
	id: number, original_title: string,
	original_language: string,
	overview: string,
	popularity: number,
	poster_path: string, release_date: string,
	title: string,
	video: boolean,
	vote_average: number,
	vote_count: number
}

export const useFavoriteStore = defineStore({
	id: 'favorite',
	state: () => ({
		favorites: [] as Movies[],
	}),
	getters: {
		getFavorites: (state): Array<Movies> =>
			state.favorites.reduce((items, item) => {
				const existingItem = items.find((it) => it.title === item.title)

				if (!existingItem) {
					items.push(item)
				}

				return items
			}, [] as Array<Movies>),
	},
	actions: {
		loadFavorite() {

			if (localStorage.getItem("favorite")) {
				var favoritesString = localStorage.getItem("favorite")
				this.favorites = JSON.parse(favoritesString!)
			}
		},

		addItem(item: Movies) {
			if (!this.favorites.some(data => data.title === item.title)) {
				this.favorites.push(item);
				localStorage.setItem("favorite", JSON.stringify(this.favorites))
			}
		},

		removeItem(item: string) {
			this.favorites = this.favorites.filter((el) => el.title != item)
			localStorage.setItem("favorite", JSON.stringify(this.favorites))

		},

	},
})