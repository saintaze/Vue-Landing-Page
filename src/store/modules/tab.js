import { SET_SELECTED_TAB_TITLE } from '../actions/tab';

const state = {
	selectedTabTitle   : '',
};

const getters = {
	getSelectedTabTitle : state => {
		return state.selectedTabTitle;
	}
}

const mutations = {
	[SET_SELECTED_TAB_TITLE] : ( state, tabTitle )=> {
		state.selectedTabTitle = tabTitle;
	}
};

export default {
	state,
	getters,
	mutations
};
