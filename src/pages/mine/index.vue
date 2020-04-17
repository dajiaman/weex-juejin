<template>
    <div class="app">

        <div
        class="status-bar"
        :style="{height:statusBarHeight + 'px'}"
        ></div>

         <navbar class="navbar">
            <navbar-item type="title">
                <div class="navbar-main">
                    <text class="navbar-title">我</text>
                </div>
            </navbar-item>
        </navbar>

        
        <scroll-view class="list">

            <div class="userinfo_header">
                <image class="avatar" src="../../assets/image/avatar.png"></image>
                <div class="userinfo_box">
                    <div >昵称</div>
                </div>
                <div class="userinfo_right"><icon class="list-right-icon"></icon></div>
            </div> 

            <div class="item_list">
                <div class="list-item" v-for="(item, index) in components" :key="index" @click="openUrl(item.url)">
                    <div class="list-item-left">
                        <icon class="list-left-icon" :eeui="{content: item.icon}" :color="item.color"></icon>
                        <text class="list-left-title">{{item.title}}</text>
                    </div>
                    <div class="list-item-right">
                        <text class="list-right-title"></text>
                        <icon class="list-right-icon"></icon>
                    </div>
                </div>
            </div>
          

            <div class="item_list">
                <div class="list-item" v-for="(item, index) in components2" :key="index" @click="openUrl(item.url)">
                    <div class="list-item-left">
                        <icon class="list-left-icon" :eeui="{content: item.icon}" :color="item.color"></icon>
                        <text class="list-left-title">{{item.title}}</text>
                    </div>
                    <div class="list-item-right">
                        <text class="list-right-title"></text>
                        <icon class="list-right-icon"></icon>
                    </div>
                </div>
            </div>

        
        </scroll-view>
       
    </div>
</template>

<script>

const eeui = app.requireModule('eeui');

const items = [{
    icon: 'md-notifications',
    title: "消息中心",
    color: "#0b7eff"
}, {icon: 'md-thumbs-up',
    title: "我赞过的",
    color: "#6cbd45"
}, {icon: 'md-star',
    title: "收藏集",
    color: "#fec401"
}, {icon: 'tb-goods-fill',
    title: "已购小册",
    color: "#fec401"
}, {icon: 'md-wallet',
    title: "我的钱包",
    color: "#0b7eff"
}, {icon: 'ios-eye',
    title: "阅读过的文章",
    color: "#333"
}, {icon: 'ios-pricetag',
    title: "标签管理",
    color: "#333"
}]

const items2 = [
    {icon: 'md-settings',
    title: "设置",
    color: "#333"
}];

export default {
    data(){
        return {
            statusBarHeight: eeui.getStatusBarHeightPx(),

            components: items,
            components2: items2,
        }
    },
    methods: {
        openUrl(url){
            eeui.toast({
                message: "clicked"
            });
        }
    }
}
</script>

<style scoped>
    .app{
        flex: 1;
        background-color: #e3e3e3;
    }

    .status-bar {
        background-color: #ffffff;
    }

    .userinfo_header{
        width: 750;
        background-color: #ffffff;
        padding: 20 20;
        display: flex;
        margin: 20 0;
        flex-direction: row;
        align-items: center;
    }

    .avatar{
        width: 128px;
        height: 128px;
        margin-right: 15;
    }

    .userinfo_box{
        display: flex;
        flex: 1;
    }

    .userinfo_right{
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        height: 100px;
    }

    .navbar {
        width: 750px;
        height: 100px;
        background-color: #ffffff;
    }

    .navbar-main {
        flex-direction: row;
        align-items: center;
    }

    .navbar-logo {
        width: 36px;
        height: 36px;
        margin-right: 18px;
    }

    .navbar-title {
        font-size: 32px;
        color: #000;
    }


    .list {
        width: 750px;
        flex: 1;
    }

    .list-title-box {
        flex-direction: row;
        align-items: center;
        background-color: #ffffff;
    }

    .list-title {
        flex: 1;
        padding-top: 32px;
        padding-right: 24px;
        padding-bottom: 32px;
        padding-left: 24px;
        font-size: 28px;
        color: #757575;
        background-color: #ffffff;
    }

    .list-subtitle {
        padding-right: 24px;
        font-size: 24px;
    }

    .item_list{
        margin-bottom: 30px;
    }

    .list-item {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        background-color: #ffffff;
        height: 100px;
        width: 750px;
        padding-left: 20px;
        padding-right: 20px;
        border-top-width: 1px;
        border-top-color: #f2f2f2;
        border-top-style: solid;
    }

    .list-item-left {
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        height: 100px;
        flex: 1;
    }

    .list-left-icon {
        width: 60px;
        height: 60px;
        color: #3EB4FF;
    }

    .list-left-title {
        color: #242424;
        padding-left: 12px;
        width: 380px;
        font-size: 26px;
        text-overflow: ellipsis;
        lines: 1;
    }

    .list-left-title-history {
        color: #666666;
        padding-left: 12px;
        width: 660px;
        font-size: 26px;
        text-overflow: ellipsis;
        lines: 2;
    }

    .list-right-title {
        color: #a2a2a2;
        padding-right: 3px;
        font-size: 22px;
        text-overflow: ellipsis;
        lines: 1;
    }

    .list-right-icon {
        font-size: 24px;
        width: 40px;
        height: 40px;
        color: #C9C9CE;
        content: 'tb-right'
    }

    .list-item-right {
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        height: 100px;
    }
</style>