<template>
	<div class="flex flex-col mt-10">
		<!-- Création Composant tabsHeader qui prend en props les tableaux de genre -->
		<ul class="list-none p-1.5 text-center overflow-auto whitespace-nowrap flex border rounded-lg">
			<li v-for="(tab, index) in movies.genresTabMovies" :key="index" class="px-4 py-1.5 rounded-lg" :class="{
				'text-black bg-white font-bold': index + 1 === activeTab,
				'text-white font-bold': index + 1 !== activeTab,
			}">
				<label :for="`${index}`" v-text="tab.name" class="cursor-pointer block" />
				<input :id="`${index}`" type="radio" :name="`${index}-tab`" :value="index + 1" v-model="activeTab"
					class="hidden" v-on:click="showLabel(tab.name)" />
			</li>
		</ul>
		<template v-for="(tab, index) in  movies.genresTabMovies">
			<div :key="index" v-if="index + 1 === activeTab" class="py-5 grid grid-cols-5 auto-cols-auto gap-6">
				<slot :name="`tabPanel-${index + 1}`" />
				<BaseCards />
				<BaseCards />
				<BaseCards />
				<BaseCards />
				<BaseCards />
				<BaseCards />
			</div>
		</template>
	</div>
</template>

<script lang="ts">
import BaseCards from './BaseCards.vue';
import { defineComponent } from 'vue'

import { useMoviesStore } from '../../stores/movies';

export default defineComponent({
	components: {
		BaseCards,
	},
	data() {
		return {
			activeTab: 1,
		};
	},
	methods: {
		showLabel: function (params: string) {
			console.log(params)
		}
	},
	setup() {
		const movies = useMoviesStore()

		// @ts-ignore
		window.stores = { movies }

		return {
			movies
		}
	}
})
</script>