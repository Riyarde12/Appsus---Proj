

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
            isRead: null,
            updatedMail: this.mail,
        };
    },
    methods: {
        // onReadChange() {
        //     this.updatedMail.isRead = isRead;
        //     console.log('updatedMail', this.updatedMail);
        // }
    },
    computed: {},
    watch: {
        isRead: {
            handler() {
                console.log('Watching you!');
                this.updatedMail.isRead = this.isRead;
                console.log('updatedMail', this.updatedMail);
                this.$emit('stateChange', { ...this.updatedMail });
            },
            deep: true
        }
    },
    unmounted() { },
};