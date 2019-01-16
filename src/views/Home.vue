<template>
    <my-page title="历史" :page="page">
        <app-list :data="groups" />
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                groups: [
                    {
                        // name: '基本',
                        apps: [
                            {
                                name: '历史朝代表',
                                desc: '',
                                icon: '/static/img/history.svg',
                                to: '/table'
                            },
                            {
                                name: '历史时间轴',
                                desc: '',
                                icon: '/static/img/history.svg',
                                to: 'xxx',
                                href: 'https://timeline.yunser.com/',
                                target: '_blank'
                            },
                            {
                                name: '历史事件',
                                desc: '',
                                icon: '/static/img/history.svg',
                                to: '/history/event'
                            },
                            {
                                name: '历史上的今天',
                                desc: '',
                                icon: '/static/img/history.svg',
                                to: '/history/event/today'
                            },
                            {
                                name: '纪年换算',
                                desc: '',
                                icon: '/static/img/history.svg',
                                to: '/year'
                            },
                            {
                                name: '六十甲子顺序表',
                                desc: '',
                                icon: '/static/img/history.svg',
                                to: '/jiazi'
                            },
                            {
                                name: '圆周率表',
                                desc: '',
                                icon: '/static/img/history.svg',
                                to: '/pi'
                            }
                        ]
                    }
                ],
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'search',
                            href: 'https://search.yunser.com?utm_source=audio',
                            target: '_blank',
                            title: '搜索'
                        },
                        {
                            type: 'icon',
                            icon: 'apps',
                            href: 'https://app.yunser.com?utm_source=audio',
                            target: '_blank',
                            title: '应用'
                        }
                    ]
                }
            }
        },
        computed: {
        },
        mounted() {
        },
        methods: {
            init() {
            },
            fileChange(e) {
            },
            sizeStr: function (size) {
            }
        }
    }
</script>
