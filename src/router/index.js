import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Messages from '@/components/Messages'
import Texte from "@/components/Texte"
import Money from "@/components/Money"


Vue.use(Router)
export default new Router({
  routes: [
    {path: '/',redirect:"/home"},
    {path:"/home",component:Home},
    {path:"/messages",component:Messages},
    {path:"/texte",component:Texte},
    {path:"/money",component:Money}
  ]
})

