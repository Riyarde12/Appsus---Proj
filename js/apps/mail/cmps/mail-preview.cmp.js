

export default {
    props: ["mail"],
    template: `
        <section class="mail-preview">
            <div>
                <h3>{{mail.name}}</h3>
                <h4>{{mail.subject}}</h4>
               <input type="checkbox" value="Read" v-model="isRead">
            </div>
        </section>
    `,
    components: {},
    created() { },
    data() {
        return {
            isRead: this.mail.isRead,
        };
    },
    methods: {},
    computed: {},
    watch: {
        isRead: {
            handler() {
                console.log('Watching you!');
            }
        }
    },
    unmounted() { },
};