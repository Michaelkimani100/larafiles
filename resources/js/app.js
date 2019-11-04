require('./bootstrap');

window.Vue = require('vue');
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)


Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('file', require('./components/FileUpload.vue').default);



const app = new Vue({
    el: '#app',
});