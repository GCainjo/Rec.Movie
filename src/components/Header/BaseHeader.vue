
<template>
	<nav class="w-11/12 md:w-10/12 m-auto top-0 px-2 py-2.5 absolute z-20  border-b border-gray-100">
		<div class="container flex items-center justify-between mx-auto">
			<div class="items-center justify-between  w-1/3 ">
				<div id="Header" class="container mx-auto">
					<ul class="flex md:p-4 md:mt-4 flex-col md:flex-row md:space-x-8 font-medium">
						<li>
							<router-link to="/" class=" text-sm bloc text-gray-600">Accueil</router-link>
						</li>
						<li class=" flex items-end">
							<router-link to="/movies" class="text-sm md:text-md  text-gray-600 hover:text-white">Liste
								des
								films</router-link>
						</li>
					</ul>
				</div>
			</div>
			<div class=" flex items-center w-1/3 justify-center">
				<img src="../../assets/Logo.png" class="md:h-6 mr-3 h-4" alt="Rec Movie Logo">
				<span class="self-center md:text-xl font-semibold whitespace-nowrap text-white">REC. Movie</span>
			</div>
			<div class="flex items-center justify-end w-1/3">
				<router-link to="/favoris" class="flex items-center justify-end w-full">
					<ion-icon :icon="star" class="text-xl md:text-2xl text-yellow-400"></ion-icon>
					<div
						class="bg-red-400 w-4 h-4 md:w-5  md:h-5  flex items-center justify-center -translate-x-3 translate-y-3 rounded-full">
						<p class="text-white  text-xs md:text-sm">{{ favorite.getFavorites.length }}</p>
					</div>
				</router-link>
			</div>
		</div>
	</nav>
</template>

<script lang="ts">
import { star } from "ionicons/icons"
import { IonIcon } from "@ionic/vue"

import { defineComponent, ref } from 'vue'
import { useFavoriteStore } from '../../stores/favorite'

export default defineComponent({
	components: {
		IonIcon,
	},
	setup() {
		const favorite = useFavoriteStore()

		const itemName = ref('')

		return {
			itemName,
			favorite,
			star
		}
	}
})
</script>

<style scoped>
.router-link-active {
	color: white;
}
</style>