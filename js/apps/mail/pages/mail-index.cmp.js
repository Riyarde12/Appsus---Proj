import { mailService } from '../services/mail-service.js';
import mailList from '../cmps/mail-list.cmp.js';

export default {
    // props: [""],
    template: `
        <section class="mail-index">
            <h1>Hello mail index!!</h1>
            
            <mail-list :mails="mails"/>
        </section>
    `,
    components: {
        mailList,
    },
    created() {
        mailService.query()
            .then(mails => {
                this.mails = mails;
                console.log('mails', this.mails);
            });
    },
    data() {
        return {
            mails: null,

        };
    },
    methods: {},
    computed: {
        mailsToShow() {

        }
    },
    unmounted() { },
};