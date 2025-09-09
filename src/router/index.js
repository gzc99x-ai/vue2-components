
import VueRouter from 'vue-router'
import moreInput from '@/views/form/moreInput'
import ComponentsList from '@/components/ComponentsList.vue'
const routes = [
    {
        path: '/',
        component: ComponentsList
    },
    {
        path: '/form/moreInput',
        component: moreInput,
        children: []
    }
]


const router  =  new VueRouter({
    routes,
})


const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

export default router