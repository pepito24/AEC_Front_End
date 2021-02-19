
import Home from './components/home.vue';
import Login from './components/Login.vue';
import Secure from './components/Secure.vue';


const routes = [
  { path: '/', component: Home },
  { path: '/secure', component: Secure },
  { path: '/login', component: Login },
];

export default routes;