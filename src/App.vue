<template>
  <app-header />
  <app-main>
    <simple-increment />
    <todo-list />
    <levels />
    <vuex-simple-increment />
  </app-main>
  <app-footer />
</template>

<script>
import AppFooter from './components/app-footer.vue';
import AppHeader from './components/app-header.vue';
import AppMain from './components/app-main.vue';
import SimpleIncrement from './examples/simple-increment/index.vue';
import TodoList from './examples/todo-list/index.vue';
import Levels from './examples/levels/index.vue';
import VuexSimpleIncrement from './examples/vuex-simple-increment/index.vue';

export default {
  name: 'App',
  components: {
    AppMain,
    AppFooter,
    AppHeader,
    SimpleIncrement,
    TodoList,
    Levels,
    VuexSimpleIncrement,
  },
};
</script>
