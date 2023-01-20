<template>
	<div class="cardImage relative h-full w-full box-border">
		<img :src="getImgUrl(movieElement?.poster_path)" class="h-full block rounded-xl object-cover object-right " />
		<div class="absolute top-0 left-0 w-full h-full rounded-xl bg-gradient-to-t from-zinc-900 to-transparent" />
		<div class="text w-full h-full pb-5 absolute top-0 left-0 flex items-center justify-center flex-col">
			<div class="flex items-start justify-end h-1/2 w-full pt-2 pr-2 ">
				<p v-on:click="favorite.items.includes(movieElement?.title) ? favorite.removeItem(movieElement?.title) : favorite.addItem(movieElement?.title)"
					:class="{ 'text-yellow-400': favorite.items.includes(movieElement?.title) }"
					class="text-white font-bold text-xs bg-black bg-opacity-50 px-5 py-3 rounded-full hover:text-yellow-400 cursor-pointer">
					{{ favorite.items.includes(movieElement?.title) ? "Retirer des" : "Ajouter au" }} favoris
				</p>
			</div>
			<div class="flex items-end justify-center h-1/2">
				<p class="text-white font-bold px-5 text-center">{{ movieElement?.title }}</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts">

import { defineComponent, ref, onMounted } from 'vue'
import { useFavoriteStore } from '../../stores/favorite'
import { useMoviesStore } from '../../stores/movies'

export default defineComponent({
	props: {
		genreElement: {
			type: Number
		},
		movieElement: {
			type: Object
		}
	},
	setup(props) {
		const favorite = useFavoriteStore()
		const movies = useMoviesStore()
		const itemName = ref('')
		// @ts-ignore
		window.stores = { favorite, movies }

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
</script>

<style scoped>

</style>