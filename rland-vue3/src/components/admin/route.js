import Index from './Index.vue'
import Layout from './inc/Layout.vue'
import MenuList from './menu/List.vue'
import MenuDetail from './menu/Detail.vue'

import { useUserDetailsStore } from '../../stores/useUserDetailsStore';

const admin = {path: '/admin', component: Layout, children:[
    { path: 'index', component: Index },
    { path: 'menu', children:[
        { 
            path: 'list', 
            component: MenuList
        },
        {
            path: 'detail', // /admin/menu/3
            component: MenuDetail
        }
    ]}
],beforeEnter(to,from,next){
    console.log("dd");
    console.log(`to:${to.path},from:${from.path}`);
    
    let userDetails = useUserDetailsStore();
    console.log(userDetails.isAuthenticated);
    
    let url = `/login?returnURL=${to.path}`;

    if(!userDetails.isAuthenticated)
        next(url); //login 페이지로 강제 이동
    else if(!userDetails.hasRole("ADMIN"))
        next("/error/403");
    else 
        next(); //admin/menu/list 페이지 이동
}}

export default admin;