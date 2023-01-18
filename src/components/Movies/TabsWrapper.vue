<template>
	<div class="flex flex-col mt-10">
		<ul class="list-none p-1.5 text-center overflow-auto whitespace-nowrap flex border rounded-lg">
			<li v-for="(tab, index) in tabList" :key="index" class="px-4 py-1.5 rounded-lg" :class="{
				'text-black bg-white font-bold': index + 1 === activeTab,
				'text-white font-bold': index + 1 !== activeTab,
			}">
				<label :for="`${index}`" v-text="tab" class="cursor-pointer block" />
				<input :id="`${index}`" type="radio" :name="`${index}-tab`" :value="index + 1" v-model="activeTab"
					class="hidden" />
			</li>
		</ul>
		<template v-for="(tab, index) in tabList">
			<div :key="index" v-if="index + 1 === activeTab" class="py-5 grid grid-cols-5 auto-cols-auto gap-6">
				<!-- <slot :name="`tabPanel-${index + 1}`" /> -->
				<BaseCards />
				<BaseCards />
				<BaseCards />
				<BaseCards />
				<BaseCards />
				<BaseCards />
			</div>
		</template>
	</div>
</template>

<script lang="ts">
import BaseCards from './BaseCards.vue';
export default {
	components: {
		BaseCards,
	},
	props: {
		tabList: {
			type: Array,
			required: true,
		}
	},
	data() {
		return {
			activeTab: 1,
		};
	},
};
</script>