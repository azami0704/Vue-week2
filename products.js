import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

axios.defaults.baseURL="https://vue3-course-api.hexschool.io/";
const apiPath = "azami";

const app= {
    data(){
        return{
            productsList:[],
            tempProduct:{}
        }
    },
    methods: {
        getData(){
            axios.get(`/v2/api/${apiPath}/products/all`)
            .then(res=>{
                this.productsList=res.data.products;
                })
            .catch(err=>{
                alert(err.data.message);
            })
        },
        renderDetail(item){
            this.tempProduct=item;
        }
    },
    mounted() {
        const token=document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        if(token){
            axios.defaults.headers.common['Authorization'] = token;
            axios.post(`/v2/api/user/check`)
            .then(()=>{
                this.getData();
            })
            .catch(err=>{
                alert(err.data.message);
                window.location.href="./index.html";
            })
        }else{
            alert('請重新登入');
            window.location.href="./index.html";
        }
        
    }
}

createApp(app).mount('#app');