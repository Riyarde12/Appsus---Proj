import { notesService } from '../services/note-service.js'

export default {
  template: `
  <section class="new-note-container flex" >
          <div class="new-note">
                <label for="title"><input type="text" v-model="noteToAdd.info.title" placeholder="Note Title"></label>
                <label for="note-text"><input type="text" v-model="noteToAdd.info.txt" required placeholder="Add Text"></label>
                <button @click="saveNewNote" >Save</button>
          </div>
          <div class="new-note-nav-container space-between">
            <i class="fa-solid fa-image"></i>
            <i class="fa-solid fa-play"></i> 
            <i class="fa-solid fa-list-ul"></i>
          </div>
  </section>
  `,
  data() {
    return {
      noteToAdd: notesService.getEmptyTxtNote(),
    };
  },
  components: {},
  created() {},
  methods: {
    saveNewNote() {
      // console.log('addNote',this.noteToAdd);
      this.$emit("newNote",this.noteToAdd);
    },

    computed: {},
    unmounted() {},
  },
};

// <!-- <i class="fa-regular fa-comment-lines"></i> -->
// <!-- <i class="fa-solid fa-comment-lines"></i> -->
// <!-- <i class="fa-light fa-comment-lines"></i> -->
//   <!-- <i class="fa-solid fa-message-lines"></i> -->
//   <!-- <i class="fa-regular fa-message-lines"></i> -->
//   <!-- <i class="fa-solid fa-text"></i> -->
//   <!-- <i class="fa-regular fa-camera-movie"></i> -->
//   <!-- <i class="fa-brands fa-youtube"></i>  -->
//   <!-- <i class="fa-light fa-video"></i> -->
//   <!-- <i class="fa-light fa-video-arrow-up-right"></i> -->
//   <!-- <i class="fa-regular fa-video-arrow-up-right"></i> -->
//   <!-- <i class="fa-regular fa-play"></i> -->
//   <!-- <img src="../../../../img/text.png" alt=""> -->
//   <!-- <img src="../../../../img/video.png" alt=""> -->
