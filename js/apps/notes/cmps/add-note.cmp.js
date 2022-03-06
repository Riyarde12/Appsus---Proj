import { notesService } from '../services/note-service.js'
    
export default {
  name: "add note",
  template: `
  <section class="new-note-container flex" >
          <div class="new-note">
                <label for="title"><input type="text" v-model="noteToAdd.info.title" placeholder="Add Title.."></label>
                <label for="note-text"><input type="text" v-model="noteToAdd.info.txt" required :placeholder="placholder"></label>
                <button @click="saveNewNote" >Save</button>
          </div>
          <div class="new-note-nav-container">
            <i @click="addNewNote" class="fa-regular fa-comment-lines"></i>
            <i @click="addNewNote" class="fa-solid fa-image"></i>
            <i @click="addNewNote" class="fa-solid fa-list-ul"></i>
            <img @click="addNewNote" src="../../../../icons/play-button.png" alt="">
            <img @click="addNewNote" src="../../../../icons/comment.png" alt="">
            <!-- <i @click="addNewNote" class="fa-solid fa-play"></i>  -->
            <!-- <img @click="addNewNote" src="../../../../img/text.png" alt=""> -->
            <!-- <img src="../../../../img/img.png" alt="">
            <img src="../../../../img/video.png" alt="">
            <img src="../../../../img/list.png" alt=""> -->
          </div>
  </section>
  `,
  data() {
    return {
      noteToAdd: notesService.getEmptyTxtNote(),
      placholder: "Enter text..."
    };
  },
  components: {},
  created() {
    // console.log('this.noteToAdd.type', this.noteToAdd.type);
  },
  
  methods: {
    saveNewNote() {
      // console.log('addNote',this.noteToAdd);
      this.$emit("newNote",this.noteToAdd);
      this.noteToAdd = notesService.getEmptyTxtNote();
    },
    addNewNote(){
        switch (this.noteToAdd.type) {
          case 'note-txt':
            this.placholder = 'Enter text...'
            break;
          case 'note-img':
            this.placholder = 'Enter image URL'
            break;
          case 'note-todos':
            this.placholder = 'Enter comma separated list...'
            break;
          case 'note-video':
            this.placholder = 'Enter video URL...'
            break;
        }
    }
  },
    computed: {},
    unmounted() {},
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
/* <i class="fa-regular fa-message-plus"></i>
<font-awesome-icon icon="fa-regular fa-message-text" />
<font-awesome-icon icon="fa-regular fa-comment-pen" />
<font-awesome-icon icon="fa-solid fa-comment-dots" />
<font-awesome-icon icon="fa-regular fa-message-plus" />
<font-awesome-icon icon="fa-regular fa-message-dots" />
<font-awesome-icon icon="fa-regular fa-message-lines" />
<font-awesome-icon icon="fa-solid fa-message-lines" />
<font-awesome-icon icon="fa-solid fa-comment-pen" /> */