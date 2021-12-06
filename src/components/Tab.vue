<template>
	<div class="Tab" v-if="selectedTabTitle === title">
		<slot />
	</div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
	props: {
		title: String
	},
	setup(){
		const store = useStore();

		// computed
		const selectedTabTitle = computed(() => store.getters.getSelectedTabTitle);

		return {
			selectedTabTitle
		}
	}
}

</script>

<style lang="scss" scoped>

</style>