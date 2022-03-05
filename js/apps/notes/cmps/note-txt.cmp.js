export default {
  props: ["info", "noteId"],
  template: `
          <section class="note-text-container">    
              <div :style="backgroundColor" class="note-text">    
                <h3 @keyup="updateNote" contenteditable="true">{{info.title}}</h3>    
                <p @keyup="updateNote" contenteditable="true">{{info.txt}}</p>    
              </div>
              <!-- <input type="text" v-model="val" @change="reportVal" :disabled="isDisabled"/> -->
             <!-- <label>
                {{info.label}}
                <input type="text" v-model="val" @change="reportVal" />
             </label>   -->
             <!-- <div flex flex-column>
                <label for="">{{info.title}}</label>
                <textarea v-model="val" @change="reportVal" rows="5" cols="33">Enter Text...</textarea>
                </div> -->

          </section>
          `,

  data() {
    return {
      // val: "",
      // note: null,
      newNote: {
      newTitle:'',
      newTxt:'',
      id: this.noteId
      }

    };
  },
  methods: {
    // reportVal() {
    //   this.$emit("setVal", this.val);
      // console.log("setVal", this.val);
    // },
    updateNote(ev) {
      if (ev.path[0].localName === 'h3') this.newNote.newTitle = ev.currentTarget.textContent;
      if (ev.path[0].localName === 'p') this.newNote.newTxt = ev.currentTarget.textContent;
      this.$emit('updateNote', {...this.newNote});
      console.log('after emit', this.newNote);
    },
    // updateTitle(ev){
    //   this.newTitle = ev.currentTarget.textContent
    //   this.$emit('noteTitleEdited', this.noteId, this.newTitle);
    //   console.log('h3 updated', ev.currentTarget.textContent,this.newTitle);
    //   console.log('event', ev);
      // console.log('h3.noteId',this.noteId);
      // console.log('h3.value',this.info.title);
      // console.log(ev.target.textContent);
      // this.$emit('noteTitleEdited', this.info.title);
    // },
    // updateTxt(){
    //   this.newTxt = ev.currentTarget.textContent
    //   this.$emit('noteTxtEdited', this.newTxt);
    //   console.log('p updated', ev.currentTarget.textContent, this.newTxt);
    // }
  },
  computed: {
    backgroundColor() {
      return `background-color: ${this.info.style.backgroundColor}`;
    },
    // listId() {
    //   return "list" + this._uid;
    // },
  },
  created() {
    // console.log(this.info);
    // console.log(this.info.label);
  },
};
