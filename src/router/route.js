import Layout from '@views/Layout/index'
import createArticle from '@views/BlogManagement/CreateArticle'
const routes = [
  {
    path: '/create-article',
    component: Layout,
    meta: {
      title: '博客管理',
      icon: 'blog-management'
    },
    children: [
      {
        path: 'index',
        component: createArticle,
        meta: {
          title: '新建文章',
          icon: 'write'
        }
      }
    ]
  }
]
export default routes