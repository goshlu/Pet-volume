import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'home',
      component: resolve => require(['@/pages/Home.vue'], resolve),
      children: []
    },
    {
      path: '/Search',
      name: 'search',
      component: resolve => require(['@/pages/Search.vue'], resolve)
    },
    {
      path: "/Login",
      redirect: "/Login/SmsLogin",
      name: 'login',
      component: resolve => require(['@/pages/Login.vue'], resolve),
      children: [{
          path: "/Login/PwdLogin",
          name: 'pwdLogin',
          component: resolve => require(['@/pages/PwdLogin.vue'], resolve)
        },
        {
          path: "/Login/SmsLogin",
          name: "smsLogin",
          component: resolve => require(['@/pages/SmsLogin.vue'], resolve)
        },
        {
          path: "/Login/ForgotPwd",
          name: 'forgotPwd',
          component: resolve => require(['@/pages/ForgotPwd.vue'], resolve)
        }
      ]
    },
    {
      path: '/Classify',
      name: 'classfiy',
      component: resolve => require(['@/pages/Classify.vue'], resolve)
    },
    {
      path: '/ShopDetails',
      name: 'shopDetails',
      meta: {
        requireAuth: true,
      },
      component: resolve => require(['@/pages/ShopDetails.vue'], resolve)
    },
    {
      path: '/Person',
      name: 'person',
      component: resolve => require(['@/pages/Person.vue'], resolve)
    },
    {
      path: "/Person/Coupons",
      name: "coupons",
      component: resolve => require(['@/pages/Coupons.vue'], resolve)
    },
    {
      path: "/Classify/ShopList",
      name: "shopList",
      component: resolve => require(['@/pages/ShopList.vue'], resolve)
    },
    {
      path: "/Person/Set",
      name: "set",
      component: resolve => require(['@/pages/Set.vue'], resolve)
    },
    {
      path: "/ModifyPwd",
      name: "modifyPwd",
      component: resolve => require(['@/pages/ModifyPwd.vue'], resolve)
    },
    {
      path: "/ModifyName",
      name: "modifyName",
      component: resolve => require(['@/pages/ModifyName.vue'], resolve)
    },
    {
      path: "/ChangePhone",
      name: "changePhone",
      component: resolve => require(['@/pages/ChangePhone.vue'], resolve)
    },
    {
      path: "/Person/Collection",
      name: "collection",
      component: resolve => require(['@/pages/Collection.vue'], resolve)
    },
    {
      path: "/BigTicket",
      name: "bigTicket",
      component: resolve => require(['@/pages/BigTicket.vue'], resolve)
    },
    {
      path: "/Select",
      name: 'select',
      component: resolve => require(['@/pages/Select.vue'], resolve)
    }
  ]
});
// 导航守卫;
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  if (localStorage.getItem('userId') && localStorage.getItem('token')) {
    next()
  } else {
    if (to.meta.requireAuth) {
      next({
        path: '/Login',
        query: {
          redirect: to.fullPath
        } //将跳转的路由path作为参数，登陆成功后跳转该路由
      })
    } else {
      next()
    }
  }
});
export default router;
