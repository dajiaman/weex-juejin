<template>
  <scroller class="app" @loadmore="fetch">
    <refresh
      class="refresh"
      @refresh="onrefresh"
      @pullingdown="onpullingdown"
      :display="refreshing ? 'show' : 'hide'"
    >
      <text class="indicator-text">加载中 ...</text>
      <loading-indicator class="indicator"></loading-indicator>
    </refresh>

    <div
      v-for="(article, index) in articles"
      :key="index"
    >
      <ArticleCard :article="article.node"></ArticleCard>
    </div>

  </scroller>
</template>

<script>
const eeui = app.requireModule('eeui')
import ArticleCard from '../components/article_card.vue';

export default {
  data () {
    return {
      articles: [],
      refreshing: false
    }
  },
  components: {
    ArticleCard
  },
  created () {
    this.getData(true);
  },
  methods: {
    onrefresh () {
      this.refreshing = true
      setTimeout(() => {
        this.getData(true);
        this.refreshing = false
      }, 2000);

    },
    onpullingdown (event) {
      console.log("dy: " + event.dy)
      console.log("pullingDistance: " + event.pullingDistance)
      console.log("viewHeight: " + event.viewHeight)
      console.log("type: " + event.type)
    },
    fetch () {
      console.log('load more')
      this.$nextTick(() => {
        this.getData(false);
      })
    },
    getData (refresh = true) {
      eeui.ajax(
        {
          url: eeui.rewriteUrl('../assets/json/popular.json'),
        },
        (ret) => {
          if (ret) {
            if (refresh) {
              this.articles = ret.result.data.articleFeed.items.edges;
            } else {
              for (let i = 0; i < ret.result.data.articleFeed.items.edges.length; i++) {
                this.articles.push(ret.result.data.articleFeed.items.edges[i]);
              }
            }
          } else {
            eeui.alert({
              title: "温馨提示",
              message: "加载失败！",
            });
          }
        }
      )
    }

  },
}
</script>

<style scoped>
.app {
  width: 750;
  flex: 1;
  background-color: #c3c3c3;
}

.refresh {
  width: 750;
  display: -ms-flex;
  display: -webkit-flex;
  display: flex;
  -ms-flex-align: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  align-items: center;
  padding: 40px 0;
}
.indicator-text {
  color: #888888;
  font-size: 36px;
  text-align: center;
}
.indicator {
  margin-top: 16px;
  height: 40px;
  width: 40px;
  color: #333;
}
</style>
