import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

axios.defaults.baseURL="https://vue3-course-api.hexschool.io/";
const apiPath = "azami";

const formSignIn = document.querySelector('.form-signin')


const app={
    data(){
        return {
            productData:[],
            user:{
                username:'',
                password:''
            }
        }
    },
    methods: {
        login(){
            axios.post("/v2/admin/signin",this.user)
            .then(res=>{
                this.token=res.data.token;
                document.cookie=`token=${this.token};expires=${res.data.expired};`
                console.log(document.cookie);
            })
            .catch(err=>{
                console.log(err);
            })
        }
    },
    mounted() {
        console.log(this)
    },
}

createApp(app).mount('#app');