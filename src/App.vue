<template>
  <section class="hero is-dark">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Vue Composition API
        </h1>
        <h2 class="subtitle">God save The <strong>Evan You</strong>!</h2>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <h4 class="title is-4">Options API</h4>
          <options-api />
        </div>
        <div class="column">
          <h4 class="title is-4">Composition API</h4>
          <composition-api />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import OptionsApi from './components/options-api.vue';
import CompositionApi from './components/composition-api.vue';

export default {
  name: 'App',
  components: {
    OptionsApi,
    CompositionApi,
  },
};
</script>
