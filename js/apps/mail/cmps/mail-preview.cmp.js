


export default {
    props: ["mail"],
    template: `
        <section class="mail-preview" :style="isRead">
            <div >
                <!-- <div> -->
                    <button @click.stop.prevent="onStared"><img src="../../icons/favourite.png" alt=""></button>
                <!-- </div> -->
                <!-- <div> -->
                    <h3>{{mail.name}}</h3>
                <!-- </div> -->
                <!-- <div> -->
                    <h4>{{mail.subject}}</h4>
                <!-- </div> -->
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
            if (this.mail.isRead) return 'background-color: rgba(231, 231, 231, 0.37), font-weight: normal';
        }
    },

    unmounted() { },
};