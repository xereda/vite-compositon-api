<template>
  <div class="notification is-danger is-light">
    <h3 class="title is-3">Level 1</h3>
    <field-group
      with-button
      placeholder="Type a new option to array state..."
      theme="is-danger"
      :value="description"
      @input="onTyping"
      @click="onClickAddButton"
    >
      <level2 />
    </field-group>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import FieldGroup from '../../components/field-group.vue';
import Level2 from './level-2/options-api.vue';

export default {
  components: {
    FieldGroup,
    Level2,
  },
  data() {
    return {
      description: '',
    };
  },
  computed: {
    ...mapState('levels', ['options']),
  },
  methods: {
    ...mapActions('levels', ['addOption']),
    onTyping(inputValue) {
      this.description = inputValue;
    },
    onClickAddButton() {
      if (this.description) {
        this.addOption(this.description);
        this.description = '';
      }
    },
  },
};
</script>
