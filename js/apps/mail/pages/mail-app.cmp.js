import { mailService } from '../services/mail-service.js';
import mailList from '../cmps/mail-list.cmp.js';
import mailFilter from '../cmps/mail-filter.cmp.js';
import mailFolderList from '../cmps/mail-folder-list.cmp.js';

export default {
    // props: [""],
    template: `
        <section class="mail-index main-container">
            <mail-filter @filtered="setFilterBy"/>
            <div  class="main-content flex">
                <mail-folder-list @onSelectedBox="settingCurrentBox"/>
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
            });
    },
    data() {
        return {
            mails: null,
            filterBy: null,
            mailsForDisplay: [],
        };
    },
    methods: {
        setFilterBy(filterBy) {
            this.filterBy = filterBy;
        },
        settingCurrentBox(settingMailsBy) {
            this.mailsForDisplay = [];
            console.log('settingMailsBy', settingMailsBy);
            this.mailsForDisplay = this.mails.filter(mail => {
                if (mail[settingMailsBy]) return mail[settingMailsBy];
            });
            console.log('mail', this.mailsForDisplay);
        }
    },
    computed: {
        mailsToShow() {
            if (!this.filterBy) return this.mailsForDisplay;
            const regex = new RegExp(this.filterBy.subject, 'i');
            const isRead = this.filterBy.isRead;
            if (isRead) {
                const mailIsRead = this.mails.filter(mail => {
                    return mail.isRead === true;
                });
                if (isRead && this.filterBy.subject) {
                    const mailsForShow = [];
                    mailsForShow.push(...mailIsRead);
                    const setAllFilterBy = mailsForShow.filter(mail => (regex.test(mail.subject)));
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