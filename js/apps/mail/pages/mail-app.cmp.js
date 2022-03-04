import { mailService } from '../services/mail-service.js';
import mailList from '../cmps/mail-list.cmp.js';
import mailFilter from '../cmps/mail-filter.cmp.js';
import mailFolderList from '../cmps/mail-folder-list.cmp.js';
import { eventBus } from '../../../services/eventBus-service.js';
// import { router } from '../../../router.js';


export default {
    template: `
        <section class="mail-index main-container">
            <nav>
                <router-link  to="/mail/compose">Compose</router-link>
            </nav>
            <div  class="main-content flex">
                <mail-folder-list @onSelectedBox="settingCurrentBox"/>
                <router-view></router-view>
            </div>
        </section>
    `,
    components: {
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
        settingCurrentBox(settingMailsBy) {
            console.log('settingMailsBy', settingMailsBy);
            this.mailsForDisplay = [];
            this.mailsForDisplay = this.mails.filter(mail => {
                if (mail[settingMailsBy]) return mail[settingMailsBy];
            });
            console.log('this.mailsForDisplay', this.mailsForDisplay);
            eventBus.emit('selectedBox', this.mailsForDisplay);
        }
    },
    computed: {
    },
    unmounted() {
        console.log('bye bye');
    },
};