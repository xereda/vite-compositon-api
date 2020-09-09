<template>
  <div class="modal is-active">
    <div class="modal-background" />
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Level 3</p>
        <button class="delete" @click="onCancel" />
      </header>
      <section class="modal-card-body">
        <div>
          <strong>selectedOption: </strong>
          <span>
            {{ selectedOption }}
          </span>
        </div>
        <div>
          <strong>options: </strong>
          <span>
            {{ options }}
          </span>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button class="button" @click="onCancel">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('levels', ['selectedOption', 'options']),
  },
  methods: {
    onCancel() {
      this.$emit('close');
    },
  },
};
</script>
