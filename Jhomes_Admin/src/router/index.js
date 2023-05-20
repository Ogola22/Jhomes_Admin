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
      path: '/editproperty',
      name: '/editproperty',
      component:()=>('../views/Property/EditProperty.vue')
    }

  ]
  
})

export default router
