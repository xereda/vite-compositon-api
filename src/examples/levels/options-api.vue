<template>
  <p>Count: {{ count }}</p>
  <button class="button" @click="increment">Increment +</button>
  <button class="button" @click="decrement">Decrement -</button>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['count']),
  },
  methods: {
    ...mapActions(['increment']),
  },
};
</script>
