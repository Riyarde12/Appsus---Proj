


export default {
    props: ["mail"],
    template: `
        <section class="mail-preview">
            <div :style="isRead">
                <button @click.stop.prevent="onStared"><img src="../../icons/favourite.png" alt=""></button>
                <h3>{{mail.name}}</h3>
                <h4>{{mail.subject}}</h4>
            </div>
        </section>
    `,
    components: {},
    created() {

    },
    data() {
        return {
        };
    },
    methods: {
        onStared() {
            this.mail.isStared = true;
            console.log('this.mail', this.mail);
        }
    },
    computed: {
        isRead() {
            if (this.mail.isRead) return 'background-color: rgba(224, 221, 221, 0.938)';
        }
    },

    unmounted() { },
};