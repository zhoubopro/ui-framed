<template>
  <div class="ui-content">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "ui-content"
  }
</script>

<style scoped lang="scss">
  .ui-content {
    flex-grow: 1;
    background: #0f8de9;
    color: #ffffff;
  }
</style>
