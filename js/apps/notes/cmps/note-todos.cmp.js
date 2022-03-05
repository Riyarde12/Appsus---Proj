export default {
  props: ["info", "noteId"],
  template: `
        <section class="todos-container">  
            <div>  
            <h3 @keyup="updateNote" contenteditable="true">{{info.title}}</h3>
                <div v-for="task in info.todos" class="note-text-container">    
                  <p ><span @keyup="updateNote" contenteditable="true">{{task.txt}}</span>  ☓</p>
                    <!-- <input type="checkbox" :id="task.txt" :value="task"> -->
                    <!-- <label :for="task.txt">{{task.txt}}</label> -->
                </div>
            </div>
          
        </section>
          `,

  data() {
    return {
      newNote: {
        newTitle:'',
        newTxt:'',
        id: this.noteId
        }
      // val: "",
      // selectedTasks: [],
    };
  },
  methods: {
    updateNote(ev) {
      if (ev.path[0].localName === 'h3') this.newNote.newTitle = ev.currentTarget.textContent;
      if (ev.path[0].localName === 'span') this.newNote.newTxt = ev.currentTarget.textContent;
      this.$emit('updateNote', {...this.newNote});
      console.log('after emit', this.newNote);
    },
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
    // listId() {
    //   return "list" + this._uid;
    // },
  },
  created() {
    // console.log(this.info);
    // console.log(this.info.label);
  },
};
