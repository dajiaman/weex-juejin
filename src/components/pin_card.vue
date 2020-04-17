<template recyclable>
    <div class="card" >
        <div class="card_header">
            <image :src="item.user.avatarLarge" class="avatar"></image>
            <text class="nickname">{{item.user.username}}</text>
        </div>
        <div class="card_meta">
            <text class='card_title'>{{ item.title }}</text>
            <text class="card_desc">{{item.content}}</text>
        </div>
        <div class="A-image-box" >
             <image class="A-image" resize="cover" :src="source" v-for="(source, i) in item.pictures" :key="i"></image>
        </div>
        <div class="card_footer"></div>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            default: {}
        }
    }
}
</script>

<style scoped>
    .card{
        display: flex;
        width: 750;
        padding: 30 20;
        background-color: #ffffff;
        margin-bottom: 10;
        overflow: hidden;
    }

    .card_title{
        font-size: 30px;
        color: #000;
        flex: 1;
        margin-bottom: 10;
    }

    .card_header{
        margin-bottom: 10px;
        display: flex;
        flex-direction: row;
        align-content: center;
        align-items: center;
    }

    .nickname{
        font-size: 22px;
        color: #000;
    }

    .avatar{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin-right: 10px;
    }

    .card_meta{
        margin-bottom: 10px;
    }

    .card_desc{
        font-size: 24px;
        text-overflow: ellipsis;
        flex: 1;
        color: #333333;
    }

     .A-image-box {
         display: flex;
         flex-direction: row;
        flex-wrap: wrap;
    }

    .A-image {
        flex: 0 1 auto;
        margin-top: 5px;
        width: 231px;
        height: 231px;
        margin-right: 5px;
    }


</style>