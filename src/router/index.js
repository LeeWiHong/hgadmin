import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '../components/HomeComponent.vue'
import ArticleComponent from '../components/ArticleComponent.vue'
import UserComponent from '../components/UserComponent.vue'
import PlatformComponent from '../components/PlatformComponent.vue'
import AdviceComponent from '../components/AdviceComponent.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'HomeComponent',
      component:HomeComponent
    },
    {
      path:'/user',
      name:'UserComponent',
      component:UserComponent
    },
    {
      path:'/article',
      name:ArticleComponent,
      component:ArticleComponent
    },
    {
      path:'/platform',
      name:'PlatformComponent',
      component:PlatformComponent
    },
    {
      path:'/advice',
      name:'AdviceComponent',
      component:AdviceComponent
    }
  ]
})
