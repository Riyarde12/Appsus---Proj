export default {
  props: ["note"],
  template: `
        <section class="note-preview">
            <div>
                <p>{{note.info.title}}</p>
            </div>
        </section>
    `,
  components: {},
  created() {
    console.log("preview created", this.note.info.title);
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
  unmounted() {},
};
