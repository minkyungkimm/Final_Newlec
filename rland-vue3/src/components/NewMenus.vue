<script>
// export default{
//     props:['data']
// }
</script>

<script setup>
    let props = defineProps({
        list:[],
        title:"",
        txt:""
    });
</script>
<template>
    <section>
        <h1>{{ props.txt }}</h1>
        <ul>
            <li v-for="m in props.list">{{ m.name }}</li>
        </ul>
    </section>
</template>
<style scoped> 
    section{
        border: 1px solid lightcoral;
        padding: 20px;
    }
</style>