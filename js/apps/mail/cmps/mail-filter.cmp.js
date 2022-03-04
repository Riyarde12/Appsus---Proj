

export default {
    // props: [""],
    template: `
        <section class="mail-filter">
            <label>
                    Filter by
                    <input v-model="filterBy.subject" type="text" placeholder="Search an email...">
 
                    <label for="">
                        Filter only read
                    </label>
                    <input type="checkbox" v-model="filterBy.isRead" >
            </label>

        </section>
    `,
    components: {},
    created() { },
    data() {
        return {
            filterBy: {
                subject: '',
                isRead: false,
            }
        };
    },
    methods: {
        setFilter() {

            this.$emit('filtered', this.filterBy);
        }
    },
    watch: {
        filterBy: {
            handler() {
                this.setFilter();
            },
            deep: true
        }
    },
    computed: {},
    unmounted() { },
};