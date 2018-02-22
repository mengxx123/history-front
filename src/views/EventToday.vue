<template>
    <my-page title="历史事件">
        <ul>
            <li v-for="event in evens">{{ event.year }}{{ event.date }}：{{ event.content }}</li>
        </ul>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                evens: ''
            }
        },
        mounted() {
            let now = new Date()
            let month = now.getMonth() + 1
            let date = now.getDate()
            this.$http.get(`/events?month=${month}&date=${date}`).then(
                response => {
                    this.evens = response.data
                    console.log(this.evens)
                },
                response => {
                    console.log(response)
                })
        }
    }
</script>

<style scoped>
</style>
