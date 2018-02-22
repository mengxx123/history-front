<template>
    <my-page title="历史事件">
        <div>
            <router-link to="/history/event/today">历史上的今天</router-link>
        </div>
        <div>
            <ui-text-field v-model="input" />
            <ui-raised-button label="查询" @click="query" />
        </div>
        <h1>{{ year }} 年的历史</h1>
        <div v-if="!evens.length">没有数据</div>
        <ul>
            <li v-for="event in evens">
                {{ event.year }}{{ event.date }}：
                <ui-badge content="大事记" v-if="event.type === '0'" />
                <ui-badge content="出生" v-if="event.type === '1'" />
                <ui-badge content="去世" v-if="event.type === '2'" />
                {{ event.content }}
            </li>
        </ul>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                year: null,
                input: 2018,
                evens: []
            }
        },
        mounted() {
            let now = new Date()
            this.year = now.getFullYear()
            this.getData(this.year)
        },
        methods: {
            query() {
                this.getData(this.input)
            },
            getData(year) {
                this.$http.get(`/events?year=${year}`).then(
                response => {
                    this.evens = response.data
                    console.log(this.evens)
                },
                response => {
                    console.log(response)
                })
            }
        }
    }
</script>

<style scoped>
</style>
