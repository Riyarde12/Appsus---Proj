import { notesService } from "../services/note-service.js";
// import { eventBus } from "../services/eventBus-service.js";
import notesList from "../cmps/note-list.cmp.js";

export default {
  template: `
        <section class="notes-index">
        <!-- <book-add @addBook="addGoogleBook"/>
              <book-filter @filtered="setFilter" /> -->
          <div class="note-list-container">
              <notes-list v-if="notes" :notes="notesForDisplay" @selected="selectNote" />
          </div>
        </section>
    `,
  components: {
    notesList,
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
  },

  data() {
    return {
      notes: null,
      //   filterBy: null,
    };
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
  //   unmounted() {},
};
