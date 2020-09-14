<template>
  <button class="button is-danger" @click="increment">
    Increment {{ count }}
  </button>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
  },
};
</script>
