import 'font-awesome/css/font-awesome.min.css'; // Ensure you are using css-loader
import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App.vue';
import './plugins/vuetify';
import 'vuetify/dist/vuetify.min.css';


Vue.use(Vuetify, {
    iconfont: 'fa4'
})


Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app');