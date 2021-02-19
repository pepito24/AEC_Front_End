const Home = { template: "<div>Welcome</div>" };
const Contact = { template: "<div>Contact us @</div>" };

const routes = [
  { path: "/home", component: Home },
  { path: "/contact", component: Contact },
];

const router = new VueRouter({
  routes, // raccourci pour `routes: routes`
});

const app = new Vue({
  router,
}).$mount("#app");
