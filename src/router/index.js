import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['@/views/Home'], resolve)
const Table = resolve => require(['@/views/Table'], resolve)
const Pi = resolve => require(['@/views/Pi'], resolve)
const Year = resolve => require(['@/views/HistoryYear'], resolve)
const Jiazi = resolve => require(['@/views/Jiazi'], resolve)
const PiTest = resolve => require(['@/views/PiTest'], resolve)
// const History = resolve => require(['@/views/History'], resolve)
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
        path: '/table',
        component: Table
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
        path: '/year',
        component: Year
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
        path: '/jiazi',
        component: Jiazi
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
