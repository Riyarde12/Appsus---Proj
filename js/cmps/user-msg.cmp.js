import {eventBus} from '../services/eventBus-service.js'

export default {
    // props: [""],
    template: `
        <section v-if="msg" class="user-msg" :class="msg.type">
            <div>
                <button @click="closeModal">X</button>
            </div>
            <div>
                <p>{{msg.txt}}</p>
                <!-- <router-link to="/book">Check it Out</router-link> -->
            </div>
        </section>
    `,
    components: {},
    created() {
        this.unsubscribe = eventBus.on('show-msg', this.showMsg);
    },
    data() {
        return {
            msg: null,
            timeoutId: null,
        };
    },
    methods: {
        showMsg(msg) {
            this.msg = msg;
            this.timeoutId = setTimeout(() => {
                this.msg = null;
            }, 3000);
        },
        closeModal() {
            this.msg = null,
                clearTimeout(this.timeoutId);
        }
    },
    computed: {},
    unmounted() {
        this.unsubscribe();
    },
};