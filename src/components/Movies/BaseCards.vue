<template>
	<div class="cardImage relative h-full w-full box-border">
		<img :src="getImgUrl(movieElement?.poster_path!)" class="h-full block rounded-xl object-cover object-right " />
		<div class="absolute top-0 left-0 w-full h-full rounded-xl bg-gradient-to-t from-zinc-900 to-transparent" />
		<div class="text w-full h-full pb-5 absolute top-0 left-0 flex items-center justify-center flex-col">
			<div class="flex items-start justify-end h-1/2 w-full pt-2 pr-2 ">
				<p v-on:click="favorite.getFavorites.some(e => e.title === movieElement?.title) ? favorite.removeItem(movieElement?.title!) : favorite.addItem(movieElement!)"
					:class="{ 'text-yellow-400': favorite.getFavorites.some(e => e.title === movieElement?.title) }"
					class="text-white font-bold text-xs md:text-xs bg-black bg-opacity-50 px-5 py-3 rounded-full hover:text-yellow-400 cursor-pointer">
					{{
						favorite.getFavorites.some(e => e.title === movieElement?.title) ? "Retirer des" : "Ajouter au"
					}} favoris
				</p>
			</div>
			<div class="flex items-end justify-center h-1/2">
				<p class="text-white font-bold px-5 text-center text-sm md:text-md">{{ movieElement?.title }}</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts">

import { defineComponent, ref, } from 'vue'
import { useFavoriteStore } from '../../stores/favorite'
import { useMoviesStore } from '../../stores/movies'
import type { PropType } from 'vue'

export default defineComponent({

	props: {
		genreElement: {
			type: Number
		},
		movieElement: Object as PropType<Movies>
	},
	setup() {
		const favorite = useFavoriteStore()
		const itemName = ref('')

		return {
			itemName,
			favorite,
		}
	},
	methods: {
		getImgUrl(pic: string) {
			return "https://image.tmdb.org/t/p/original" + pic
		}
	}
})

interface Movies {
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

</script>

<style scoped>

</style>