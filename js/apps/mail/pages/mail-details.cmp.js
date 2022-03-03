import { mailService } from "../services/mail-service.js";
import mailFolderList from "../cmps/mail-folder-list.cmp.js";
import mailFilter from "../cmps/mail-filter.cmp.js";

export default {
    // props: [""],
    template: `
        <section class="mail-details main-container">
            <!-- <div> -->
                <!-- <mail-filter /> -->
                <div class="details-container">
                    <mail-folder-list />
                    <div class="content-container" v-if="mail">
                        <h2>{{mail.subject}}</h2>
                        <h3>{{mail.name}}</h3>
                        <p>{{mail.body}}</p>
                        <button @click="onDelete(mail.id)">Delete</button>
                        <router-link to="/mail">Back to Mails</router-link>
                    </div>
                </div>
            <!-- </div> -->
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
                console.log('this.mail', this.mail);
            });
    },
    data() {
        return {
            mail: null,
        };
    },
    methods: {
        onDelete(mailId) {
            console.log('id', mailId);
            mailService.remove(mailId)
                .then(() => {
                    this.$router.push('/mail');
                    console.log('example');
                });
        },

    },
    computed: {},
    unmounted() { },
};