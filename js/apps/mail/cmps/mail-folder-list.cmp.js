
export default {
  props: [""],
  template: `
        <section class="mail-folder-list">
          <ul>
            <li>
              <button @click="onSelectBox('from')">
                 <router-link to="/mail/inbox">
                   <img src="../../icons/envelope.png" alt="">
                  </router-link>
                </button>
            </li>
            <li>
              <button  @click="onSelectBox('to')">
                <router-link to="/mail/sent">
                  <img src="../../icons/sent.png" alt="">
                </router-link>
            </button>
          </li>
            <li>
              <button   @click="onSelectBox('isTrash')">
              <router-link to="/mail/trash">
                <img src="../../icons/trash-can.png" alt="">
              </router-link>
            </button>
          </li>
            <li>
              <button  @click="onSelectBox('isDraft')">
                <router-link to="/mail/draft">
                  <img src="../../icons/draft.png" alt="">
                </router-link>
              </button></li>
            <li>
              <button @click="onSelectBox('isStared')">
               <router-link to="/mail/stared">
                  <img src="../../icons/favourite.png" alt="">
                </router-link>
              </button>
            </li>
          </ul>
             

        </section>
    `,
  components: {},
  created() { },
  data() {
    return {

    };
  },
  methods: {
    onSelectBox(val) {
      this.$emit('onSelectedBox', val);
    },

  },
  computed: {},
  unmounted() { },
};