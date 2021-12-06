<template>
	<div class="CardsGroup">
		<Card v-for="(tabData, index) in tabsData" :key="index" :imgSrc="tabData.imgSrc" :titleText="tabData.titleText" />
	</div>
</template>

<script>
import Card from '@/components/Card';
import { getTabsData } from '@/utils';
import { computed } from 'vue';

export default {
	components: {
		Card
	},
	setup(){
		const tabsData = computed(() => {
			return getTabsData()
				.slice()
				.map(data => ({ data, sort: Math.random() }))
				.sort((a, b) => a.sort - b.sort)
				.map(({data}) => data)
		})
		
		return {
			tabsData
		}
	}
}
</script>

<style lang="scss">

.CardsGroup {
	padding: 0 1.2rem;
	display: flex;
	justify-content: space-between;
}
	
</style>