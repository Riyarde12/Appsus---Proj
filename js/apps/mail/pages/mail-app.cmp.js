import { mailService } from '../services/mail-service.js';
import mailList from '../cmps/mail-list.cmp.js';
import mailFilter from '../cmps/mail-filter.cmp.js';

export default {
    // props: [""],
    template: `
        <section class="mail-index">
            <h1>Hello mail index!!</h1>
            <mail-filter @filtered="setFilterBy"/>
            <mail-list  :mails="mailsToShow"/>
        </section>
    `,
    components: {
        mailList,
        mailFilter,
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
            filterBy: null,
            mailsRead: [],
        };
    },
    methods: {
        setFilterBy(filterBy) {
            this.filterBy = filterBy;
            console.log('this.filterBy', this.filterBy);
        },
        // setIsRead(updatedMail) {
        //     const idx = this.mails.findIndex(mail => mail.id === updatedMail.id);
        //     this.mails[idx].isRead = updatedMail.isRead;
        //     console.log('this.mails', this.mails);
        //     mailService.save(this.mails)
        //         .then(() => this.mailsRead.push(updatedMail));
    }
},
computed: {
    mailsToShow() {
        if (!this.filterBy) return this.mails;
        const regex = new RegExp(this.filterBy.subject, 'i');
        // const isRead = this.filterBy.isRead;
        console.log('this.mailsRead', this.mailsRead);
        // if (isRead) return mailsRead;
        return this.mails.filter(mail => (regex.test(mail.subject)));
    }
},
unmounted() { },
};