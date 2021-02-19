// Home.vue
export default {
  computed: {
    username() {
      // Nous verrons ce que représente `params` dans un instant.
      return this.$route.params.username;
    },
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
  },
};
