<!-- 
<script lang="ts" setup>
import Tabs from './TabsWrapper.vue'
// import Tab from './TabItem.vue'

</script> -->

<template>
	<app-tabs class="w-11/12 lg:w-10/12 mx-auto mb-16" :tabList="tabList">
		<template v-slot:tabPanel-1> Content 1 </template>
		<template v-slot:tabPanel-2> Content 2 </template>
		<template v-slot:tabPanel-3> Content 3 </template>
		<template v-slot:tabPanel-4> Content 4 </template>
		<template v-slot:tabPanel-5> Content 5 </template>
	</app-tabs>
</template>

<script lang="ts">
import AppTabs from './TabsWrapper.vue'

export default {
	components: {
		AppTabs,
	},
	data() {
		return {
			tabList: ["Action", "Animation", "Aventure", "Comédie", "Documentaire"],
		};
	},
};
</script>