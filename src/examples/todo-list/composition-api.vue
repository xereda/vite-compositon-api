<template>
  <button class="button is-info" @click="increase">
    increasing {{ count }}
  </button>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const count = ref(0);

    function increase() {
      count.value++;
    }

    return { count, increase };
  },
};
</script>
