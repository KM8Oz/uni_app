
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'plan', component: () => import('pages/programma') },
      { path: 'support', component: () => import('pages/support') },
      { path: 'books', component: () => import('pages/books') },
      { path: 'videos', component: () => import('pages/videos') },
      { path: 'chat', component: () => import('pages/chat') },
      { path: 'articles', component: () => import('pages/articles') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
