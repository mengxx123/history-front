<template>
    <ui-page :title="title || page.title" :backable="backable" ref="page">
        <div slot="drawer">
            <ui-appbar title=""></ui-appbar>
            <ui-list @itemClick="toggle()">
                <ui-list-item title="历史朝代表" to="/">
                    <ui-icon slot="left" value="grade"/>
                </ui-list-item>
                <ui-list-item title="历史年表" to="/history">
                    <ui-icon slot="left" value="grade"/>
                </ui-list-item>
                <ui-list-item title="历史事件" to="/history/event">
                    <ui-icon slot="left" value="grade"/>
                </ui-list-item>
                <ui-divider />
                <ui-list-item title="圆周率表" to="/pi">
                    <ui-icon slot="left" value="grade"/>
                </ui-list-item>
                <ui-list-item title="质数表" to="/prime">
                    <ui-icon slot="left" value="grade"/>
                </ui-list-item>
            </ui-list>
            <ui-list class="ui-position-bottom" @itemClick="toggle()">
                <ui-list-item title="关于" href="http://about.yunser.com/" target="_blank">
                    <ui-icon slot="left" value="grade"/>
                </ui-list-item>
            </ui-list>
        </div>
        <slot></slot>
    </ui-page>
</template>

<script>
    export default {
        data() {
            return {
                open: false,
                docked: true
            }
        },
        props: {
            title: {
                type: String,
                default: ''
            },
            name: {
                type: String,
                default: 'default'
            },
            page: {
                type: Object,
                default: function () {
                    return {
                        title: '云设'
                    }
                }
            },
            backable: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            toggle() {
                console.log(this.$refs.page)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .ui-position-bottom {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
    }
</style>
