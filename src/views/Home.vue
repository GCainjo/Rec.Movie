<script setup lang="ts">
import ListeMovie from "../components/Home/ListeMovie.vue"
</script>

<template>
	<div id="home_enter" class="bg-black/60 w-full h-screen flex justify-center items-center relative flex-col">
		<img src="../assets/fond_ecran.jpg" alt="background"
			class="w-full h-full object-cover absolute mix-blend-overlay" />
		<div class="items-start flex flex-col">
			<h1 class="text-white text-8xl font-bold">Avatar :<br /> La voie de l'eau</h1>
			<div class="flex justify-center items-center flex-row">
				<div class="pt-1 pb-1 pr-4 pl-4 border border-white text-white rounded-full mr-2">
					<p>Science-Fiction</p>
				</div>
				<div class="pt-1 pb-1 pr-4 pl-4 border border-white text-white rounded-full mr-2">
					<p>Aventure</p>
				</div>
				<div class="pt-1 pb-1 pr-4 pl-4 border border-white text-white rounded-full ">
					<p>Action</p>
				</div>
			</div>
		</div>
	</div>
	<ListeMovie />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// 
// export default defineComponent({
// 	setup() {


// 		return {}
// 	}
// })
</script>

<style scoped>

</style>