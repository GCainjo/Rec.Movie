<template>
	<div id="listMovie" class="w-full text-white mt-24">
		<BaseTabs />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseTabs from '../components/Movies/BaseTabs.vue';

export default defineComponent({
	setup() {
		return {};
	},
	components: { BaseTabs }
})
</script>

<style scoped>

</style>