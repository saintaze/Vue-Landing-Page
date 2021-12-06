<template>
	<div class="TabsWrapper">
		<ul class="header">
			<li :class="{title: true, selected: title === selectedTabTitle}" @click="selectTab(title)" v-for="title in tabTitles" :key="title">{{title}}</li>
		</ul>
		<slot />
	</div>
</template>
<script>

import { ref, onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import { SET_SELECTED_TAB_TITLE } from '@/store/actions/tab';

export default {
	setup(_, {slots}){
		const store = useStore();
		
		// data
		const tabTitles = ref(slots.default().map(tab => tab.props.title));

		// computed
		const selectedTabTitle = computed(() => store.getters.getSelectedTabTitle);
		
		// lifecycle hooks
		onMounted(() => selectTab(tabTitles.value[0]))

		// methods
		const selectTab = title => store.commit(SET_SELECTED_TAB_TITLE, title);

		return {
			tabTitles,
			selectTab,
			selectedTabTitle
		}
	}
}
</script>

<style lang="scss" scoped>

.TabsWrapper {
	border-bottom: 2px solid #cfcfcf;
  padding-bottom: 5.3rem;

	.header {
		list-style: none;
		display: flex;
		color: #bbb;
		font-weight: 500;
		font-size: 1.5rem;
		border-bottom: 2px solid #cfcfcf;
		margin-bottom: 3.8rem;
	}

	.title {
		cursor: pointer;
		padding: 0 1.2rem;
	}

	.selected {
		color: #444;
		font-weight: 500;
		border-bottom: 3px solid rgb(78, 136, 245);
	}
}

</style>