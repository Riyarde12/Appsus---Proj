export default {
  props: ["info"],
  template: `
        <section class="todos-container">  
            <div>  
            <h3>{{info.title}}</h3>
                <div v-for="task in info.todos" class="note-text-container">    
                    <input type="checkbox":id="task.txt" :value="task" v-model="selectedTasks" @change="handleTasks(task)">
                    <label :for="task.txt">{{task.txt}}</label>
                </div>
            </div>
          
        </section>
          `,

  data() {
    return {
      val: "",
      selectedTasks: [],
    };
  },
  methods: {
    handleTasks(task) {
      console.log(this.selectedTasks);
    },
    simulateAjax() {
      this.selectedTasks = [{ txt: "Clean the house" }, { txt: "Learn Vue.js" }];
    },
    reportVal() {
      this.$emit("setVal", this.val);
      console.log("setVal", this.val);
    },
  },
  computed: {
    // listId() {
    //   return "list" + this._uid;
    // },
  },
  created() {
    console.log(this.info);
    console.log(this.info.label);
  },
};
