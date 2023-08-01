<script setup>
import { reactive } from 'vue';
//import userDetails from '../stores/UserDetails.js';
import { useRouter, useRoute } from 'vue-router';
import { useUserDetailsStore } from '../stores/useUserDetailsStore';
import { decodeCredential } from 'vue3-google-login';

let userDetails = useUserDetailsStore();
let router = useRouter();
let route = useRoute();

let user = reactive({
    username: "",
    password: "",
    roles: ""
})

async function loginHandler() {
    console.log(user.username);

    let reponse = await fetch("http://localhost/members/login", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-type": "application/x-www-form-urlencoded"
        },
        body: `username=${user.username}&password=${user.password}`
    });
    let json = await reponse.json();
    console.log(json);

    //전역 객체(global object)에 인증정보를 담기
    userDetails.username = json.result.userName;
    userDetails.password = json.result.pwd;
    userDetails.roles = json.roles;

    //쿼리스트링 route로 가져오기 (/login?returnURL=/admin/menu/list)
    let returnURL = route.query.returnURL;

    //쿼리스트링에 returnURL을 가지고 있으면 그 경로로 가고 없으면 index페이지로 이동
    if (returnURL)
        router.push(returnURL);
    else
        router.push("/index");
    //login하면 index페이지로 이동
}

function googleLoginHandler(response) {
    let userData = decodeCredential(response.credential);
    console.log(userData);

    //전역 객체(global object)에 인증정보를 담기
    userDetails.username = userData.name;
    userDetails.email = userData.email;
    userDetails.roles = ["ADMIN", "MEMBER"];

    //쿼리스트링 route로 가져오기 (/login?returnURL=/admin/menu/list)
    let returnURL = route.query.returnURL;

    //쿼리스트링에 returnURL을 가지고 있으면 그 경로로 가고 없으면 index페이지로 이동
    if (returnURL)
        router.push(returnURL);
    else
        router.push("/index");
    //login하면 index페이지로 이동
}

function customLoginHandler(response){
    fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${response.access_token}`)
        .then(res=>res.json())
        .then(credential=>{
            console.log(credential);
             //전역 객체(global object)에 인증정보를 담기
            userDetails.username = userData.name;
            userDetails.email = userData.email;
            userDetails.roles = ["ADMIN", "MEMBER"];

            router.push("/signUpWithGoogle");
        })
        .catch(e=>{
            console.log("error");
        })
}
</script>

<template>
    <main>
        <div class="sign-in">
            <div class="sign-in-logo">
                <img src="/image/logo-black.svg" alt="Rland" />
            </div>
            <form class="sign-in-form">
                <div class="sign-in-form-input">
                    <div>
                        <input type="text" class="input-bottom-line" v-model="user.username" placeholder="아이디" required />
                    </div>
                    <div>
                        <input type="password" class="input-bottom-line" v-model="user.password" placeholder="비밀번호"
                            required />
                    </div>
                </div>

                <div class="sign-in-form-button">
                    <div class="wd-100">
                        <input type="submit" value="로그인" @click.prevent="loginHandler" class="btn btn-default" />
                    </div>
                    <div class="font-14">또는</div>
                    <div class="wd-100">
                        <GoogleLogin :callback="customLoginHandler" class="wd-100" popup-type="TOKEN">
                            <span href="" class="deco icon-logo-google btn btn-outline">구글로 로그인</span>
                        </GoogleLogin>
                        <GoogleLogin :callback="googleLoginHandler" />
                    </div>
                </div>
            </form>
            <div class="sign-in-find-user font-14">
                <a href="./sign-up.html">회원가입</a> |
                <a href="">비밀번호 찾기</a>
            </div>
        </div>
    </main>
</template>
<style scoped>
@import url("/css/sign-in.css");
</style>