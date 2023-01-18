<template>
	<div
		class="cardMovie flex-grow-0 flex-shrink-0 basis-1/3 flex flex-row p-5 justify-between relative w-full rounded-3xl bg-gray-800	 ">
		<div class="cardImage w-1/3 h-full">
			<img src="../../assets/affiche.jpg" class="rounded-xl" />
		</div>
		<div class="cardInfo w-3/5 h-full flex flex-col justify-between text-white">
			<div>
				<div class="cardTitle flex flex-row  justify-between">
					<p class="font-bold text-xl">Avatar</p>
					<ion-icon :icon="starOutline" class="text-2xl"></ion-icon>

				</div>
				<div class="cardDurationYear">
					<p class="text-sm">3H10 - 2022</p>
				</div>
			</div>
			<div class="cardSummary">
				<p class="text-sm line-clamp-6">
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
			</div>

			<div class="cardGenre flex flex-row ">
				<p class="text-sm py-0.5 px-1 border border-white text-white rounded-full mr-2">
					Science-Fiction</p>
				<p class="text-sm py-0.5 px-1 border border-white text-white rounded-full mr-2">Aventure</p>
				<p class="text-sm py-0.5 px-1 border border-white text-white rounded-full">Action</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { starOutline } from "ionicons/icons"
import { IonIcon } from "@ionic/vue"
</script>

<style scoped>

</style>