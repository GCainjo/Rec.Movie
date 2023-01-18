<template>
	<div id="listHome " class=" w-10/12 m-auto pt-12">
		<div class=" w-full">
			<h2 class="text-2xl font-bold text-white">Les 4 films du moment</h2>
		</div>
		<div id="listMovie" class="mt-10 mb-10 grid grid-cols-3 auto-cols-auto gap-6">
			<BaseCard />
			<BaseCard />
			<BaseCard />
			<BaseCard />
		</div>
	</div>
</template>

<script setup lang="ts">
import BaseCard from './BaseCard.vue';
</script>

<style scoped>

</style>