<template>
  <h3 class="title is-3 has-text-grey">{{ title }}</h3>
  <div class="columns mb-6">
    <div class="column">
      <h4 class="title is-4 has-text-grey-light">Options API</h4>
      <slot name="options-api" />
    </div>
    <div class="column">
      <h4 class="title is-4 has-text-grey-light">Composition API</h4>
      <slot name="composition-api" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>
