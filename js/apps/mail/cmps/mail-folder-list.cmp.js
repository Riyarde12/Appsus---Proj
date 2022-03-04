
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
                <img src="../../icons/favourite.png" alt="">
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
      console.log('val', val);
      this.$emit('onSelectedBox', val);
    },

  },
  computed: {},
  unmounted() { },
};