
export default {
  props: [""],
  template: `
        <section class="mail-folder-list">
          <ul>
            <li><button @click="onSelectBox('from')"><img src="../../icons/envelope.png" alt=""></button></li>
            <li><button  @click="onSelectBox('to')"><img src="../../icons/sent.png" alt=""></button></li>
            <li><button   @click="onSelectBox('isTrash')"><img src="../../icons/trash-can.png" alt=""></button></li>
            <li><button  @click="onSelectBox('isDraft')"><img src="../../icons/draft.png" alt=""></button></li>
            <li><button @click="onSelectBox('isStared')"><img src="../../icons/favourite.png" alt=""></button></li>
          </ul>
        </section>
    `,
  components: {},
  created() { },
  data() {
    return {
      // setFolderBy: {
      //   sent: false,
      //   trash: false,
      //   draft: false,
      //   isStared: false,
      //   inbox: false,
      // }

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