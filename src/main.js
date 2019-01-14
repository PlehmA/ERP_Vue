import 'font-awesome/css/font-awesome.min.css'; // Ensure you are using css-loader
import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App.vue';
import './plugins/vuetify';
import 'vuetify/dist/vuetify.min.css';
import VueRouter from 'vue-router';

// componentes

import HelloWorld from './components/HelloWorld'
import SignUp from './components/login/SignUp'
Vue.use(VueRouter)

Vue.use(Vuetify, {
    iconfont: 'fa4'
})


Vue.config.productionTip = false

const router = new VueRouter({
    routes: [
        { path: '/', component: HelloWorld },
        { path: '/signup', component: SignUp }
    ]
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');