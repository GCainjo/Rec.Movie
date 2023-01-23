<template>
	<div id="favoriteHome" class="w-11/12 m-auto mt-20 md:mt-36">
		<div class=" w-full">
			<h2 class="text-2xl font-bold text-white">Vos favoris</h2>
		</div>
		<div id="listMovie" class=" mt-10 mb-10 grid md:grid-cols-3 w-full auto-cols-auto gap-6">
			<p v-if="!favorite.favorites.length" class="text-white font-bold">Vous n'avez aucun favoris pour le moment
			</p>
			<BaseCard v-for="item in favorite.favorites" :key="item.title" :movie-element="item" />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useFavoriteStore } from "../stores/favorite";
import BaseCard from '../components/BaseCardDetails.vue';

export default defineComponent({
	components: {
		BaseCard,
	},
	setup() {
		const favorite = useFavoriteStore()


		return {
			favorite
		}
	}
})
</script>

<style scoped>

</style>