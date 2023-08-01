<script setup>
    //import UserDetails from '../../stores/UserDetails'; -> 전역변수

    //리액티브한 전역변수
    import { useUserDetailsStore } from '../../stores/useUserDetailsStore';
    let userDetails = useUserDetailsStore();
    import {useRouter} from 'vue-router';
    let router = useRouter();

    function logoutHandler(){
        console.log("test");
        
        userDetails.logout();
        googleLogout();

        router.push("/index");
    }
</script>
<template>
    <!-- ----------------------헤더---------------------------- -->
    <header class="header-container">
        <h1 class="d-none">알랜드</h1>
        <div>
            <router-link to="/index" title="index페이지로 이동합니다.">
                <img src="/image/logo.svg" />
            </router-link> 
            <a class="icon icon-menu">메뉴</a>
        </div>
        <nav class="nav-wrap">
            <h1 class="d-none">네비게이션 목록</h1>
            <ul>
                <li>
                    <router-link to="/index" class="icon icon-home" title="index페이지로 이동합니다.">홈</router-link>
                </li>
                <li>
                    <router-link to="/admin/menu/list" class="icon icon-setting" title="메뉴관리 이동합니다.">홈</router-link>
                </li>
                <li>
                    <router-link v-if="!userDetails.isAuthenticated" to="/login" class="icon icon-sign-on" title="로그인">로그인</router-link>
                    <router-link v-if="userDetails.isAuthenticated" to="/logout" class="icon icon-sign-out" title="로그아웃" @click.prevent="logoutHandler">로그아웃</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>