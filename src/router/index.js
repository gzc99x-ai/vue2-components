
import VueRouter from 'vue-router'
import moreInput from '@/views/form/moreInput'
import moreSelect from '@/views/form/moreSelect'
import ComponentsList from '@/views/ComponentsList.vue'
const routes = [
    {
        path: '/',
        component: ComponentsList
    },
    {
        path: '/form/moreInput',
        component: moreInput,
        children: []
    },
    {
        path: '/form/moreSelect',
        component: moreSelect,
        children: []
    },
]


const router  =  new VueRouter({
    routes,
})


const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

export default router