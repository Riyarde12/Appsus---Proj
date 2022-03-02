export default {
    // props: [""],
    template: `
        <section class="app-header">
            <!-- <h1>Hello!!! header</h1> -->
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/notes">Notes</router-link>
        <router-link to="/mail">Mail</router-link>
        </section>
    `,
    components: {},
    created() { },
    data() {
        return {};
    },
    methods: {},
    computed: {},
    unmounted() { },
}