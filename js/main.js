import SplashComponent from './modules/SplashComponent.js';
import RegisterComponent from './modules/RegisterComponent.js';
import ErrorComponent from './modules/ErrorComponent.js';

const routes = [
    { path: '/', name: 'splash', component: SplashComponent },
    { path: '/register', name: 'register', component: RegisterComponent },
    { path: '*', name: 'error', component: ErrorComponent}
]

const router = new VueRouter({
    routes
})



const vm = new Vue({
    data: {

    },

    methods: {

    },
    
    router
}).$mount("#app");