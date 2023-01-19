<template>
	<div class="cardImage relative h-full w-full box-border	 ">
		<img src="../../assets/affiche.jpg" class="h-full block rounded-xl object-cover object-right " />
		<div class="absolute top-0 left-0 w-full h-full rounded-xl bg-gradient-to-t from-zinc-900 to-transparent" />
		<div class="text w-full h-full pb-5 absolute top-0 left-0 flex items-center justify-center flex-col">
			<div class="flex items-start justify-end h-1/2 w-full pt-2 pr-2 ">
				<p v-on:click="favorite.items.includes('avatar') ? favorite.removeItem('avatar') : favorite.addItem('avatar')"
					:class="{ 'text-yellow-400': favorite.items.includes('avatar')}"
					class="text-white font-bold text-xs bg-black bg-opacity-50 px-5 py-3 rounded-full hover:text-yellow-400 cursor-pointer">
					{{ favorite.items.includes('avatar') ? "Retirer des" : "Ajouter au" }} favoris
				</p>
			</div>
			<div class="flex items-end justify-center h-1/2">
				<p class="text-white font-bold ">Avatar : La voie de l'eau</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts">

import { defineComponent, ref } from 'vue'
import { useFavoriteStore } from '../../stores/favorite'

export default defineComponent({
	setup() {
		const favorite = useFavoriteStore()

		const itemName = ref('')
		// @ts-ignore
		window.stores = { favorite }

		return {
			itemName,
			favorite,
		}
	}
})
</script>

<style scoped>

</style>