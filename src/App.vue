<template>
  <div id="app">
    <router-view></router-view>
    <dy-tabbar>
      <dy-tabbar-item path="home">
        <template #img>
          <img src="./assets/icon/home.png" alt />
        </template>
        <template #imgActive>
          <img src="./assets/icon/home-active.png" alt />
        </template>
        <template #text>首页</template>
      </dy-tabbar-item>
      <dy-tabbar-item path="category">
        <template #img>
          <img src="./assets/icon/home.png" alt />
        </template>
        <template #imgActive>
          <img src="./assets/icon/home-active.png" alt />
        </template>
        <template #text>分类</template>
      </dy-tabbar-item>
      <dy-tabbar-item path="play">
        <template #img>
          <img src="./assets/icon/home.png" alt />
        </template>
        <template #imgActive>
          <img src="./assets/icon/home-active.png" alt />
        </template>
        <template #text>播放</template>
      </dy-tabbar-item>
      <dy-tabbar-item path="profile">
        <template #img>
          <img src="./assets/icon/home.png" alt />
        </template>
        <template #imgActive>
          <img src="./assets/icon/home-active.png" alt />
        </template>
        <template #text>个人</template>
      </dy-tabbar-item>
    </dy-tabbar>
  </div>
</template>

<script>
import DyTabbar from "./components/Dy-Tabbar/DyTabbar";
import DyTabbarItem from "./components/Dy-Tabbar/DyTabbarItem";
export default {
  name: "App",
  components: {
    DyTabbar,
    DyTabbarItem,
  },
};
</script>

<style>
@import "./assets/css/global.css";
</style>
