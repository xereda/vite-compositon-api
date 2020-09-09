import { createStore } from 'vuex';

const state = { selectedOption: '', options: [] };

const GENERIC_MUTATION = 'GENERIC_MUTATION';

const actions = {
  addOption({ commit, state }, newOption) {
    commit(GENERIC_MUTATION, {
      property: 'options',
      payload: [newOption, ...state.options],
    });
  },
  setSelectedOption({ commit, state }, option) {
    commit(GENERIC_MUTATION, { property: 'selectedOption', payload: option });
  },
};

const getters = {
  optionsSize(state) {
    return state.options.length;
  },
};

const mutations = {
  [GENERIC_MUTATION]: (state, { property, payload }) =>
    (state[property] = payload),
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
