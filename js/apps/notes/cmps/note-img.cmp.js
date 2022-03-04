export default {
    props: ["info"],
    template: `
          <section class="todos-container">  
              <div>  
              <h3 contenteditable="true">{{info.title}}</h3>
                  <div class="img-container">    
                     <img :src="info.url" alt="Pictur"> 
                  </div>
              </div>
            
          </section>
            `,
  
    data() {
      return {
        // val: "",
        // selectedTasks: [],
      };
    },
    methods: {
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
    //   console.log(this.info);
    //   console.log(this.info.label);
    },
  };
  