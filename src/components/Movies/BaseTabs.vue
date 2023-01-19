<template>
	<app-tabs class="w-11/12 lg:w-10/12 mx-auto mb-16">
		<!-- faire un v-for sur un template avec v-slot : tabPanel-id sur les movies genre, comme dans TabsWrapper -->
		<template v-slot:tabPanel-1> Content 1 </template>
		<template v-slot:tabPanel-2> Content 2 </template>
		<template v-slot:tabPanel-3> Content 3 </template>
		<template v-slot:tabPanel-4> Content 4 </template>
		<template v-slot:tabPanel-5> Content 5 </template>
	</app-tabs>
</template>

<script lang="ts">
import AppTabs from './TabsWrapper.vue'
import { defineComponent } from 'vue'
import { useMoviesStore } from '../../stores/movies';

export default defineComponent({
	components: {
		AppTabs,
	},
	setup() {
		const movies = useMoviesStore()

		// @ts-ignore
		window.stores = { movies }

		return {
			movies
		}
	}
});
</script>