<template>
    <div class="app">

        <tabbar
                ref="reflectName"
                class="tabbar"
                tabPageAnimated="false"
                tabSlideSwitch="false"
                :tabPages="tabPages"></tabbar>

    </div>
</template>

<style>
    .app {
        flex: 1
    }

    .tabbar {
        flex: 1;
        width: 750px;
    }
</style>

<script>
    //重要事说三遍！！！查看效果请扫码【src/pages/index.vue】文件
    //重要事说三遍！！！查看效果请扫码【src/pages/index.vue】文件
    //重要事说三遍！！！查看效果请扫码【src/pages/index.vue】文件

    export default {
        data() {
            return {
                tabPages: [
                    {
                        title: '首页',
                        selectedIcon: 'md-home',
                        url: './home/index.js'
                    },
                    {
                        title: '沸点',
                        selectedIcon: 'md-contacts',
                        url: './pins/index.js',
                    },
                    {
                        title: '我的',
                        selectedIcon: 'md-contacts',
                        url: './mine/index.js',
                    },
                ],
            }
        },
    };
</script>
