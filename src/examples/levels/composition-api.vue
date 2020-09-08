<template>
  <div class="notification is-info is-light">
    <h3 class="title is-3">Level 1</h3>
    <field-group
      with-button
      placeholder="Type a new option to array state..."
      theme="is-info"
      :value="description"
      @input="onTyping"
      @click="addOption"
    >
      <level2 />
    </field-group>
  </div>
</template>

<script>
import useState from './use-state.js';
import FieldGroup from '../../components/field-group.vue';
import Level2 from './level-2/composition-api.vue';

export default {
  components: {
    FieldGroup,
    Level2,
  },
  setup() {
    const { description, onTyping, addOption } = useState;

    return {
      description,
      onTyping,
      addOption,
    };
  },
};
</script>
