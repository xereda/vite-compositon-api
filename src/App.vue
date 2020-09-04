<template>
  <app-header />
  <app-main>
    <simple-increase />
    <todo-list />
  </app-main>
  <app-footer />
</template>

<script>
import AppFooter from './components/app-footer.vue';
import AppHeader from './components/app-header.vue';
import AppMain from './components/app-main.vue';
import SimpleIncrease from './examples/simple-increase/index.vue';
import TodoList from './examples/todo-list/index.vue';

export default {
  name: 'App',
  components: {
    AppMain,
    AppFooter,
    AppHeader,
    SimpleIncrease,
    TodoList,
  },
};
</script>
