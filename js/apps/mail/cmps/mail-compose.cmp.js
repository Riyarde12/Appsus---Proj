import { mailService } from '../services/mail-service.js';
import { eventBus } from '../../../services/eventBus-service.js';


export default {
    // props: [""],
    template: `
    <section class="mail-compose">
        <div>
            <form @submit.prevent="addNewMail">
                <input v-model="newMail.subject" type="text">
                <textarea v-model="newMail.body" cols="30" rows="10"></textarea>
                <button>sent</button>
            </form>
        </div>
    </section>
    `,
    data() {
        return {
            newMail: mailService.setNewMailtoSent(),
        };
    },
    components: {},
    created() {
    },
    methods: {
        addNewMail() {
            mailService.save(this.newMail)
                .then(() => {
                    this.newMail = mailService.setNewMailtoSent();
                    console.log('this.newMail', this.newMail);
                    this.$router.push('/mail');
                });
        }
    },
    computed: {},
    unmounted() { },
};