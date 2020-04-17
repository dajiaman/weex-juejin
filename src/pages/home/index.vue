<template>
  <div class="app">

    <div
      class="status-bar"
      :style="{height:statusBarHeight + 'px'}"
    ></div>

    <div class="nav">
      <scroller scroll-direction="horizontal" show-scrollbar="false" class="nav-left">
        <template v-for="(item, index) in tabPages">
          <div
            class="nav-item"
            :key="index"
          >
            <text
              :class="[index === position ? 'nav-item-text-active' : 'nav-item-text']"
              @click="switchPage(index)"
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

      <div class="nav-right">
          <icon  :eeui="{content: 'md-apps', fontSize:'60px', color:'#333'}" style="width:50px; height:50px;"></icon>
      </div>

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
}

.nav-left {
  display: flex;
  flex-direction: row;

  flex: 1;
}

.nav-right {
  display: flex;
  margin-right: 20px;
   justify-content: center;
  align-items: center;
}

.nav-item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-item-text,
.nav-item-text-active {
  position: relative;
  width: 140px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  font-size: 28px;
  color: #333;
  font-weight: 300;
  padding: 0 10;
}

.nav-item-text-active {
  color: #000;
  font-weight: 600;
}

.nav-item-active {
  position: absolute;
  left: 40px;
  bottom: 0;
  width: 60px;
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

export default {
  data () {
    return {
      position: 0,

      statusBarHeight: eeui.getStatusBarHeightPx(),

      tabPages: [
        {
          tabName: 'friend',
          title: '推荐',
          url: '../article_list.js',
        },
        {
          tabName: 'group',
          title: '热榜',
          url: '../article_list.js',
        },
        {
          tabName: 'setting',
          title: '前端',
          url: '../article_list.js',
        },
        {
          tabName: 'setting',
          title: '后端',
          url: '../article_list.js',
        }, {
          tabName: 'setting',
          title: '后端',
          url: '../article_list.js',
        }, {
          tabName: 'setting',
          title: '后端',
          url: '../article_list.js',
        }, {
          tabName: 'setting',
          title: '后端',
          url: '../article_list.js',
        }, {
          tabName: 'setting',
          title: '后端',
          url: '../article_list.js',
        },
      ],
    }
  },
  methods: {
    pageSelected (data) {
      this.position = data.position;
    },
    switchPage (index) {
      this.position = index;
      this.$refs.reflectName.setCurrentItem(this.tabPages[index].tabName);
    }
  }
};
</script>
