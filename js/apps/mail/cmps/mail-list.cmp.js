import mailPreview from "../cmps/mail-preview.cmp.js";
import mailDetails from "../pages/mail-details.cmp.js";
import mailFilter from "./mail-filter.cmp.js";
import { mailService } from "../services/mail-service.js";

export default {
  props: ["mails"],
  template: `
        <section class="mail-list flex">
          <div class="list-container">
            <ul>
                <li v-for="mail in mails" :key="mail.id">
                     <router-link :to="'/mail/'+mail.id"><mail-preview :mail="mail" @onDelete="onMailDelete"/></router-link>
                </li>
            </ul>
          </div>
        </section>
    `,
  components: {
    mailPreview,
    mailDetails,
    mailFilter,
  },
  created() {

  },
  data() {
    return {
      filterBy: null,
      counterUnRead: null
    };
  },
  methods: {
    onMailDelete(mailId) {
      mailService.remove(mailId);
      const idx = this.mails.findIndex(mail => mail.id === mailId);
      this.mails.splice(idx, 1);
    },
    countUnread() {
      let counter = 0;
      this.mails.forEach(mail => {
        if (!mail.isRead) counter++;
      });
      this.counterUnread = counter;
      counter = 0;
      console.log('this.counterUnread', this.counterUnread);
    }
  },
  computed: {
  },
  watch: {
    counterUnRead: {
      handler() {
        this.countUnread();
        console.log('hey');
      },
      immediate: true
    }
  },
  unmounted() { },
};
