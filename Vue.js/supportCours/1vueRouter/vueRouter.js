// 1. Définissez les composants de route.
// Ces derniers peuvent être importés depuis d'autre fichier
const Foo = { template: "<div>foo</div>" };
const Bar = { template: "<div>bar</div>" };
const User = {
  template: `<div>
              User {{ $route.params.username }}
              <router-view></router-view>
            </div>`,
};
const Billet = {
  template: `<div>Billet {{ $route.params.post_id }}</div>`,
};

const Profile = {
  template: `<div>Profile utilisateur</div>`,
};

// 2. Définissez des routes.
// Chaque route doit correspondre à un composant. Le « composant » peut
// soit être un véritable composant créé via `Vue.extend()`, ou juste un
// objet d'options.
// Nous parlerons plus tard des routes imbriquées.
const routes = [
  { path: "/foo", component: Foo },
  { path: "/bar", component: Bar },
  { path: "/user/:username/billet/:post_id", component: User },
  { path: "/user/:username/profile", component: User },
];

// 3. Créez l'instance du routeur et passez l'option `routes`.
// Vous pouvez également passer des options supplémentaires,
// mais nous allons faire simple pour l'instant.
const router = new VueRouter({
  routes, // raccourci pour `routes: routes`
});

// 5. Créez et montez l'instance de Vue.
// Soyez sûr d'injecter le routeur avec l'option `router` pour
// permettre à l'application tout entière d'être à l'écoute du routeur.
const app = new Vue({
  router,
}).$mount("#app");
