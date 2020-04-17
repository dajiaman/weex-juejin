<template recyclable>
    <div class="article_card" >
        <div class="card_header">
            <image :src="article.user.avatarLarge" class="avatar"></image>
            <text class="nickname">{{article.user.username}}</text>
        </div>
        <div class="card_meta">
            <text class='card_title'>{{ article.title }}</text>
            <text class="card_desc">{{article.content}}</text>
        </div>
        <div class="card_footer"></div>
    </div>
</template>

<script>
export default {
    props: {
        article: {
            type: Object,
            default: {}
        }
    }
}
</script>

<style scoped>
    .article_card{
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

    .card_desc{
        font-size: 24px;
        text-overflow: ellipsis;
        flex: 1;
        color: #333333;

        lines: 3;
    }
</style>