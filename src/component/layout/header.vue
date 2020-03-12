<template>
  <div class="ui-header">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "ui-header",
    data () {
      return {}
    }
  }
</script>

<style scoped lang="scss">
  .ui-header {
    min-height: 60px;
    background: #7cbce9;
    color: #ffffff;
  }
</style>
