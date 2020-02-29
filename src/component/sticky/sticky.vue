<template>
  <div class="g-sticky-wrapper" ref="wrapper" :style="{height}">
    <div class="g-sticky" :class="classes" :style="{width, left, top}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "g-sticky",
    props: {
      distance: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        sticky: false,
        left: undefined,
        top: undefined,
        width: undefined,
        height: undefined,
      }
    },
    computed: {
      classes () {
        return {
          sticky: this.sticky,
        }
      }
    },
    mounted () {
      this.scrollHandler = this._scrollHandler.bind(this);
      window.addEventListener('scroll', this.scrollHandler)
    },
    methods: {
      offsetTop () {
        let { top } = this.$refs.wrapper.getBoundingClientRect();
        return top + window.scrollY
      },
      _scrollHandler () {
        let top = this.offsetTop();
        if (window.scrollY > top - this.distance) {
          let { height, left, width } = this.$refs.wrapper.getBoundingClientRect();
          this.$refs.wrapper.style.height = height + 'px';
          this.left = left + 'px';
          this.width = width + 'px';
          this.height = height + 'px';
          this.top = this.distance + 'px';
          this.sticky = true;
        } else {
          this.left = this.width = this.height = this.top = undefined;
          this.sticky = false;
        }
      }
    },
    beforeDestroy () {
      window.removeEventListener('scroll', this.scrollHandler)
    }
  }
</script>

<style scoped lang="scss">
  .g-sticky-wrapper {
    .g-sticky {
      &.sticky {
        position: fixed;
        /*top: 0;*/
        /*left: 0;*/
        /*width: 100%;*/
      }
    }
  }
</style>
