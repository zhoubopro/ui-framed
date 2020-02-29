<template>
  <div class="g-sub-nav" :class="{active, vertical}" v-click-outside="close">
    <span @click="onClick" class="g-sub-nav-label">
      <slot name="title"></slot>
      <span class="g-sub-nav-icon" :class="{open, vertical}">
        <g-icon name="arrowright"></g-icon>
      </span>
    </span>

    <template v-if="vertical">
      <transition
        @enter="enter"
        @leave="leave"
        @after-leave="afterLeave"
        @after-enter="afterEnter"
      >
        <div class="g-sub-nav-popover" v-show="open" :class="{vertical}">
          <slot></slot>
        </div>
      </transition>
    </template>

    <template v-else>
      <div class="g-sub-nav-popover" v-show="open">
        <slot></slot>
      </div>
    </template>
  </div>
</template>

<script>
  import ClickOutside from '../../utils/click-outside';
  import GIcon from '../icon/icon';

  export default {
    name: "g-sub-nav",
    directives: { ClickOutside },
    inject: ['root', 'vertical'],
    components: {
      GIcon
    },
    props: {
      name: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        open: false,
      }
    },
    computed: {
      active () {
        return this.root.namePath.indexOf(this.name) >= 0 ? true : false;
      }
    },
    methods: {
      onClick () {
        this.open = !this.open
      },
      updateNamePath () {
        // this.active = true;
        this.root.namePath.unshift(this.name);
        if (this.$parent.updateNamePath) {
          this.$parent.updateNamePath();
        } else {
          // this.root.namePath = []
        }
      },
      close () {
        this.open = false
      },
      enter (el, done) {
        let { height } = el.getBoundingClientRect();
        el.style.height = 0;
        el.getBoundingClientRect(); // 为了让0强制生效
        el.style.height = `${height}px`;
        el.addEventListener('transitionend', () => {
          done();
        })
      },
      afterEnter (el) {
        el.style.height = 'auto';
      },
      leave (el, done) {
        let { height } = el.getBoundingClientRect();
        el.style.height = `${height}px`;
        el.getBoundingClientRect();
        el.style.height = 0;
        el.addEventListener('transitionend', () => {
          done();
        })
      },
      afterLeave (el) {
        el.style.height = 'auto';
      },
    }
  }
</script>

<style scoped lang="scss">
  $border-radius: 4px;
  $blue: #4a90e2;
  .g-sub-nav {
    position: relative;
    &:not(.vertical) {
      &.active {
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
    &-label {
      padding: 10px 20px;
      display: block;
    }
    &-icon {
      display: none;
    }
    &-popover {
      transition: height 250ms;
      background: white;
      position: absolute;
      top: 100%;
      left: 0;
      margin-top: 4px;
      white-space: nowrap;
      box-shadow: 0 0 3px fade_out(black, 0.8);
      border-radius: $border-radius;
      font-size: 14px;
      color: #666;
      min-width: 8em;
      &.vertical {
        position: static;
        border-radius: 0;
        border: none;
        box-shadow: none;
        overflow: hidden;
      }
    }
  }
  .g-sub-nav .g-sub-nav {
    &.active {
      &::after {
        display: none;
      }
    }
    &-label {
      padding: 10px 10px 10px 20px;
      display: block;
    }
    .g-sub-nav-popover {
      top: 0;
      left: 100%;
      margin-left: 8px;
    }
    .g-sub-nav-label {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex: 1;
    }
    .g-sub-nav-icon {
      display: inline-flex;
      margin-left: 1em;
      transition: transform .3s;
      svg {
        fill: #666;
      }
      .vertical {
        transform: rotate(90deg);
        &.open {
          transform: rotate(270deg);
        }
      }
      &.open {
        transform: rotate(180deg);
      }
    }
  }
</style>
