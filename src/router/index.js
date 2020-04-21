import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'index',
      component: resolve => require(['@/pages/Index.vue'], resolve),
      children: []
    },
    {
      path: "/Login",
      name: 'login',
      component: resolve => require(['@/pages/Login.vue'], resolve),
    } ,
    {
      path:'/Classify',
      name:'classfiy',
      component:resolve => require(['@/pages/Classify.vue'],resolve),
    } 
  ]
});
// 导航守卫;
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
/* router.beforeEach((to, from, next) => {
  if(localStorage.getItem('userId')){
    next()
  }else{
    if(to.meta.requireAuth){
      next({
        path:'/Login',
        query: {redirect: to.fullPath} //将跳转的路由path作为参数，登陆成功后跳转该路由
      })
    }else{
      next()
    }
  }
}); */
export default router;
