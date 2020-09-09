import { reactive, toRefs, computed, readonly } from 'vue';

const state = reactive({
  description: '',
  selectedOption: '',
  options: [],
  optionsSize: computed(() => state.options.length),
});

function onTyping(inputValue) {
  state.description = inputValue;
}

function addOption() {
  state.options = [...state.options, state.description];
  state.description = '';
}

function setSelectedOption(option) {
  state.selectedOption = option;
}

export default {
  ...toRefs(readonly(state)),
  onTyping,
  addOption,
  setSelectedOption,
};
