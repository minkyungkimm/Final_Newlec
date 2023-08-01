<template>
    <div :class="show?'':'d-none'" class="screen">
        <section>
            <h1>{{title}}</h1>
            <div class="content">
                <slot></slot>
            </div>
            <div class="commands">
                <button @click="$emit('ok','hihi')">ok</button>
                <button v-show="type=='confirms'">cancel</button>
            </div>
        </section>
    </div>
</template>
<script setup>
    let props = defineProps({
        title:"",
        show:false,
        type:"confirm"
    });
</script>
<style scoped>
@keyframes show-effect{
    from{
        transform: translateY(-300px);
        
    }
    to{
        transform: translateY(0px);
        transform: rotate(180deg);
    }
}
.d-none{
    display: none !important;
}
    .screen{
        background-color:rgba(0, 0, 0, 0.8);
        position: fixed;
        top: 0;
        left: 0;
        width:100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    section{
        background-color: #fff;
        display: inline-block;
        width: 200px;
        border-radius: 8px;
        animation: show-effect 1s ease-in-out forwards;
        transition: 1s;
    }
    section h1{
        font-size: 14px;
        padding: 0 8px;
    }
    .content{
        border-top: 1px solid gray;
        border-bottom: 1px solid gray;
        padding: 14px 20px;
    }
    .commands{
        padding: 10px;
        display: flex;
        justify-content: center;
    }
    .commands button:first-child{
        margin-right: 8px;
    }
</style>