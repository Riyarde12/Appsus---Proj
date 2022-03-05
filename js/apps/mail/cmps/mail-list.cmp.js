import mailPreview from "../cmps/mail-preview.cmp.js";
import mailDetails from "../pages/mail-details.cmp.js";
import mailFilter from "./mail-filter.cmp.js";

export default {
  props: ["mails"],
  template: `
        <section class="mail-list">
          <div class="list-container">
            <ul>
               <!-- <TransitionGroup
                    tag="ul"
                    :css="false"
                    @before-enter="onBeforeEnter"
                    @enter="onEnter"
                    @leave="onLeave"
                  > -->
                <li v-for="mail in mails" :key="mail.id">
                     <router-link :to="'/mail/'+mail.id"><mail-preview :mail="mail"/></router-link>
                </li>
               \ <!-- </TransitionGroup> -->
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
      // query: '',
    };
  },
  methods: {
    // onBeforeEnter(el) {
    //   el.style.opacity = 0;
    //   el.style.height = 0;
    // },
    // onEnter(el, done) {
    //   gsap.to(el, {
    //     opacity: 1,
    //     height: '1.6em',
    //     delay: el.dataset.index * 0.15,
    //     onComplete: done
    //   });
    // },
    // onLeave(el, done) {
    //   gsap.to(el, {
    //     opacity: 0,
    //     height: 0,
    //     delay: el.dataset.index * 0.15,
    //     onComplete: done
    //   });
    // }

  },
  computed: {
  },
  unmounted() { },
};
