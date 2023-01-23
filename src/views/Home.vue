<template>
	<div id="home_enter" class=" w-full h-screen flex justify-center items-center relative flex-col">
		<img :src="getImgUrl(movies.moviesBackground[0]?.backdrop_path)" alt="background"
			class="w-full h-full object-cover absolute brightness-75" />
		<div class="items-start flex flex-col w-8/12 md:w-1/2 z-10">
			<h1 class="text-white text-8xl font-bold">{{ movies.moviesBackground[0].title }}</h1>
			<p class="text-sm line-clamp-5 md:line-clamp-3 text-white mt-5 mb-5">
				{{ movies.moviesBackground[0].overview }}</p>
			<div class="flex justify-center items-center flex-row">
				<BaseGenre v-for="item in movies.moviesBackground[0]?.genre_ids" :key="item" :genre-element="item" />
			</div>
		</div>
	</div>
	<ListeMovie />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ListeMovie from "../components/Home/ListeMovie.vue"
import BaseGenre from "../components/Home/BaseGenre.vue"

import { useMoviesStore } from '../stores/movies'

export default defineComponent({
	components: {
		ListeMovie,
		BaseGenre,
	},
	setup() {
		const movies = useMoviesStore()
		return {
			movies,
		}
	},
	methods: {
		getImgUrl(pic: string) {
			return "https://image.tmdb.org/t/p/original" + pic
		}
	}
})
</script>

<style scoped>

</style>