<template>
  <example-wrapper title="Todo list">
    <template v-slot:options-api>
      <options-api />
    </template>
    <template v-slot:composition-api>
      <composition-api />
    </template>
  </example-wrapper>
</template>

<script>
import CompositionApi from './composition-api.vue';
import OptionsApi from './options-api.vue';
import ExampleWrapper from '../../components/example-wrapper.vue';

export default {
  components: {
    CompositionApi,
    OptionsApi,
    ExampleWrapper,
  },
};
</script>
