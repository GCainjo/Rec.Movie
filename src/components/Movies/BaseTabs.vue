<!-- 
<script lang="ts" setup>
import Tabs from './TabsWrapper.vue'
// import Tab from './TabItem.vue'
</script> -->

<template>
	<div class="bg-gradient-to-r from-blue-300 to-blue-500 min-h-screen">
		<app-tabs class="w-11/12 lg:w-10/12 mx-auto mb-16" :tabList="tabList">
			<template v-slot:tabPanel-1> Content 1 </template>
			<template v-slot:tabPanel-2> Content 2 </template>
			<template v-slot:tabPanel-3> Content 3 </template>
			<template v-slot:tabPanel-4> Content 4 </template>
		</app-tabs>
	</div>
</template>

<script lang="ts">
import AppTabs from './TabsWrapper.vue'

export default {
	components: {
		AppTabs,
	},
	data() {
		return {
			tabList: ["Tab 1", "Tab 2", "Tab 3", "Tab 4"],
		};
	},
};
</script>