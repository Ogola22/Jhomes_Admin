import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/propertylist',
      name: 'propertylist',
      component: () => import('../views/Property/PropertyList.vue')
    },
    {
      path: '/addproperty',
      name: 'addproperty',
      component: () => import('../views/Property/AddProperty.vue')
    },
    {
      path: '/addagent',
      name: 'addagent',
      component: () => import('../views/Agents/AddAgent.vue')
    },
    {
      path: '/agents',
      name: 'agents',
      component:()=>import('../views/Agents/AgentsView.vue')
    },
    {
      path: '/property/:id/edit',
      name: 'editproperty',
      component:()=> import('../views/Property/EditProperty.vue')
    },
    {
      path: '/login',
      name: 'login',
      component:()=> import('../views/Auths/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component:()=> import('../views/Auths/RegisterView.vue')
    },
    {
      path: '/forgotpassword',
      name: 'forgotpassword',
      component:()=> import('../views/Auths/ForgotPassword.vue')
    },
    {
      path: '/roles',
      name: 'roles',
      component:()=> import('../views/RoleVue.vue')
    },
    {
      path: '/reset/:token',
      name: 'reset',
      component:()=> import('../views/Auths/ResetPassword.vue')
    }





  ]
  
})

export default router
