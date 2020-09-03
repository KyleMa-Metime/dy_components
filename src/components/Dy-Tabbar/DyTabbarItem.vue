<template>
  <div class="DyTabbar-item">
    <div class="DyTabbar-item-img" @click="fn">
      <slot name="img" v-if="!isActive"></slot>
      <slot name="imgActive" v-else></slot>
    </div>
    <div class="DyTabbar-item-text" :class="{isActiveColor:isActive}">
      <slot name="text"></slot>
    </div>
  </div>
</template>


<script>
export default {
  name: "DyTabbar-item",
  props: {
    path: String,
  },
  data() {
    return {};
  },
  computed: {
    isActive() {
      return this.$route.path.includes(this.path);
    },
  },

  methods: {
    fn() {
      if (this.$route.path.includes(this.path)) return;
      this.$router.push(this.path);
    },
  },
};
</script>

<style>
.DyTabbar-item {
  width: 100%;
  height: 100%;
  flex: 1;
  text-align: center;
}
.DyTabbar-item-img {
  width: 24px;
  height: 24px;
  margin-left: 50%;
  transform: translate(-50%, 0);
}
.DyTabbar-item-img img {
  width: 100%;
  vertical-align: middle;
}
.DyTabbar-item-text {
  font-size: 13px;
  color: #cdcdcd;
}
.isActiveColor {
  font-size: 14px;
  color: #409eff;
}
</style>
