import Layout from '@views/Layout/index'
const routes = [
  {
    path: '/',
    redirect: '/create-article',
    hidden: true
  },
  {
    path: '/create-article',
    redirect: '/create-article/index',
    component: Layout,
    meta: {
      title: '博客管理',
      icon: 'blog-management',
      showSubMenu:  true  // 是否显示子菜单 （ 默认为 true ）
    },
    children: [
      {
        path: 'index',
        component: () => import('@views/BlogManagement/CreateArticle'),
        meta: {
          title: '新建文章',
          icon: 'write'
        }
      }
    ]
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