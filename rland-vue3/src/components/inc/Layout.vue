<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
import Aside from './Aside.vue';
</script>
<template>
    <Header />
    <Aside />
    <!-- <Transition name="fade">
        <router-view></router-view>
    </Transition> -->
    <router-view v-slot="{ Component }">
        <Transition name="fade">
            <component :is="Component" />
        </Transition>
    </router-view>
    <Footer />
    <!-- 메인페이지 가운데 빗금 문양 -->
    <div class="slash-background">
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>