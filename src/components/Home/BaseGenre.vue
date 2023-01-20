<template>
	<p class=" py-0.5 px-1 border border-white text-white rounded-full mr-2 text-xs">{{
		movies.genres.find(x => x.id ===
	genreElement)?.name
	}}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { useMoviesStore } from '../../stores/movies'


export default defineComponent({
	props: {
		genreElement: {
			type: Number
		}
	},
	setup() {
		const movies = useMoviesStore()
		
		return {
			movies,
		}
	}
})
</script>

<style scoped>

</style>