export default {
    props: ["info"],
    template: `
          <section class="todos-container">  
              <div contenteditable="true">  
              <h3>{{info.title}}</h3>
                  <div class="img-container">    
                    <video width="250" height="150" autoplay>
                        <source :src="info.url" type="video/mp4">
                    </video>
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
      console.log(this.info);
      console.log('video', this.info.url);
    //   console.log(this.info.label);
    },
  };
  