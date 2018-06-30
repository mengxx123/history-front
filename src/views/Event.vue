<template>
    <my-page title="历史事件">
        <div>
            <!-- <router-link to="/history/event/today">历史上的今天</router-link> -->
        </div>
        <div>
            <ui-text-field v-model="input" label="年份" type="number" />
            <br>
            <ui-checkbox class="checkbox" v-model="onlyEvent" label="只看大事记"/>
            <div class="btns">
                <ui-raised-button class="btn" label="查询" primary @click="query" />
                <!-- <ui-raised-button class="btn" label="历史上的今天" secondary to="/history/event/today" /> -->
            </div>
        </div>
        <div class="ui-loading" v-if="loading">
            <ui-circular-progress :size="24"/>
        </div>
        <div class="result" v-if="filterEvents">
            <h1 class="title">{{ year }} 年的历史</h1>
            <div v-if="!filterEvents.length">没有数据</div>
            <ui-timeline>
                <ui-timeline-item v-for="event in filterEvents" :key="event.id">
                    <span slot="time">{{ event.year }} 年 {{ event.month }} 月 {{ event.day }} 日</span>
                    <span slot="des">
                        <span class="badge-box">
                            <ui-badge content="大事记" v-if="event.type === '0'" />
                            <ui-badge content="出生" v-if="event.type === '1'" />
                            <ui-badge content="去世" v-if="event.type === '2'" />
                        </span>
                        {{ event.content }}
                    </span>
                </ui-timeline-item>
            </ui-timeline>
            <!-- <ul class="event-list">
                <li class="item" v-for="event in evens">
                    <span class="year">{{ event.year }} 年 {{ event.month }} 月 {{ event.day }} 日：</span>
                    <span class="badge-box">
                        <ui-badge content="大事记" v-if="event.type === '0'" />
                        <ui-badge content="出生" v-if="event.type === '1'" />
                        <ui-badge content="去世" v-if="event.type === '2'" />
                    </span>
                    <div class="content">
                        {{ event.content }}
                    </div>
                </li>
            </ul> -->
        </div>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                loading: false,
                year: null,
                input: 2018,
                onlyEvent: false,
                events: null
                // filterEvents: null
            }
        },
        computed: {
            filterEvents() {
                if (!this.events) {
                    return null
                }
                if (this.onlyEvent) {
                    return this.events.filter(item => item.type === '0')
                }
                return this.events
            }
        },
        mounted() {
            // let now = new Date()
            // this.year = now.getFullYear()
            // this.getData(this.year)
        },
        methods: {
            query() {
                this.getData(this.input)
            },
            getData(year) {
                this.year = year
                this.loading = true
                this.events = null
                this.$http.get(`/events?year=${year}`).then(
                    response => {
                        this.events = response.data
                        // if (this.onlyEvent) {
                        //     this.filterEvents = this.events.filter(item => item.type === '0')
                        // } else {
                        //     this.filterEvents = this.events
                        // }
                        console.log(this.events)
                        this.loading = false
                    },
                    response => {
                        console.log(response)
                        this.loading = false
                    })
            }
        }
    }
</script>

<style lang="scss" scoped>
.event-list {

}
.btns {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    .btn {
        margin-right: 8px;
    }
}
.title {
    font-size: 20px;
    margin-bottom: 16px;
}
.year {
    display: inline-block;
    width: 120px;
}
.badge-box {
    display: inline-block;
    width: 64px;
}
.checkbox {
    margin-bottom: 16px;
}
</style>
