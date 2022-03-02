

export default {
    props: ["mail"],
    template: `
        <section class="mail-preview">
            <div>
                <h3>{{mail.name}}</h3>
                <h4>{{mail.subject}}</h4>
               
            </div>
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
};