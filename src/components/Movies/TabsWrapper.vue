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
					class="hidden" v-on:click="movies.getMoviesByGenre([tab], currentPage)" />
			</li>
		</ul>
		<template v-for="(tab, index) in  movies.genresTabMovies">
			<div :key="index" v-if="index + 1 === activeTab" class="py-5 grid grid-cols-5 auto-cols-auto gap-6">
				<slot :name="`tabPanel-${index + 1}`" />
			</div>
		</template>
		<div class="w-full flex justify-center">
			<vue-awesome-paginate :total-items="100" :items-per-page="20" :max-pages-shown="5" :current-page="1"
				v-model="currentPage" v-on:click="onClickHandler(movies.genresTabMovies, activeTab, currentPage)" />
		</div>
	</div>
</template>

<script lang="ts">
import BaseCards from './BaseCards.vue';
import { defineComponent, onMounted, ref } from 'vue'

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
	setup() {
		const currentPage = ref(1);

		const movies = useMoviesStore()
		// @ts-ignore
		window.stores = { movies }

		onMounted(() => {
			var filterId = movies.genresTabMovies.filter(el => el.id === 28);
			movies.getMoviesByGenre(filterId, 1)
		})

		return {
			currentPage,
			movies
		}

	},
	methods: {
		onClickHandler: function (page: { id: number; name: string; }[], activeTab: number, currentPage: number) {
			var filterId = page.slice(activeTab - 1, activeTab);
			this.movies.getMoviesByGenre(filterId, currentPage)
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: 'smooth'
			})
		}
	}
})

</script>

<style>
.paginate-buttons {
	width: 40px;
	height: 40px;
	cursor: pointer;
	background-color: transparent;
	border: 1px solid #fff;
	color: #fff;
}

.back-button,
.next-button {
	margin-inline: 10px;
	border-radius: 25px;
}

.first-button {
	border-start-start-radius: 25px;
	border-end-start-radius: 25px;
}

.last-button {
	border-start-end-radius: 25px;
	border-end-end-radius: 25px;
}

.back-button svg {
	transform: rotate(180deg) translateY(-2px);
}

.next-button svg {
	transform: translateY(2px);
}

/* select second element of .paginate-buttons */
li:nth-child(2)>.paginate-buttons.number-buttons {
	border-start-start-radius: 25px;
	border-end-start-radius: 25px;
	transition: none;
}

/* select one element before last of .paginate-buttons */
li:nth-last-child(2)>.paginate-buttons.number-buttons {
	border-start-end-radius: 25px;
	border-end-end-radius: 25px;
}

.active-page {
	background-color: #2980b9;
	color: #fff;
}

.active-page {
	background-color: #2980b9;
	color: #fff;
}

.paginate-buttons:hover {
	background-color: #f5f5f5;
	color: #000;
}

.active-page:hover {
	background-color: #388ac1;
}

.back-button:active,
.next-button:active {
	background-color: #e6e6e6;
}
</style>