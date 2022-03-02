

export default {
    // props: [""],
    template: `
        <section class="mail-filter">
            <label>
                    Filter by
                    <input v-model="filterBy.subject" type="text" placeholder="Search an email...">
                    <button @click="setFilter">Search</button>
            </label>

        </section>
    `,
    components: {},
    created() { },
    data() {
        return {
            filterBy: {
                subject: '',
                // isRead: false,
            }
        };
    },
    methods: {
        setFilter() {
            console.log('this.filterBy', this.filterBy);
            this.$emit('filtered', this.filterBy);
        }
    },
    computed: {},
    unmounted() { },
};