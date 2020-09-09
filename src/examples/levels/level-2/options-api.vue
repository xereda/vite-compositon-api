<template>
  <div class="notification is-danger mt-5">
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
import Level3Modal from './level-3/options-api.vue';
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  components: {
    Level3Modal,
  },
  data() {
    return {
      showModal: false,
    };
  },
  computed: {
    ...mapState('levels', ['options']),
    ...mapGetters('levels', ['optionsSize']),
  },
  methods: {
    ...mapActions('levels', ['setSelectedOption']),
    onChangeSelectOption({ target }) {
      this.setSelectedOption(target.value);
    },
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>
