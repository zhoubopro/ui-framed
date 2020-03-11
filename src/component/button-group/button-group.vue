<template>
  <div class="ui-button-group">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'ui-button-group',
    mounted () {
      for (let node of this.$el.children) {
        let nodeName = node.nodeName.toLocaleLowerCase();
        if (nodeName !== 'button') {
          console.warn(`ui-button-group 子元素都应该是button,但是你写的是${nodeName}`)
        }
      }
    }
  }
</script>
<style lang="scss">
  @import '../../styles/_var.scss';
  .ui-button-group {
    display: inline-flex;
    vertical-align: middle;
    > .ui-button {
      border-radius: 0;
      &:not(:first-child) {
        margin-left: -1px;
      }
      &:first-child {
        border-top-left-radius: $border-radius;
        border-bottom-left-radius: $border-radius;
      }
      &:last-child {
        border-top-right-radius: $border-radius;
        border-bottom-right-radius: $border-radius;
      }
      &:hover {
        position: relative;
        z-index: 1;
      }
    }
  }
</style>
