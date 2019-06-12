import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '../components/HomeComponent.vue'
import ArticleComponent from '../components/ArticleComponent.vue'
import UserComponent from '../components/UserComponent.vue'
import PlatformComponent from '../components/PlatformComponent.vue'
import AdviceComponent from '../components/AdviceComponent.vue'
import CategoryComponent from '../components/CategoryComponent.vue'
import PublishComponent from '../components/PublishComponent.vue'
import CategoryPublish from '../components/CategoryPublish.vue'
import PlatformPublish from '../components/PlatformPublish.vue'
import LoginComponent from '../components/LoginComponent.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'HomeComponent',
      component:HomeComponent,
      meta:{
        isLogin:true
      }
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
    },
    {
      path:'/category',
      name:'CategoryComponent',
      component:CategoryComponent
    },
    {
      path:'/publish',
      name:'PublishComponent',
      component:PublishComponent
    },
    {
      path:'/categorypub',
      name:'CategoryPublish',
      component:CategoryPublish
    },
    {
      path:'/platformpub',
      name:'PlatformPublish',
      component:PlatformPublish
    },
    {
      path:'/login',
      name:'LoginComponent',
      component:LoginComponent,
      meta:{
        isLogin:false
      }
    }
  ]
})
