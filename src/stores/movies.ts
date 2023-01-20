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

type Genre = {
	id: number,
	name: string
}

export const useMoviesStore = defineStore({
	id: 'movies',
	state: () => ({
		movies: [] as Movies[],
		moviesGenre: [] as Movies[],
		genres: [] as Genre[],
		genresTab: [] as Genre[]
	}),
	getters: {
		popularMovies: (state) => {
			return state.movies
		},

		genresMovies: (state) => {
			return state.genres
		},
		genresTabMovies: (state) => {
			return state.genresTab
		}
	},
	actions: {
		async getPopularMovies() {
			const result = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=48a3c057ca7767953d872ee5e5726b39&language=fr')
			const data = await result.json()

			//Récupère uniquement les 4 films les plus populaires 
			this.movies = data.results.slice(0, 4) as Movies[];
		},

		async getGenre() {
			const result = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=48a3c057ca7767953d872ee5e5726b39&language=fr')
			const response = await result.json()

			//Récupère tous les genres
			this.genres = response.genres

			//Récupère uniquement les genres demandés
			this.genresTab = response.genres.filter(function (genre: { id: number, name: string }) {
				if (genre.name === "Aventure" || genre.name === "Action" || genre.name === "Animation" || genre.name === "Comédie" || genre.name === "Documentaire") {
					return true;
				}
				return false
			})
		},

		async getMoviesByGenre(genre: { id: number, name: string }[], page: number) {
			const result = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=48a3c057ca7767953d872ee5e5726b39&language=fr&include_adult=false&include_video=false&page=${page}&with_genres=${genre[0].id}`)
			const response = await result.json()
			this.moviesGenre = response.results
		},
	}
})