import { computed } from 'vue';

const useSorting = list =>
  computed(() =>
    [...list.value].sort((a, b) => (a.description > b.description ? 1 : -1)),
  );

export { useSorting };
