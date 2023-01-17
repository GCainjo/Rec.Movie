<script setup lang="ts">
import { personOutline } from "ionicons/icons"
import { IonIcon } from "@ionic/vue"
</script>
<template>
	<nav class="w-10/12 m-auto top-0 px-2 py-2.5 fixed z-20  border-b border-gray-600">
		<div class="container flex items-center justify-between mx-auto">
			<div class="items-center justify-between  w-1/3 ">
				<div id="Header" class="container mx-auto">
					<ul
						class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:border-gray-700">
						<li>
							<router-link to="/" class="bloc text-black">Accueil</router-link>
						</li>
						<li>
							<router-link to="/movies" class="block text-zinc-800 hover:text-black ">Liste des
								films</router-link>
						</li>
					</ul>
				</div>
			</div>
			<div class=" flex items-center w-1/3 justify-center">
				<img src="../assets/logo.png" class="h-6 mr-3 sm:h-9" alt="Rec Movie Logo">
				<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-black">REC. Movie</span>
			</div>
			<div class="flex items-center justify-end w-1/3">
				<!-- <LaUserSolid /> -->
				<ion-icon :icon="personOutline" class="text-2xl"></ion-icon>

			</div>
		</div>
	</nav>
</template>

<script lang="ts">
// export default defineComponent({
// 	components: { IonIcon },
// 	setup() {
// 		return {
// 			menu,
// 		}
// 	}
// })
</script>

<style scoped>

</style>