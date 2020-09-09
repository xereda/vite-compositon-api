<template>
  <div class="tags is-light are-large has-addons">
    <span class="tag">Count: </span>
    <span
      class="tag is-info is-light"
      :class="{ 'is-success': isPositive, 'is-warning': isNegative }"
    >
      {{ count }}
    </span>
  </div>
  <div class="buttons has-addons">
    <button class="button is-success is-light" @click="increment">
      Increment
    </button>
    <button class="button is-info is-light" @click="reset">
      Reset state
    </button>
    <button class="button is-warning is-light" @click="decrement">
      Decrement
    </button>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  setup() {
    const store = useStore();
    const count = computed(() => store.state.count);

    function increment() {
      store.dispatch('increment');
    }

    function reset() {
      store.dispatch('reset');
    }

    function decrement() {
      store.dispatch('decrement');
    }

    const isNegative = computed(() => store.state.count < 0);

    const isPositive = computed(() => store.state.count > 0);

    return { count, increment, reset, decrement, isNegative, isPositive };
  },
};
</script>
