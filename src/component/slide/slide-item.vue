<template>
  <transition name="ui-slide-item" v-if="visible" :class="{reverse}">
    <div class="g-slide-item">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "ui-slide-item",
    props: {
      name: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        selected: undefined,
        reverse: false
      }
    },
    computed: {
      visible () {
        return this.selected === this.name
      }
    },
    mounted () {
    }
  }
</script>

<style scoped lang="scss">
  .ui-slide-item-leave-active {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .ui-slide-item-enter-active,
  .ui-slide-item-leave-active {
    transition: all .3s;
  }
  .ui-slide-item-enter {
    transform: translateX(100%);
    &.reverse {
      transform: translateX(-100%);
    }
  }
  .ui-slide-leave-to {
    transform: translateX(-100%);
    &.reverse {
      transform: translateX(100%);
    }
  }
  .g-slide-item {
  }
</style>
