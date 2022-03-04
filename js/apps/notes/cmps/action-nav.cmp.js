export default {
  props: ["note"],
  template: `
<section class="add-note-container">
            <div class="actions-icon-container flex">                  
                <i class="fa-solid fa-thumbtack"></i>
                <i class="fa-solid fa-palette"></i>
                <i class="fa-solid fa-envelope"></i>
                <i class="fa-solid fa-pen-to-square"></i>
                <i class="fa-solid fa-trash-can"  @click="remove(note.id)"></i>
            </div>
</section>
`,
  data() {
    return {};
  },
  components: {},
  created() {
    console.log("action nav", this.note);
  },
  methods: {
    remove(id) {
      this.$emit("remove", id);
    },
  },
  computed: {},
  mounted() {
    console.log("note id", this.note.id);
  },
};
