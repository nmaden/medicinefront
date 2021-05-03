    import Vue from 'vue'
    import VueRouter from 'vue-router'

    Vue.use(VueRouter);

    // Router components


    import AdminMedicine from '../components/pharmacy/adminPhar.vue'; 
    import LoginMed from '../components/pharmacy/login.vue'; 


    import Pharmacy from '../components/pharmacy/pharmacy.vue';
    
    
    import NotifMain from '../components/notif/notif.vue'; 
    import NotifLogin from '../components/notif/login.vue'; 
    import NotifRegister from '../components/notif/register.vue'; 


    import calculator_header from '../components/calculator/calc_header.vue'; 
    import calc_admin  from '../components/calculator/calc_admin.vue'; 

    import calc_register  from '../components/calculator/calc_register.vue'; 
    import calc_body  from '../components/calculator/calculator.vue';
    import calc_login  from '../components/calculator/login.vue'; 

    import Burger from '../components/burger/burger.vue'; 
    import Korzina from '../components/burger/busket.vue';



    import KenesMain from '../components/kenes/index.vue'; 
    import Main from '../components/kenes/main.vue'; 
    import Product from '../components/kenes/about_product.vue'; 
    
    
    import AuthPage from '../components/auth/AuthPage.vue';
    import Login from '../components/auth/components/login.vue';
    import ForgotPassword from '../components/auth/components/forgotPassword.vue';
    import Register from '../components/auth/components/register.vue';
    import Reg_confirm from '../components/auth/components/reg_confirm.vue';
    import Check from '../components/auth/components/check.vue';


    import UserPage from '../components/account/UserPage.vue';
    import User from '../components/account/user.vue';
    import Profile from '../components/account/profile.vue';
    import Settings from '../components/account/settings.vue';
    import Faq from '../components/account/faq.vue';


    import ErrorPage from '../components/error/404.vue';


    const router = new VueRouter({
    routes: [

        // {
        //     path: '/',
        //     component: AuthPage,
        //     meta: { guest: true },
        //     children: [
        //         // { path: 'burger', component: Burger},
        //         { path: '', component: Login },
        //         { path: 'login', component: Login },
        //         { path: 'forgotPassword', component: ForgotPassword },
        //         { path: 'register', component: Register },
        //         { path: 'reg_confirm', component: Reg_confirm },
        //         { path: 'check', component: Check }
        //     ]
        // },

        {
            path: '/pharmacy',
            component: Pharmacy,
            meta: { guest: true },
           
        },
        {
            path: '/pharmacy/admin',
            component: AdminMedicine,
            meta: { guest: true },
           
        },
        // {
        //     path: '/',
        //     component: LoginMed,
        //     meta: { guest: true },
           
        // },        
        {
            path: '/notif',
            component: NotifMain,
            meta: { guest: true },
            children: [
                { path: '/', component: NotifMain },
          
            ]
        },
        // {
        //     path: '/',
        //     component: NotifLogin,
        //     meta: { guest: true },
        //     children: [
        //         { path: '/', component: NotifLogin },
          
        //     ]
        // },
        {
            path: '/register',
            component: NotifRegister,
            meta: { guest: true },
            children: [
                { path: '/', component: NotifRegister },
          
            ]
        },
        {
            path: '/kenes',
            component: KenesMain,
            meta: { guest: true },
            children: [
                { path: '/product', component: Product },
                { path: '/', component: Main },
            ]
        },
        // {
        //     path: '/main',
        //     component: KenesMain,
        //     meta: { guest: true },
        //     children: [
        //         { path: '/', component: Product },
        //         { path: '', component: Main },
        //     ]
        // },

        {
            path: '/login',
            component: calc_login,
            meta: { guest: true },
            children: [
                { path: 'login', component: calc_login },
             
            ]
        },
        {
            path: '/',
            component: calc_body,
            meta: { guest: true },
            children: [
           
            ]
        },
        {
            path: '/register',
            component: calc_register,
            meta: { guest: true },
            children: [
                { path: 'register', component: calc_register }
            ]
        },
        {
            path: '/calculator',
            component: calculator_header,
            meta: { guest: true },
            children: [
                { path: 'main', component: calc_body },
                { path: 'admin', component: calc_admin },
                
            ]
        },
        {
            path: '/burger',
            component: Burger,

            children: [
                
            ]
        },
        {
            path: '/busket',
            component: Korzina,
            // meta: { guest: true }, 
            children: [
               
            ]
        }, 
        {
            path: '/busket',
            component: Korzina,

            children: [
                
            ]

        },
        {
            path: '/user',
            component: UserPage,
            // meta: { requiresAuth: true },
            children: [
                { path: '/', component: User  },
                { path: 'profile', component: Profile },
                { path: 'settings', component: Settings },
                { path: 'faq', component: Faq },
            ]
        },
        {
            path: '*',
            component: ErrorPage,
        }
    ],
    // process.env.CORDOVA_PLATFORM ? 'hash' :
    mode:  process.env.CORDOVA_PLATFORM ? 'hash' :'history'
    });

    // router.beforeEach((to, from, next) => {
    // if(to.matched.some(record => record.meta.requiresAuth)) {
    //     if ($cookies.get('token') == null) {
    //         next({
    //             path: '/login',
    //             params: { nextUrl: to.fullPath }
    //         })
    //     } 
    //     else {
    //         next()
    //     }
    // } else if(to.matched.some(record => record.meta.guest)) {
    //     if($cookies.get('token') == null){
    //         next()
    //     }
    //     else{
    //         next({ path: '/'})
    //     }
    // }else {
    //     next() 
    // }
    // })

    export default router;

