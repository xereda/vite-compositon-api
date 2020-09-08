<template>
  <div class="field has-addons">
    <div class="control">
      <input
        v-bind="{ value, placeholder }"
        class="input"
        type="text"
        ref="inputRef"
        @input="onTyping"
        @keyup.enter="onClickButton"
      />
    </div>
    <div v-if="withButton" class="control">
      <a class="button" :class="theme" @click="onClickButton">
        {{ buttonLabel }}
      </a>
    </div>
  </div>
  <slot />
</template>

<script>
import { ref } from 'vue';

export default {
  props: {
    value: [String, Number],
    placeholder: { type: String, default: 'Type something...' },
    withButton: { type: Boolean, default: false },
    theme: { type: String, default: 'is-primary' },
    buttonLabel: { type: String, default: 'Add' },
  },
  emits: ['input', 'click'],
  setup(props, { emit }) {
    const inputRef = ref(null);

    function onTyping({ target }) {
      emit('input', target.value);
    }

    function onClickButton() {
      props.withButton && emit('click');
      inputRef.value.focus();
    }

    return { inputRef, onTyping, onClickButton };
  },
};
</script>
