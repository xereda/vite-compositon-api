<template>
  <button class="button is-info" @click="increment">
    Increment {{ count }}
  </button>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const count = ref(0);

    function increment() {
      count.value++;
    }

    return { count, increment };
  },
};
</script>
