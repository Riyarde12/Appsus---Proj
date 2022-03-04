import mailPreview from "../cmps/mail-preview.cmp.js";
import mailDetails from "../pages/mail-details.cmp.js";
import mailFilter from "./mail-filter.cmp.js";

export default {
  props: ["mails"],
  template: `
        <section class="mail-list">
          <div class="list-container">
            <ul>
                <li v-for="mail in mails" :key="mail.id">
                    <mail-preview :mail="mail"/>
                     <router-link :to="'/mail/'+mail.id">Open Mail</router-link>
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
      mailsForDisplay: null,
      filterBy: null,
    };
  },
  methods: {
  },
  computed: {
  },
  unmounted() { },
};
