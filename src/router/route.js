import Layout from '@views/Layout/index'
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
      icon: 'blog-management'
    },
    children: [
      {
        path: 'index',
        component: () => import('@views/Dashboard/index'),
        meta: {
          title: '仪表盘'
        }
      },
      {
        path: 'create-article',
        component: () => import('@views/Dashboard/CreateArticle'),
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
      icon: 'blog-management',
      showSubMenu: false,
      activeMenu: '/article-management/index'
    },
    children: [{
      path: 'index',
      component: () => import('@views/ArticleManagement/index')
    }]
  },
  {
    path: '/message-management',
    redirect: '/message-management/index',
    component: Layout,
    meta: {
      title: '留言管理',
      icon: 'blog-management',
      showSubMenu: false,
      activeMenu: '/message-management/index'
    },
    children: [
      {
        path: 'index',
        component: () => import('@views/MessageManagement/index')
      }
    ]
    
  }
]
export default routes