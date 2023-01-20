<template>
	<div id="listMovie" class="w-full text-white mt-24">
		<BaseTabs />
	</div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import BaseTabs from '../components/Movies/BaseTabs.vue';

export default defineComponent({
	setup() {
		onMounted(() => {
			//moviesStore.getMovies();
		})
		return {};
	},
	components: { BaseTabs },

})
</script>

<style scoped>

</style>