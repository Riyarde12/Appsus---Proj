import { notesService } from "../services/note-service.js";
// import { eventBus } from "../services/eventBus-service.js";
// import notesList from "../cmps/note-list.cmp.js";
import noteTxt from "../cmps/note-txt.cmp.js";
import noteTodos from "../cmps/note-todos.cmp.js";

export default {
  template: `
        <section class="notes-index">
            <!-- <form @submit.prevent="save"> -->
                <div v-for="(note, idx) in notes" :key="note.id" class="note-container">
                <!-- <note-preview :note="note"/> -->
                    <component :is="note.type" :info="note.info"></component>
                    <!-- TODO:change to icons -->
                    <div actions-icon-container>
                    <button>Save</button>
                    <button>Edit</button>
                    <button>Remove</button>
                    </div>
                  </div>
                
            </form>

            <!-- <pre>{{answers}}</pre> -->
          <!-- <div class="note-list-container">
              <notes-list v-if="notes" :notes="notesForDisplay" @selected="selectNote" />
          </div> -->
          
        </section>
    `,
  components: {
    // notesList,
    noteTxt,
    noteTodos,
  },

  data() {
    return {
      notes: null,
      // answers: []
      // notes: null,
      //   filterBy: null,
    };
  },
  created() {
    notesService
      .query()
      .then((notes) => {
        console.log("notes-index notes", notes);
        this.notes = notes;
      })
      .catch((error) => console.log("error", error));
    //   .catch('error, try again later')
    console.log("notes app");
    console.log("created this.notes", this.notes);
  },
  methods: {},
  computed: {
    notesForDisplay() {
      return this.notes;
      //   if (!this.filterBy) return this.notes;
      //   console.log("this.notes", this.notes);
      //   //short circut: if the first is undefiend put 0
      //   const min = this.filterBy.fromPrice || 0;
      //   const max = this.filterBy.toPrice || Infinity;
      //   // return this.notes;
      //   const regex = new RegExp(this.filterBy.title, "i");
      //   return this.notes.filter((notes) => {
      //     return regex.test(notes.title) && min < notes.listPrice.amount && max > notes.listPrice.amount;
      //   });
    },
  },
  mounted() {
    console.log("mounted this.notes", this.notes);
  },
};
