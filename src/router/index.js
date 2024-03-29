
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Contacts from  '@/components/Contacts.vue'
import About from  '@/components/About.vue'
import Projects from  "@/components/Projects.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contacts',
      name: 'contacts',
     component: Contacts
    },
    {
      path: '/projects',
      name: 'projects',
     component: Projects
    },
    {
      path: '/about',
      name: 'about',
     component: About
    }
  ]
})

export default router
