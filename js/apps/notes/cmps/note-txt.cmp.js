export default {
  props: ["info"],
  template: `
          <section class="note-text-container">    
              <div :class="backgroundColor" class="note-text">    
                <h3>{{info.title}}</h3>    
                <p>{{info.txt}}</p>    
              </div>
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
      val: "",
    };
  },
  methods: {
    reportVal() {
      this.$emit("setVal", this.val);
      console.log("setVal", this.val);
    },
  },
  computed: {
    backgroundColor() {
      return this.info.style.backgroundColor;
    },
    // listId() {
    //   return "list" + this._uid;
    // },
  },
  created() {
    console.log(this.info);
    console.log(this.info.label);
  },
};
