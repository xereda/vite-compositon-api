import { createApp } from 'vue';
import App from './App.vue';
import store from './store/vuex.js';
import '../node_modules/bulma/css/bulma.css';

const app = createApp(App);
app.use(store);

app.mount('#app');
