<template>
	<app-tabs class="w-11/12 lg:w-10/12 mx-auto mb-16">
		<template v-for="(tab, index) in movies.genresTabMovies" :key="index" v-slot:[getSlotName(index)]>
			<BaseCards :genre-element="tab.id" v-for="(movie, index) in movies.moviesGenre" :key="index"
				:movie-element="movie" />
		</template>
	</app-tabs>
</template>

<script lang="ts">
import AppTabs from './TabsWrapper.vue'

import BaseCards from './BaseCards.vue';

import { defineComponent } from 'vue'
import { useMoviesStore } from '../../stores/movies';


export default defineComponent({
	components: {
		AppTabs,
		BaseCards
	},
	setup() {
		const movies = useMoviesStore()
		
		return {
			movies,
		}
	},
	methods: {
		getSlotName(index: number) {
			return `tabPanel-${index + 1}`
		}
	}
});
</script>