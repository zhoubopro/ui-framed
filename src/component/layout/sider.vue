<template>
  <div class="ui-sider">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "ui-sider"
  }
</script>

<style scoped lang="scss">
  .ui-sider {
    background: #3a9fe8;
    color: #ffffff;
    min-width: 200px;
  }
</style>
