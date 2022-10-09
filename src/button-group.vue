<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  // 当按钮出现在页面上时
  mounted() {
    for (let node of this.$el.children) {
      if (node.nodeName.toLowerCase() !== "button") {
        console.warn("not button");
      }
    }
  },
};
</script>
<style lang="scss">
.g-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .g-button {
    border-radius: 0;
    &:not(:first-child) {
      //这么写会变成只有三个边的hover
      //border-left: none;
      // 这一行匹配 &:hover
      margin-left: -1px;
    }
    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>
