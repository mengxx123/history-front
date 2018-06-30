<template>
    <my-page class="page-today" title="历史上的今天">
        <div class="ui-loading" v-if="loading">
            <ui-circular-progress :size="24"/>
        </div>
        <ui-timeline>
            <ui-timeline-item v-for="event in evens" :key="event.id">
                <span slot="time">{{ event.year }} 年</span>
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
                <span class="year">{{ event.year }} 年</span>
                <div class="content">
                    <span class="badge-box">
                        <ui-badge content="大事记" v-if="event.type === '0'" />
                        <ui-badge content="出生" v-if="event.type === '1'" />
                        <ui-badge content="去世" v-if="event.type === '2'" />
                    </span>
                    {{ event.content }}
                </div>
            </li>
        </ul> -->
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                loading: false,
                evens: ''
            }
        },
        mounted() {
            let now = new Date()
            let month = now.getMonth() + 1
            let date = now.getDate()
            this.loading = true
            this.$http.get(`/events?month=${month}&date=${date}&order=desc`).then(
                response => {
                    this.evens = response.data
                    console.log(this.evens)
                    this.loading = false
                },
                response => {
                    console.log(response)
                    this.loading = false
                })
        }
    }
</script>

<style lang="scss" scoped>
.page-today {
    background-color: #f1f1f1;
}
.event-list {
    .item {
        margin-bottom: 16px;
    }
    .content {
        padding-left: 40px;
    }
}
</style>
