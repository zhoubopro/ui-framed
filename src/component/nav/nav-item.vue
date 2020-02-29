<template>
  <div
    class="g-nav-item"
    :class="{selected, vertical}"
    @click="onClick"
    :data-name="name"
  >
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "g-nav-item",
    inject: ['root', 'vertical'],
    props: {
      name: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        selected: false
      }
    },
    created () {
      this.root.addItem(this);
    },
    methods: {
      onClick () {
        this.root.namePath = [];
        this.$parent.updateNamePath && this.$parent.updateNamePath();
        this.$emit('update:selected', this.name);
      }
    }
  }
</script>

<style scoped lang="scss">
  /*@import "../../styles";*/
  $blue: #4a90e2;
  .g-nav-item {
    padding: 10px 20px;
    position: relative;
    &:not(.vertical) {
      &.selected {
        &::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          border-bottom: 2px solid $blue;
        }
      }
    }
    &.vertical {
      &.selected {
        color: $blue;
      }
    }
    a {
      color: inherit;
      text-decoration: none;
    }
  }
  .g-sub-nav .g-nav-item:not(.vertical) {
    &.selected {
      color: #333;
      background: #eee;
      &::after {
        display: none;
      }
    }
  }
</style>
