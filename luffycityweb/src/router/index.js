import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';

// 路由列表
const routes = [
  {
    meta: {
      title: 'luffy2.0-站点首页',
      keepAlive: true
    },
    path: '/', // uri访问地址
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    meta: {
      title: 'luffy2.0-用户登录',
      keepAlive: true
    },
    path: '/login', // uri访问地址
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    meta: {
      title: 'luffy2.0-用户注册',
      keepAlive: true
    },
    path: '/register',
    name: 'Register', // 路由名称
    component: () => import('../views/Register.vue') // uri绑定的组件页面
  },
  {
    meta: {
      title: 'luffy2.0-个人中心',
      keepAlive: true,
      authorization: true
    },
    path: '/user', // uri访问地址
    name: 'User',
    component: () => import('../views/User.vue'),
    
  },
  {
    meta: {
      title: 'luffy2.0-课程列表',
      keepAlive: true
    },
    path: '/project',
    name: 'Course',
    
    children:[
      {
        path : "child",
        name : "Child",
        component:()=> import('../views/Child.vue'),
        children:[
          {
            path:"/",
            redirect:"activity"
          },
          {
            path:"activity",
            name:"Acitivity",
            component:()=>import('../views/Activity.vue')
          }
        ]
      }
    ],
    component: () => import('../views/Course.vue'),
  },
  {
    meta: {
      title: 'luffy2.0-课程详情',
      keepAlive: true
    },
    path: '/project/:id', // :id vue的路径参数，代表了课程的ID
    name: 'Info',
    component: () => import('../views/Info.vue')
  }
];

// 路由对象实例化
const router = createRouter({
  // history, 指定路由的模式
  history: createWebHistory(),
  // 路由列表
  routes
});

// 导航守卫
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  // 登录状态验证
  if (to.meta.authorization && !store.getters.getUserInfo) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

// 暴露路由对象
export default router;
