import mailPreview from "../cmps/mail-preview.cmp.js";

export default {
  props: ["mails"],
  template: `
        <section class="mail-list">
            <ul>
                <li v-for="mail in mails" :key="mail.id">
                    <mail-preview :mail="mail"/>
                     <router-link :to="'/mail/'+mail.id">Open Mail</router-link>
                </li>
            </ul>
        </section>
    `,
  components: {
    mailPreview,
  },
  created() {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
  unmounted() {},
};
