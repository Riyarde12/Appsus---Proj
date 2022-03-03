import { mailService } from '../services/mail-service.js';
import mailList from '../cmps/mail-list.cmp.js';
import mailFilter from '../cmps/mail-filter.cmp.js';
import mailFolderList from '../cmps/mail-folder-list.cmp.js';

export default {
    // props: [""],
    template: `
        <section class="mail-index">
            <mail-filter @filtered="setFilterBy"/>
            <div class="flex">
                <mail-folder-list />
                <mail-list  :mails="mailsToShow"/>
            </div>
        </section>
    `,
    components: {
        mailList,
        mailFilter,
        mailFolderList,
    },
    created() {
        mailService.query()
            .then(mails => {
                this.mails = mails;
                // console.log('mails', this.mails);
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
            // console.log('this.filterBy', this.filterBy);
        },
        // setIsRead(updatedMail) {
        //     const idx = this.mails.findIndex(mail => mail.id === updatedMail.id);
        //     this.mails[idx].isRead = updatedMail.isRead;
        //     console.log('this.mails', this.mails);
        //     mailService.save(this.mails)
        //         .then(() => this.mailsRead.push(updatedMail));
    },
    // },
    computed: {
        mailsToShow() {
            if (!this.filterBy) return this.mails;
            const regex = new RegExp(this.filterBy.subject, 'i');
            const isRead = this.filterBy.isRead;
            if (isRead) {
                const mailIsRead = this.mails.filter(mail => {
                    return mail.isRead === true;
                });
                console.log('only mails isRead', mailIsRead);
                if (isRead && this.filterBy.subject) {
                    const mailsForShow = [];
                    mailsForShow.push(...mailIsRead);
                    const setAllFilterBy = mailsForShow.filter(mail => (regex.test(mail.subject)));
                    console.log('all filter mails', mailsForShow);
                    return setAllFilterBy;
                }
                else {
                    return mailIsRead;
                }
            } else {
                return this.mails.filter(mail => (regex.test(mail.subject)));
            }
        },
    },
    unmounted() { },
};