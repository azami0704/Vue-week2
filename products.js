import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

axios.defaults.baseURL="https://vue3-course-api.hexschool.io/";
const apiPath = "azami";

const app= {
    data(){
        return{
            productsList:[],
            tmp:{}
        }
    },
    methods: {
        getData(){
            axios.get(`/v2/api/${apiPath}/products/all`)
            .then(res=>{
                console.log(res);
                this.productsList=res.data.products;
                console.log(this.productsList);
                })
            .catch(err=>{
                console.log(err);
            })
        },
        renderDetail(item){
            this.tmp=item;
        }
    },
    mounted() {
        if(document.cookie.indexOf('token')==-1){
            alert("請先登入!");
            window.location.href="./index.html";
        }
        this.getData();
    }
}

createApp(app).mount('#app');