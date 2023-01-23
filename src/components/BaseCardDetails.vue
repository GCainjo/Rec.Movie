<template>
	<div
		class="w-full cardMovie flex-grow-0 flex-shrink-0 basis-1/3 flex flex-row p-2 md:p-5 justify-between relative rounded-3xl bg-gray-800	 ">
		<div class="cardImage w-1/3 h-full flex items-center">
			<img :src="getImgUrl(movieElement?.poster_path!)" class="rounded-xl w-full" />
		</div>
		<div class="cardInfo w-3/5 h-full flex flex-col justify-between text-white">
			<div>
				<div class="cardTitle flex flex-row  justify-between">
					<p class="font-bold md:text-xl">{{ movieElement?.title }}</p>
					<ion-icon :icon="starOutline" class="text-xl md:text-2xl hover:text-yellow-400 cursor-pointer"
						:class="{ 'text-yellow-400': favorite.getFavorites.some(e => e.title === movieElement?.title) }"
						v-on:click="favorite.getFavorites.some(e => e.title === movieElement?.title) ? favorite.removeItem(movieElement?.title!) : favorite.addItem(movieElement!)"></ion-icon>
				</div>
				<div class="cardDurationYear">
					<p class="md:text-sm text-xs">{{ new Date(movieElement?.release_date!).getUTCFullYear() }}</p>
				</div>
			</div>
			<div class="cardSummary">
				<p class="md:text-sm text-xs line-clamp-6">{{ movieElement?.overview }}</p>
			</div>

			<div class="cardGenre flex flex-col md:flex-row ">
				<BaseGenre v-for="item in movieElement?.genre_ids.slice(0, 3)" :key="item" :genre-element="item" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { starOutline } from "ionicons/icons"
import { IonIcon } from "@ionic/vue"

import BaseGenre from './Home/BaseGenre.vue';

import { defineComponent, ref } from 'vue'
import { useFavoriteStore } from '../stores/favorite'
import type { PropType } from 'vue'

export default defineComponent({
	props: {
		movieElement: {
			type: Object as PropType<Movies>
		}
	},
	components: {
		IonIcon,
		BaseGenre
	},
	setup() {
		const favorite = useFavoriteStore()

		const itemName = ref('')

		return {
			itemName,
			favorite,
			starOutline
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