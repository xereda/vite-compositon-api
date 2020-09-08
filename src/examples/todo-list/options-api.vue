<template>
  <field-group
    with-button
    placeholder="Type a task..."
    theme="is-danger"
    :value="descriptionTask"
    @input="onTypingTask"
    @click="addTask"
  >
    <tags-group
      theme="is-danger"
      :tags="tasks"
      @change="onChangeTaskStatus"
      @remove="removeTask"
    />
  </field-group>
</template>

<script>
import FieldGroup from '../../components/field-group.vue';
import TagsGroup from '../../components/tags-group.vue';

export default {
  components: {
    FieldGroup,
    TagsGroup,
  },
  data() {
    return {
      descriptionTask: '',
      tasks: [],
    };
  },
  methods: {
    addTask() {
      if (this.descriptionTask) {
        this.tasks = [
          {
            index: new Date().getTime(),
            description: this.descriptionTask,
            done: false,
          },
          ...this.tasks,
        ];
        this.descriptionTask = '';
      }
    },
    removeTask(taskIndex) {
      this.tasks = [...this.tasks.filter(task => task.index !== taskIndex)];
    },
    onTypingTask(inputValue) {
      this.descriptionTask = inputValue;
    },
    onChangeTaskStatus(targetTask) {
      const filteredTasks = this.tasks.filter(
        task => task.index !== targetTask.index,
      );

      const updatedTask = { ...targetTask, done: !targetTask.done };

      const sortedTasks = targetTask.done
        ? [updatedTask, ...filteredTasks]
        : [...filteredTasks, updatedTask];

      this.tasks = sortedTasks;
    },
  },
};
</script>
