import { createStore } from 'vuex';

const state = { count: 0 };

const GENERIC_MUTATION = 'GENERIC_MUTATION';

const actions = {
  increment({ commit, state }) {
    commit(GENERIC_MUTATION, { property: 'count', payload: state.count + 1 });
  },
  reset({ commit }) {
    commit(GENERIC_MUTATION, { property: 'count', payload: 0 });
  },
  decrement({ commit, state }) {
    commit(GENERIC_MUTATION, { property: 'count', payload: state.count - 1 });
  },
};

const mutations = {
  [GENERIC_MUTATION]: (state, { property, payload }) =>
    (state[property] = payload),
};

export default createStore({
  namespaced: true,
  state,
  actions,
  mutations,
  modules: {},
});
