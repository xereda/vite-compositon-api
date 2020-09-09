<template>
  <div class="tags are-large has-addons">
    <span class="tag">Count: </span>
    <span
      class="tag is-info"
      :class="{ 'is-success': isPositive, 'is-warning': isNegative }"
    >
      {{ count }}
    </span>
  </div>
  <div class="buttons has-addons">
    <button class="button is-success" @click="increment">Increment</button>
    <button class="button is-info" @click="reset">Reset state</button>
    <button class="button is-warning" @click="decrement">Decrement</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['count']),
    isNegative() {
      return this.count < 0;
    },
    isPositive() {
      return this.count > 0;
    },
  },
  methods: {
    ...mapActions(['increment', 'decrement', 'reset']),
  },
};
</script>
