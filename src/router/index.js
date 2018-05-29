import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['@/views/Home'], resolve)
const About = resolve => require(['@/views/About'], resolve)
const Pi = resolve => require(['@/views/Pi'], resolve)
const PiTest = resolve => require(['@/views/PiTest'], resolve)
const Prime = resolve => require(['@/views/Prime'], resolve)
const History = resolve => require(['@/views/History'], resolve)
const HistoryEvent = resolve => require(['@/views/Event'], resolve)
const HistoryEventToday = resolve => require(['@/views/EventToday'], resolve)
const Error404 = resolve => require(['@/views/error/Error404'], resolve)

Vue.use(Router)

let routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/pi',
        component: Pi
    },
    {
        path: '/pi/test',
        component: PiTest
    },
    {
        path: '/prime',
        component: Prime
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/history',
        component: History
    },
    {
        path: '/history/event',
        component: HistoryEvent
    },
    {
        path: '/history/event/today',
        component: HistoryEventToday
    },
    {
        path: '*',
        component: Error404
    }
]

let router = new Router({
    mode: 'history',
    routes: routes,
    scrollBehavior (to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
})

export default router
