import { defineStore } from "pinia";

export const useUserDetailsStore = defineStore("userDetails", {
    state: () => ({
        id: 0,
        username: null,
        email: null,
        roles: [] //["ADMIN","TEACHER"]
    }),//pinia로 만들어진 리액티브한 전역변수
    getters:{
        isAuthenticated:(state)=>state.username==null?false:true
    },//속성
    actions:{
        //logout 처리
        logout(){
            this.id=null;
            this.username=null;
            this.password=null;
            this.email=null;
        },
        hasRole(role){
            let result = this.roles.indexOf(role)<0?false:true;
            return result;
        }
    }
})