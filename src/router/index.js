import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index'
import Group from '../pages/Group'
import AudioBook from '../pages/AudioBook'
import Mine from '../pages/Mine'
import Broadcast from '../pages/Broadcast'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/broadcast/',
      name: 'Broadcast',
      component: Broadcast
    },
    {
      path: '/mine/',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/audioBook/',
      name: 'AudioBook',
      component: AudioBook
    },
    {
      path: '/group/',
      name: 'Group',
      component: Group
    },
    {
      path: '/index/',
      redirect: '/'
    }
  ]
})
