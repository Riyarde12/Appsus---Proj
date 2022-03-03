export default {
  // props: [""],
  template: `
        <section class="app-header">
            <div class="header-container flex space-between">  
              <div>
                  <h1>LOGO</h1>
              </div>
              <nav class="nav-container">
                  <router-link to="/">Home</router-link> |
                  <router-link to="/about">About</router-link> |
                  <router-link to="/notes">Notes</router-link> |
                  <router-link to="/mail">Mail</router-link>
              </nav>  
            </div>
      </section>
    `,
  components: {},
  created() {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
  unmounted() {},
};
