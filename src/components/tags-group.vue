<template>
  <div class="field is-grouped is-grouped-multiline">
    <div v-for="tag in tags" :key="tag.index" class="control">
      <div class="tags has-addons">
        <a
          class="tag"
          :class="{
            [theme]: !tag.done,
            'is-light': tag.done,
            'tag-done': tag.done,
          }"
          @click="onChangeTag(tag)"
        >
          {{ tag.description }}
        </a>
        <a class="tag is-delete" @click="onRemoveTag(tag.index)" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tags: { type: Array, default: () => [] },
    theme: { type: String, default: 'is-primary' },
  },
  emits: ['change', 'remove'],
  setup(props, { emit }) {
    function onChangeTag(tag) {
      emit('change', tag);
    }

    function onRemoveTag(tagIndex) {
      emit('remove', tagIndex);
    }

    return { onChangeTag, onRemoveTag };
  },
};
</script>

<style lang="css" scoped>
.tag-done {
  text-decoration: line-through;
}
</style>
