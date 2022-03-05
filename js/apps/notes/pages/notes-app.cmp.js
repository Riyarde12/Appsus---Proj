import { notesService } from "../services/note-service.js";
import { showErrorMsg, showSuccessMsg } from "../../../services/eventBus-service.js";
// import { eventBus } from "../services/eventBus-service.js";
// import notesList from "../cmps/note-list.cmp.js";
import noteTxt from "../cmps/note-txt.cmp.js";
import noteTodos from "../cmps/note-todos.cmp.js";
import noteImg from "../cmps/note-img.cmp.js";
import noteVideo from "../cmps/note-video.cmp.js";
import actionNav from "../cmps/action-nav.cmp.js";
import addNote from "../cmps/add-note.cmp.js";

export default {
  template: `
        <section class="notes-index main-container flex flex-column">
              <add-note @newNote="saveNote" />
              <div v-for="(note, idx) in notes" :key="note.id" class="note-container">
                    <div class="note-box">    
                        <component :is="note.type" :info="note.info" :noteId="note.id" @noteTitleEdited="saveNote" @updateNote="editNote"></component>
                    </div>
                    <action-nav v-if="note" :note="note" @remove="removeNote"/>
              </div>
              

           <!-- <pre>{{answers}}</pre>
          <div class="note-list-container">
              <notes-list v-if="notes" :notes="notesForDisplay" @selected="selectNote" />
          </div>  -->
          
        </section>
    `,
  components: {
    // notesList,
    noteTxt,
    noteTodos,
    addNote,
    actionNav,
    noteImg,
    noteVideo,
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
        // console.log("notes-index notes", notes);
        this.notes = notes;
      })
      .catch((error) => console.log("error", error));
    //   .catch('error, try again later')
    // console.log("notes app");
    // console.log("created this.notes", this.notes);
  },
  methods: {
    removeNote(id) {
      notesService
      .remove(id)
      .then(() => {
        const idx = this.notes.findIndex((note) => note.id === id);
        this.notes.splice(idx, 1);
        showSuccessMsg("Deleted succesfully");
      })
      .catch((err) => {
        console.error(err);
        showErrorMsg("Error - please try again later");
      });
    },
    saveNote(noteToAdd){
      notesService.save(noteToAdd)
      .then((note) => {
        this.notes.push(note);
        
      })
    },
    editNote({newTitle, newTxt, id}){
      console.log('edit title', newTitle);
      console.log('edit text', newTxt);
      notesService.get(id).then(note => {
        note.info.title = newTitle;
        note.info.txt = newTxt
       notesService.save(note)
      //  .then(note => {
      //    this.notes.find(note => {
      //      if (note.id === 
      //    })
      //  })
      })
    },

    // addNote() {
    //   const newNote = notesService.getEmptyTxtNote();
    // },
  },
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
    // console.log("mounted this.notes", this.notes);
  },
};
