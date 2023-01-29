import { defineStore, acceptHMRUpdate } from 'pinia'
import config from '../config';

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
		moviesBackground: [] as Movies[],
		movies: [] as Movies[],
		moviesGenre: [] as Movies[],
		genres: [] as Genre[],
		genresTab: [] as Genre[]
	}),
	getters: {
		popularMovies: (state): Array<Movies> => {
			return state.movies
		},

		genresMovies: (state): Array<Genre> => {
			return state.genres
		},
		genresTabMovies: (state): Array<Genre> => {
			return state.genresTab
		}
	},
	actions: {
		async getPopularMovies() {
			const result = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${config.API_KEY}&language=fr`)
				.then(data => data.json())
				.catch(error => console.log(error));

			//Récupère uniquement les 4 films les plus populaires 
			this.movies = result.results.slice(0, 4) as Movies[];
		},

		async getGenre() {
			const result = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${config.API_KEY}&language=fr`)
				.then(data => data.json())
				.catch(error => console.log(error));

			//Récupère tous les genres
			this.genres = result.genres

			//Récupère uniquement les genres demandés
			this.genresTab = result.genres.filter(function (genre: { id: number, name: string }) {
				if (genre.name === "Aventure" || genre.name === "Action" || genre.name === "Animation" || genre.name === "Comédie" || genre.name === "Documentaire") {
					return true;
				}
				return false
			})
		},

		async getMoviesByGenre(genre: { id: number, name: string }[], page: number) {
			const result = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${config.API_KEY}&language=fr&include_adult=false&include_video=false&page=${page}&with_genres=${genre[0].id}`)
				.then(data => data.json())
				.catch(error => console.log(error));
			this.moviesGenre = result.results
		},

		async getBackgroundMovie() {
			const result = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${config.API_KEY}&language=fr&query=Dune&page=1&include_adult=false`)
				.then(data => data.json())
				.catch(error => console.log(error));
			this.moviesBackground = result.results.slice(0, 1);
		}
	}
})