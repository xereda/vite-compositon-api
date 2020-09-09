import { computed } from 'vue';

export function useSorting(list) {
  return computed(() =>
    [...list.value].sort((a, b) => (a.description > b.description ? 1 : -1)),
  );
}
