export default {
  template: `
  <section class="new-note-container">
          <div class="new-note flex space-between">
                <label for="title"><input type="text" placeholder="Note Title"></label>
                <label for="note-text"><input type="text" placeholder="Note Text"></label>
                <button @click="addNote" >Save</button>
          </div>
          <div class="not-nav-container">
            <i class="fa-solid fa-image"></i>
            <i class="fa-solid fa-play"></i> 
            <i class="fa-solid fa-list-ul"></i>
          </div>
  </section>
  `,
  data() {
    return {};
  },
  components: {},
  created() {},
  methods: {
    AddNote(id) {
      this.$emit("addNote", id);
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
