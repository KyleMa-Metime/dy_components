<template>
  <div class="DyTabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "DyTabbar",
};
</script>

<style>
.DyTabbar {
  display: flex;
  height: 49px;
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  border-top: 1px solid #409eff;
  padding-top: 3px;
  box-sizing: border-box;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>
