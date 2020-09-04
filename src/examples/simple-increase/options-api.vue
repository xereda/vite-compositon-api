<template>
  <button class="button is-danger" @click="increase">
    increasing {{ count }}
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
    increase() {
      this.count++;
    },
  },
};
</script>
