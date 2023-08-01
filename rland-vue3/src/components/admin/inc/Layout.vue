<script setup>
import Header from '../../inc/Header.vue';
import Footer from '../../inc/Footer.vue';
import Aside from '../../inc/Aside.vue';
</script>
<template>
    <Header />
    <Aside />
    <router-view></router-view>
    <Footer />
    <!-- 메인페이지 가운데 빗금 문양 -->
    <div class="slash-background">
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>
