<template>
  <div class="app">

    <div
      class="status-bar"
      :style="{height:statusBarHeight + 'px'}"
    ></div>

    <div class="nav">
      <scroller scroll-direction="horizontal" show-scrollbar="false" class="nav-left" >
        <template v-for="(item, index) in tabPages">
          <div
            class="nav-item"
            :key="index"
          :ref="'nav_item'+ index">
            <text
              :class="[index === position ? 'nav-item-text-active' : 'nav-item-text']"
              @click="switchPage($event, index)"
            >{{item.title}}</text>
            <div
              v-if="index === position"
              class="nav-item-active"
            ></div>
          </div>
          <text
            v-if="index < tabPages.length - 1"
            class="nav-line"
            :key="index"
          ></text>
        </template>
      </scroller>
    </div>

    <tabbar
      ref="reflectName"
      class="tabbar"
      :eeui="{ tabType: 'top', tabHeight: 0 }"
      :tabPages="tabPages"
      @pageSelected="pageSelected"
    ></tabbar>

  </div>
</template>

<style>
.app {
  flex: 1;
}

.status-bar {
  background-color: #ffffff;
}

.nav {
  width: 750px;
  height: 100px;
  background-color: #ffffff;
  flex-direction: row;
  position: relative;
}

.nav-left {
  display: flex;
  width: 750px;
  flex-direction: row;
}

.nav-item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-item-text,
.nav-item-text-active {
  position: relative;
  /* min-width: 140px; */
  height: 100px;
  line-height: 100px;
  text-align: center;
  font-size: 28px;
  color: #333;
  font-weight: 300;
  padding: 0 25;
}

.nav-item-text-active {
  color: #000;
  font-weight: 600;
}

.nav-item-active {
  position: absolute;
  left: 20px;
  right: 20px;
  bottom: 0;
  /* width: 100%; */
  border-radius: 6px;
  height: 6px;
  background-color: #0b7eff;
}

.nav-line {
  height: 24px;
  width: 1px;
  background-color: #ffffff;
}

.tabbar {
  flex: 1;
  width: 750px;
}
</style>

<script>
const eeui = app.requireModule('eeui');
const dom = weex.requireModule('dom') || {};

export default {
  data () {
    return {
      position: 0,

      statusBarHeight: eeui.getStatusBarHeightPx(),

      tabPages: [
        {
          tabName: 'focus',
          title: '关注',
          url: './list.js',
        },
        {
          tabName: 'recommend',
          title: '推荐',
          url: './list.js',
        },
        {
          tabName: 'hot',
          title: '热门',
          url: './list.js',
        },{
          tabName: 'openresource',
          title: '开源推荐',
          url: './list.js',
        },
        {
          tabName: 'neitui',
          title: '内推招聘',
          url: './list.js',
        },{
          tabName: 'xiangqin',
          title: '掘金相亲',
          url: './list.js',
        },
        {
          tabName: 'moyu',
          title: '上班摸鱼',
          url: './list.js',
        },{
          tabName: 'anli',
          title: '应用安利',
          url: './list.js',
        },
        {
          tabName: 'tool',
          title: '开发工具',
          url: './list.js',
        },{
          tabName: 'news',
          title: 'News资讯',
          url: './list.js',
        }
      ],
    }
  },
  methods: {
    pageSelected (data) {
      this.position = data.position;
    },
    switchPage (event, index) {
      this.position = index;
      this.$refs.reflectName.setCurrentItem(this.tabPages[index].tabName);

      dom.scrollToElement(target, {offset: -300});
      
    }
  }
};
</script>
