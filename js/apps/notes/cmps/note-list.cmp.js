import notePreview from "./note-preview.cmp.js";

export default {
  props: ["notes"],
  template: `
        <section class="note-list">
            <ul>
                <li v-for="note in notes" :key="note.id" class="note-list-container clean-list">
                <note-preview :note="note"/>
                <div class="actions-container">
                    <!-- TEMP - TODO: add icons -->
                    <button @click="onRemoveNote(note.id)">X</button> 
                </div>
                </li>
            </ul>
        </section>
    `,
  components: {
    notePreview,
  },
  created() {
    console.log("note-list created", this.notes);
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
  mounted() {
    console.log("note-list mounted", this.notes);
  },
  unmounted() {},
};
