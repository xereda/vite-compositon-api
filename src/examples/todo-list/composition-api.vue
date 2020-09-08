<template>
  <field-group
    with-button
    placeholder="Type a task..."
    theme="is-info"
    :value="descriptionTask"
    @input="onTypingTask"
    @click="addTask"
  >
    <tags-group
      theme="is-info"
      :tags="tasks"
      @change="onChangeTaskStatus"
      @remove="removeTask"
    />
    <!-- <ul>
      <li v-for="task in sortedByChar" :key="task.index">
        {{ task.description }}
      </li>
    </ul> -->
  </field-group>
</template>

<script>
import { ref, computed } from 'vue';
import FieldGroup from '../../components/field-group.vue';
import TagsGroup from '../../components/tags-group.vue';

export default {
  components: {
    FieldGroup,
    TagsGroup,
  },
  setup() {
    const descriptionTask = ref('');
    const tasks = ref([]);

    function onTypingTask(inputValue) {
      descriptionTask.value = inputValue;
    }

    function addTask() {
      if (descriptionTask.value) {
        tasks.value = [
          {
            index: new Date().getTime(),
            description: descriptionTask.value,
            done: false,
          },
          ...tasks.value,
        ];

        descriptionTask.value = '';
      }
    }

    function onChangeTaskStatus(targetTask) {
      const filteredTasks = tasks.value.filter(
        task => task.index !== targetTask.index,
      );

      const updatedTask = { ...targetTask, done: !targetTask.done };

      const sortedTasks = targetTask.done
        ? [updatedTask, ...filteredTasks]
        : [...filteredTasks, updatedTask];

      tasks.value = sortedTasks;
    }

    function removeTask(taskIndex) {
      tasks.value = [...tasks.value.filter(task => task.index !== taskIndex)];
    }

    // const sortedByChar = computed(() =>
    //   [...tasks.value].sort((a, b) => (a.description > b.description ? 1 : -1)),
    // );

    return {
      descriptionTask,
      tasks,
      onTypingTask,
      addTask,
      onChangeTaskStatus,
      removeTask,
      // sortedByChar,
    };
  },
};
</script>
