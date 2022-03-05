import { mailService } from '../services/mail-service.js';
// import mailList from '../cmps/mail-list.cmp.js';
import mailFilter from '../cmps/mail-filter.cmp.js';
import mailFolderList from '../cmps/mail-folder-list.cmp.js';
import { eventBus } from '../../../services/eventBus-service.js';
import mailCompose from '../cmps/mail-compose.cmp.js';


export default {
    // name: 'mailApp',
    template: `
        <section class="mail-index main-container">
            <nav>
                   <button v-on:click="isShown = !isShown">Compose
                       <mail-compose  v-if="isShown" @closeModal="toggleModal"/>
                    </button>
            </nav>
            <div class="main-content flex">
                <mail-folder-list @onSelectedBox="settingCurrentBox"/>
                <router-view></router-view>
            </div>
        </section>
    `,
    components: {
        mailFilter,
        mailFolderList,
        mailCompose,
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
            isShown: false,
            mailsForDisplay: [],
        };
    },
    methods: {
        settingCurrentBox(settingMailsBy) {
            this.mailsForDisplay = [];
            this.mailsForDisplay = this.mails.filter(mail => {
                if (mail[settingMailsBy]) return mail[settingMailsBy];
            });
            eventBus.emit('selectedBox', this.mailsForDisplay);
        },
        toggleModal() {
            this.isShown = false;
        }
    },
    computed: {
        // openCompose() {
        //     return { display: block };
        // }
    },
    unmounted() {
        console.log('bye bye');
    },
};