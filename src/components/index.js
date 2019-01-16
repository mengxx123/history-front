import page from './page'
import eventList from './event-list'
import appList from './app-list'

export default {
    install: function (Vue) {
        Vue.component('my-page', page)
        Vue.component('event-list', eventList)
        Vue.component('app-list', appList)
    }
}
