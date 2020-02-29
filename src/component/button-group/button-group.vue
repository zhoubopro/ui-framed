<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    mounted () {
      for (let node of this.$el.children) {
        let nodeName = node.nodeName.toLocaleLowerCase()
        if (nodeName !== 'button') {
          console.warn(`g-button-group 子元素都应该是button,但是你写的是${nodeName}`)
        }
      }
    }
  }
</script>
<style lang="scss">
  .g-button-group {
    display: inline-flex;
    vertical-align: middle;
    > .g-button {
      border-radius: 0;
      &:not(:first-child){
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
