import SplashComponent from "./modules/SplashComponent.js";
import AppComponent from "./modules/AppComponent.js";
import ErrorComponent from "./modules/ErrorComponent.js";

//these are the same as Express Routes -> router.get
const routes = [
    { path: '/', name: 'splash', component: SplashComponent },
    { path: '/app', name: 'app', component: AppComponent },
    //wildcard for error page must be last
    { path: '/*', name: 'error', component: ErrorComponent },
]

const router = new VueRouter({
    routes //short for routes: routes
})

const vm = new Vue({
    data: {

    },

    methods: {

    },

    router
}).$mount("#app");