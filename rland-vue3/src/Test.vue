<!-- options api를 이용한 block -->
<script>
//import Header from './components/Header.vue';
// export default{
//     // components:{
//     //     Header
//     // },
//     data(){
//         return{
//             a:10
//         };
//     },
//     // computed:{
//     //     total(){
//     //         return this.a+2;
//     //     }
//     // }
//     // mounted(){
//     //     console.log("mounted");
//     // }
// }
</script>

<!-- composition api를 이용한 block -->
<script setup>
    import { computed, onMounted, onUpdated, reactive, ref, shallowRef, triggerRef, watch } from 'vue';
    import Header from './components/Header.vue';
    import NewList from './components/NewMenus.vue';
    import Modal from './components/Modal.vue';

    //----Variaables-----------------------------
    let b = ref(30);
    let query = ref("");
    
    let menu = reactive({
        id:1,
        name:"ameri",
        price:3000
    });
    let model=reactive({
        newList:[],
        list:[],
        qlist:[]
    });

    watch(query,()=>{
        // console.log(query.value);
        model.qlist = model.list.filter(m=>m.name.includes(query.value));
    })

    //수치에 대한 변수명을 만들 때 : computed
    // let newList = [1,2,3,4];
    let total = computed(()=>model.list.map((m)=>m.price).reduce((p,c)=>p+c,0));

    // let total = computed(()=>{
    //     let result = 0;
    //     for(let m of model.newList)
    //         result += m.price;
    //     return result;
    // });

    let aa = shallowRef({name:'okay'});
    //aa.value.name="good";
    //---Life Cycles------------------------------
    onMounted(()=>{
        console.log("mounted22");
        console.log(`b:${b.value}`);
        console.log(`menu.price:${menu.price}`);
        load();
    });
    //----Event Handlers-----------------------------
    async function load(){
        let response = await fetch("http://192.168.0.33:8080/menus");
        let json = await response.json();
        model.list = json.list;
        model.qlist = json.list;
        model.newList = json.newList;
    }

    function clickHandler(){
        console.log("click hehe");
        load();
    }

    function menuDelHandler(id){
        console.log(id);
        let idx = model.list.findIndex(m=>m.id==id);
        model.list.splice(idx,1);
    }

    function inputHandler(){
        console.log("test input");
        triggerRef(aa);
    }

    let showModal = ref(false);
    function showHandler(){
        console.log("show");
        showModal.value=true;
    }

    function dlgOkHandler(e){
        console.log("ok");
        console.log(e);
        showModal.value=false;
    }
</script>

<template>
    <div>
        <button @click="showHandler">show</button>
    </div>
    <Modal title="공지사항" :show="showModal" @ok="dlgOkHandler" type="alert">
        <div>
            helloooooo
        </div>
    </Modal>
    <Header/>
    <div>
        <div>
            <label>검색어:</label>
            <input type="text" v-model="query" >
            {{ aa.name }}<input type="text" v-model="aa.name" @input="inputHandler" >
        </div>
        <ul>
            <li v-for="m in model.qlist" >
                <span>{{m.name}}</span><input type="button" value="del" @click="menuDelHandler(m.id)">
            </li>
        </ul>
    </div>
    <div>
        total price: <span>{{ total }}</span>
    </div>
    <div>
        a:<span v-text="a"></span><input v-model.number="a"/><br>
        b:<span v-text="b"></span><input v-model.number="b"/><br>
        price:<span v-text="menu.price"></span><input v-model="menu.price"/><br>
        <button @click="clickHandler">btn</button>
    </div>
    
    <hr>
    
    <NewList :list="model.newList" title="추천메뉴" :txt="aa.name"/>
   
</template>

<style>
</style>