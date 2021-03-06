import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
 **/
export const constantRoutes = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '学成教育学院后台首页', icon: 'dashboard' }
    }]
  }
]

/**
 * 动态路由
 */
export const asyncRoutes = [
  {
    path: '/banner',
    component: Layout,
    redirect: '/banner/list',
    name: 'Banner管理',
    meta: { title: 'Banner管理', icon: 'banner' },
    children: [
      {
        path: 'list',
        name: 'Banner列表',
        component: () => import('@/views/edu/banner/list'),
        meta: { title: 'Banner列表', icon: 'list' }
      },
      {
        path: 'save',
        name: '添加Banner',
        component: () => import('@/views/edu/banner/save'),
        meta: { title: '添加Banner', icon: 'add-new' }
      },
      {
        path: 'edit/:id',
        name: '编辑Banner',
        component: () => import('@/views/edu/banner/save'),
        meta: { title: '编辑Banner', noCache: true },
        hidden: true
      }
    ]
  },
  {
    path: '/teacher',
    component: Layout,
    redirect: '/teacher/list',
    name: '讲师管理',
    meta: { title: '讲师管理', icon: 'teacher' },
    children: [
      {
        path: 'list',
        name: '讲师列表',
        component: () => import('@/views/edu/teacher/list'),
        meta: { title: '讲师列表', icon: 'list' }
      },
      {
        path: 'save',
        name: '添加讲师',
        component: () => import('@/views/edu/teacher/save'),
        meta: { title: '添加讲师', icon: 'add-new' }
      },
      {
        path: 'edit/:id',
        name: '编辑讲师',
        component: () => import('@/views/edu/teacher/save'),
        meta: { title: '编辑讲师', noCache: true },
        hidden: true
      }
    ]
  },
  {
    path: '/subject',
    component: Layout,
    redirect: '/subject/list',
    name: '课程分类管理',
    meta: { title: '课程分类管理', icon: 'classify' },
    children: [
      {
        path: 'list',
        name: '分类列表',
        component: () => import('@/views/edu/subject/list'),
        meta: { title: '分类列表', icon: 'tree' }
      },
      {
        path: 'save',
        name: '添加分类',
        component: () => import('@/views/edu/subject/save'),
        meta: { title: '添加分类', icon: 'add-new' }
      }
    ]
  },
  {
    path: '/course',
    component: Layout,
    redirect: '/course/list',
    name: '课程管理',
    meta: { title: '课程管理', icon: 'edu-course' },
    children: [
      {
        path: 'list',
        name: '课程列表',
        component: () => import('@/views/edu/course/list'),
        meta: { title: '课程列表', icon: 'list' }
      },
      {
        path: 'save',
        name: '添加课程',
        component: () => import('@/views/edu/course/info'),
        meta: { title: '添加课程', icon: 'add-new' }
      },
      {
        path: 'info/:id',
        name: 'EduCourseInfoEdit',
        component: () => import('@/views/edu/course/info'),
        meta: { title: '编辑课程基本信息', noCache: true },
        hidden: true
      },
      {
        path: 'chapter/:id',
        name: 'EduCourseChapterEdit',
        component: () => import('@/views/edu/course/chapter'),
        meta: { title: '编辑课程大纲', noCache: true },
        hidden: true
      },
      {
        path: 'publish/:id',
        name: 'EduCoursePublishEdit',
        component: () => import('@/views/edu/course/publish'),
        meta: { title: '发布课程', noCache: true },
        hidden: true
      }
    ]
  },
  {
    path: '/client',
    component: Layout,
    redirect: '/client/memberList',
    name: 'C端数据',
    meta: { title: 'C端数据', icon: 'echarts_line' },
    children: [
      {
        path: 'memberList',
        name: '会员列表',
        component: () => import('@/views/edu/member/list'),
        meta: { title: '会员列表', icon: 'user' }
      },
      {
        path: 'memberDetail/:id',
        name: '会员详情',
        component: () => import('@/views/edu/member/detail'),
        meta: { title: '会员详情', noCache: true },
        hidden: true
      },
      {
        path: 'orderList',
        name: '订单列表',
        component: () => import('@/views/edu/order/list'),
        meta: { title: '订单管理', icon: 'order' }
      },
      {
        path: 'orderDetail/:id',
        name: '订单详情',
        component: () => import('@/views/edu/order/detail'),
        meta: { title: '订单详情', noCache: true },
        hidden: true
      }
    ]
  },
  {
    path: '/statistics',
    component: Layout,
    name: '统计分析',
    redirect: '/statistics/create',
    meta: { title: '统计分析', icon: 'statistics' },
    children: [
      {
        path: 'create',
        name: '生成统计',
        component: () => import('@/views/edu/statistics/create'),
        meta: { title: '生成统计', icon: 'add-new' }
      },
      {
        path: 'chart',
        name: '统计图表',
        component: () => import('@/views/edu/statistics/chart'),
        meta: { title: '统计图表', icon: 'chart' }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// export default new Router({
//   // mode: 'history', //后端支持可开
//   scrollBehavior: () => ({ y: 0 }),
//   routes: constantRouterMap
// })

export default router
