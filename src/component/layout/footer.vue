<template>
  <div class="ui-footer">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "ui-footer"
  }
</script>

<style scoped lang="scss">
  .ui-footer {
    min-height: 60px;
    background: #7cbce9;
    color: #ffffff;
  }
</style>
