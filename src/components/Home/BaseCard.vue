<template>
	<div
		class="cardMovie flex-grow-0 flex-shrink-0 basis-1/3 flex flex-row p-5 justify-between relative w-full rounded-3xl bg-gray-800	 ">
		<div class="cardImage w-1/3 h-full">
			<img :src="getImgUrl(movieElement?.poster_path)" class="rounded-xl h-full w-full" />
		</div>
		<div class="cardInfo w-3/5 h-full flex flex-col justify-between text-white">
			<div>
				<div class="cardTitle flex flex-row  justify-between">
					<p class="font-bold text-xl">{{ movieElement?.title }}</p>
					<ion-icon :icon="starOutline" class="text-2xl hover:text-yellow-400 cursor-pointer"
						:class="{ 'text-yellow-400': favorite.getFavorites.includes(movieElement?.title) }"
						v-on:click="favorite.getFavorites.includes(movieElement?.title) ? favorite.removeItem(movieElement?.title) : favorite.addItem(movieElement?.title)"></ion-icon>
				</div>
				<div class="cardDurationYear">
					<p class="text-sm">{{ new Date(movieElement?.release_date).getUTCFullYear() }}</p>
				</div>
			</div>
			<div class="cardSummary">
				<p class="text-sm line-clamp-6">{{ movieElement?.overview }}</p>
			</div>

			<div class="cardGenre flex flex-row ">
				<BaseGenre v-for="item in movieElement?.genre_ids.slice(0, 3)" :key="item" :genre-element="item" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { starOutline } from "ionicons/icons"
import { IonIcon } from "@ionic/vue"

import BaseGenre from './BaseGenre.vue';

import { defineComponent, ref } from 'vue'
import { useFavoriteStore } from '../../stores/favorite'

export default defineComponent({
	props: {
		movieElement: {
			type: Object
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
</script>

<style scoped>

</style>