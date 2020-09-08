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
import useState from '../../use-state.js';

export default {
  setup(props, { emit }) {
    const { selectedOption, options } = useState;

    function onCancel() {
      emit('close');
    }

    return { onCancel, selectedOption, options };
  },
};
</script>
