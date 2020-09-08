<template>
  <div class="notification is-info mt-5">
    <h3 class="title is-3">Level 2</h3>
    <div class="field has-addons">
      <div class="control is-expanded">
        <div class="select is-fullwidth">
          <select @change="onChangeSelectOption">
            <option value="">Select a option ({{ optionsSize }})</option>
            <option v-for="option in options" :value="option" :key="option">
              {{ option }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <button
      class="button is-info is-inverted is-outlined is-rounded"
      @click="openModal"
    >
      Open Modal (Level 3)
    </button>
  </div>
  <level3-modal v-if="showModal" @close="closeModal" />
</template>

<script>
import useState from '../use-state.js';
import Level3Modal from './level-3/compositon-api.vue';
import { ref, readonly } from 'vue';

export default {
  components: {
    Level3Modal,
  },
  provide: { useState },
  setup() {
    const { options, setSelectedOption, optionsSize } = useState;
    const showModal = ref(false);

    function onChangeSelectOption({ target }) {
      setSelectedOption(target.value);
    }

    function closeModal() {
      showModal.value = false;
    }

    function openModal() {
      showModal.value = true;
    }

    return readonly({
      options,
      onChangeSelectOption,
      showModal,
      closeModal,
      openModal,
      optionsSize,
    });
  },
};
</script>
