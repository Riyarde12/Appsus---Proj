import { mailService } from "../services/mail-service.js";
import mailFolderList from "../cmps/mail-folder-list.cmp.js";
import mailFilter from "../cmps/mail-filter.cmp.js";
import { eventBus } from '../../../services/eventBus-service.js';

export default {
    template: `
        <section class="mail-details main-container">
                <div class="details-container">
                    <mail-folder-list @onSelectedBox="onSelectBox"/>
                    <div class="content-container" v-if="mail">
                        <h2>{{mail.subject}}</h2>
                        <h3>{{mail.name}}</h3>
                        <p>{{mail.body}}</p>
                        <button @click="onDelete(mail.id)">Delete</button>
                        <!-- <button @click="goBack"></button> -->
                        <router-link to="/mail/inbox/">Back to Mails</router-link>
                    </div>
                </div>
        </section>
    `,
    components: {
        mailFolderList,
        mailFilter,

    },
    created() {
        const id = this.$route.params.mailId;
        console.log('id', id);

        mailService.get(id)
            .then(mail => {
                this.mail = mail;
                this.mail.isRead = true;
                mailService.save(this.mail);
            });
    },
    data() {
        return {
            mail: null,
        };
    },
    methods: {
        onDelete(mailId) {
            mailService.remove(mailId)
                .then(() => {
                    this.$router.push('/mail');
                });
        },
        goBack() {
            this.$router.go(-1);
        },
        onSelectBox(value) {
            console.log('value', value);
            this.$router.push({ name: 'mailApp', params: { value: value } });
        }
    },
    computed: {},
    unmounted() { },
};