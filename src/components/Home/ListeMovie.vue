<template>
	<div id="listHome " class="w-11/12 m-auto pt-12">
		<div class=" w-full">
			<h2 class="text-2xl font-bold text-white">Les 4 films du moment</h2>
		</div>
		<div id="listMovie" class=" mt-10 mb-10 grid md:grid-cols-3  w-full auto-cols-auto gap-6">
			<BaseCard v-for="item in movies.movies" :key="item.title" :movie-element="item" />
		</div>
	</div>
</template>

<script  lang="ts">
import BaseCard from '../BaseCardDetails.vue';
import { defineComponent, onMounted } from 'vue'
import { useMoviesStore } from '../../stores/movies';

export default defineComponent({
	components: { BaseCard },
	setup() {
		const movies = useMoviesStore()

		onMounted(() => {
			movies.getPopularMovies();
		})

		return {
			movies
		}
	}
})
</script>

<style scoped>

</style>