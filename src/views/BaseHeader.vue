<script setup lang="ts">
import { star } from "ionicons/icons"
import { IonIcon } from "@ionic/vue"
</script>
<template>
	<nav class="w-10/12 m-auto top-0 px-2 py-2.5 absolute z-20  border-b border-gray-100">
		<div class="container flex items-center justify-between mx-auto">
			<div class="items-center justify-between  w-1/3 ">
				<div id="Header" class="container mx-auto">
					<ul class="flex p-4 mt-4 mflex-row space-x-8 font-medium ">
						<li>
							<router-link to="/" class="bloc text-gray-600">Accueil</router-link>
						</li>
						<li>
							<router-link to="/movies" class="block text-gray-600 hover:text-white">Liste des
								films</router-link>
						</li>
					</ul>
				</div>
			</div>
			<div class=" flex items-center w-1/3 justify-center">
				<img src="../assets/logo.png" class="h-6 mr-3 sm:h-9" alt="Rec Movie Logo">
				<span class="self-center text-xl font-semibold whitespace-nowrap text-white">REC. Movie</span>
			</div>
			<div class="flex items-center justify-end w-1/3">
				<ion-icon :icon="star" class="text-2xl text-yellow-400"></ion-icon>
			</div>
		</div>
	</nav>
</template>

<script lang="ts">
export default {
	components: { IonIcon },
}
</script>

<style scoped>
.router-link-active {
	color: white;
}
</style>