<script setup lang="ts">
import ListeMovie from "../components/Home/ListeMovie.vue"
</script>

<template>
	<div id="home_enter" class=" w-full h-screen flex justify-center items-center relative flex-col">
		<img src="../assets/fond_ecran.jpg" alt="background"
			class="w-full h-full object-cover absolute brightness-75" />
		<div class="items-start flex flex-col w-1/2 z-10">
			<h1 class="text-white text-8xl font-bold">Avatar :<br /> La voie de l'eau</h1>
			<p class="text-sm line-clamp-3 text-white mt-5 mb-5">
					Jake Sully et Neytiri sont devenus parents. L'intrigue se déroule une dizaine d'années après les
					événements racontés dans le long-métrage originel. Leur vie idyllique, proche de la nature, est
					menacée
					lorsque la « Resources Development Administration », dangereuse organisation non-gouvernementale,
					est de
					retour sur Pandora. Contraints de quitter leur habitat naturel, Jake et sa famille se rendent sur
					les
					récifs, où ils pensent trouver asile. Mais ils tombent sur un clan, les Metkayina, aux mœurs
					différentes
					des leurs...</p>
			<div class="flex justify-center items-center flex-row">
				<div class="py-1 px-4 border border-white text-white rounded-full mr-2">
					<p>Science-Fiction</p>
				</div>
				<div class="py-1 px-4 border border-white text-white rounded-full mr-2">
					<p>Aventure</p>
				</div>
				<div class="py-1 px-4 border border-white text-white rounded-full ">
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