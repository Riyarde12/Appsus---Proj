export default {
  props: ["info"],
  template: `
          <section >            
             <label>
                {{info.label}}
                <input type="text" v-model="val" @change="reportVal" />
             </label>  
          <!-- <label for="story">{{info.title}}</label>
                <textarea v-model="val" @change="reportVal" rows="5" cols="33">Enter Text...</textarea> -->
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
    // listId() {
    //   return "list" + this._uid;
    // },
  },
  created() {
    console.log(this.info);
    console.log(this.info.lable);
  },
};
