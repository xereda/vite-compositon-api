<template>
  <div class="field has-addons">
    <div class="control">
      <input
        class="input"
        type="text"
        placeholder="Type a task"
        ref="descriptionTask"
        :value="descriptionTask"
        @input="onTypingTask"
        @keyup.enter="addTask"
      />
    </div>
    <div class="control">
      <a class="button is-danger" @click="addTask">
        Add
      </a>
    </div>
  </div>
  <div class="field is-grouped is-grouped-multiline">
    <div v-for="task in tasks" :key="task.index" class="control">
      <div class="tags has-addons">
        <a
          class="tag is-danger "
          :class="{ 'is-light': task.done, 'task-done': task.done }"
          @click="onChangeTaskStatus(task)"
        >
          {{ task.description }}
        </a>
        <a class="tag is-delete" @click="removeTask(task.index)" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
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

      this.$refs.descriptionTask.focus();
    },
    removeTask(taskIndex) {
      console.log(taskIndex);
      this.tasks = [...this.tasks.filter(task => task.index !== taskIndex)];
    },
    onTypingTask({ target }) {
      this.descriptionTask = target?.value;
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

<style lang="css" scoped>
.task-done {
  text-decoration: line-through;
}
</style>
