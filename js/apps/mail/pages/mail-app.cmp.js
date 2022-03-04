import { mailService } from '../services/mail-service.js';
import mailList from '../cmps/mail-list.cmp.js';
import mailFilter from '../cmps/mail-filter.cmp.js';
import mailFolderList from '../cmps/mail-folder-list.cmp.js';
import { eventBus } from '../../../services/eventBus-service.js';



export default {
    // props: [""],
    template: `
        <section class="mail-index main-container">
            <nav>
                <router-link to="/mail/compose">Compose</router-link>|
            </nav>
            <router-view></router-view>
            <mail-filter @filtered="setFilterBy"/>
            <div  class="main-content flex">
                <mail-folder-list if="" @onSelectedBox="settingCurrentBox"/>
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
        this.unsubscribe = eventBus.on('selectedBox', (data) => {
            console.log('data', data);
            this.settingCurrentBox(data);
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
            this.mailsForDisplay = this.mails.filter(mail => {
                if (mail[settingMailsBy]) return mail[settingMailsBy];
            });
        }
    },
    computed: {
        mailsToShow() {
            if (!this.mailsForDisplay.length) return this.mails;
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
    unmounted() {
        console.log('bye bye');
        this.unsubscribe();
    },
};