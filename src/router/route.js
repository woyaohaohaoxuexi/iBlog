import Layout from '@views/layout/index'
const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    hidden: true
  },
  {
    path: '/dashboard',
    redirect: '/dashboard/index',
    component: Layout,
    meta: {
      title: '工作台',
      icon: 'dashboard'
    },
    children: [
      {
        path: 'index',
        component: () => import('@views/dashboard/index'),
        meta: {
          title: '仪表盘'
        }
      },
      {
        path: 'create-article',
        component: () => import('@views/dashboard/CreateArticle'),
        meta: {
          title: '新建文章'
        }
      }
    ]
  },
  {
    path: '/article-management',
    redirect: '/article-management/index',
    component: Layout,
    meta: {
      title: '文章管理',
      icon: 'article-management',
      showSubMenu: false,
      activeMenu: '/article-management/index'
    },
    children: [{
      path: 'index',
      component: () => import('@views/article/index')
    }]
  },
  {
    path: '/label-management',
    redirect: '/label-management/index',
    component: Layout,
    meta: {
      title: '标签管理',
      icon: 'blog-management',
      showSubMenu: false,
      activeMenu: '/label-management/index'
    },
    children: [
      {
        path: 'index',
        component: () => import('@views/LabelManagement/index')
      }
    ]
  },
  {
    path: '/label',
    redirect: '/label/index',
    component: Layout,
    meta: {
      title: '标签管理',
      icon: 'article-label',
      showSubMenu: false,
      activeMenu: '/labe/index'
    },
    children: [
      {
        path: 'index',
        component: () => import('@views/label/index')
      }
    ]
  }
  // {
  //   path: '/message-management',
  //   redirect: '/message-management/index',
  //   component: Layout,
  //   meta: {
  //     title: '留言管理',
  //     icon: 'comment',
  //     showSubMenu: false,
  //     activeMenu: '/message-management/index'
  //   },
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@views/MessageManagement/index')
  //     }
  //   ]
    
  // }
]
export default routes