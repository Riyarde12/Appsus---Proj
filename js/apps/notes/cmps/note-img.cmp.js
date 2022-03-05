export default {
  name: "img note",
    props: ["info", "noteId"],
    template: `
          <section :style="backgroundColor" class="todos-container">  
              <div>  
              <h3 @keyup="updateNote" contenteditable="true">{{info.title}}</h3>
                  <div class="img-container">    
                     <img @click="toggleEdit" :src="info.url" class="note-img" title="Edit Image" alt="Pictur"> 
                     <input v-show="isImgClicked" @keyup="updateNote" v-model="newNote.newUrl" type="text" placeholder="Enter img URL..">
                  </div>
              </div>
            
          </section>
            `,
  
    data() {
      return {
        isImgClicked: false,
        newNote: {
          newTitle: this.info.title,
          newTxt:'',
          id: this.noteId,
          newUrl: '',
        }
        // newImgUrl: this.info.url,
        // val: "",
        // selectedTasks: [],
      };
    },
    methods: {
      updateNote(ev) {
        // console.log('ev', ev);
        if (ev.target.nodeName === 'H3') this.newNote.newTitle = ev.currentTarget.textContent;
        // this.newUrl = this.info.url;
        console.log('img new url', this.info.url);
        this.$emit('updateNoteUrl', {...this.newNote});
        // console.log('after emit', ev.target.nodeName);
      },
      toggleEdit(){
        this.isImgClicked = !this.isImgClicked;
      }
      // handleTasks(task) {
      //   console.log(this.selectedTasks);
      // },
      // simulateAjax() {
      //   this.selectedTasks = [{ txt: "Clean the house" }, { txt: "Learn Vue.js" }];
      // },
      // reportVal() {
      //   this.$emit("setVal", this.val);
      //   console.log("setVal", this.val);
      // },
    },
    computed: {
      backgroundColor() {
        return `background-color: ${this.info.style.backgroundColor}`;
      },
    },
    created() {
      this.newNote.newUrl = this.info.url
    //   console.log(this.info);
    //   console.log(this.info.label);
    },
  };
  