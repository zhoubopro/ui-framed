<template>
  <div
    class="g-slide"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <div class="g-slide-container">
      <slot></slot>
    </div>

    <div class="g-slide-dots">
      <span @click="prevSlide()" data-action="prev">
        <g-icon name="arrowleft"></g-icon>
      </span>
      <span
        v-for="n in childrenLength"
        :class="{active: selectedIndex === n-1}"
        @click="selectDots(n-1)"
        :key="n"
        :data-index="n-1"
      >
        {{n}}
      </span>
      <span @click="nextSlide()" data-action="next">
        <g-icon name="arrowright"></g-icon>
      </span>
    </div>
  </div>
</template>

<script>
  import GIcon from '../icon'

  export default {
    name: "g-slide",
    props: {
      selected: String,
      autoPlay: {
        type: Boolean,
        default: true
      },
      timer: {
        type: Number,
        default: 3
      }
    },
    data () {
      return {
        childrenLength: 0,
        lastSelectedIndex: undefined, // 上一次选中的值
        timerId: undefined,
        startTouch: undefined
      }
    },
    components: {
      GIcon
    },
    computed: {
      names () {
        return this.items.map(vm => vm.name)
      },
      selectedIndex () {
        const index = this.names.indexOf(this.selected);
        return index === -1 ? 0 : index
      },
      items () {
        return this.$children.filter(vm => vm.$options.name === 'g-slide-item')
      }
    },
    mounted () {
      this.updateChildren();
      if(this.autoPlay){
        this.automatically();
      }
      this.childrenLength = this.items.length
    },
    updated () {
      this.updateChildren();
    },
    methods: {
      onTouchStart (e) {
        this.pause();
        // 多点触控不认为在滑动
        if (e.touches.length > 1) {
          return
        }
        this.startTouch = e.touches[0];
      },
      onTouchEnd (e) {
        let endTouch = e.changedTouches[0];
        let { clientX: x1, clientY: y1 } = this.startTouch;
        let { clientX: x2, clientY: y2 } = endTouch;
        let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        let deltaY = Math.abs(y2 - y1);
        let rate = distance / deltaY;
        if (rate > 2) { // 小于30度角才认为在滑动
          if (x2 > x1) {
            this.selectDots(this.selectedIndex - 1)
          } else {
            this.selectDots(this.selectedIndex + 1)
          }
        }
        // 滑动完再自动播放
        this.$nextTick(() => {
          this.automatically();
        })
      },
      onMouseEnter () {
        this.pause();
      },
      onMouseLeave () {
        this.automatically();
      },
      prevSlide () {
        this.selectDots(this.selectedIndex - 1);
      },
      nextSlide () {
        this.selectDots(this.selectedIndex + 1);
      },
      updateChildren () {
        const selected = this._getSelected();
        this.items.forEach(vm => {
          let reverse = this.selectedIndex > this.lastSelectedIndex ? false : true;
          // 最后一个向第一个
          if (this.lastSelectedIndex === this.items.length - 1 && this.selectedIndex === 0) {
            reverse = false
          }
          if (this.lastSelectedIndex === 0 && this.selectedIndex === this.items.length - 1) {
            reverse = true
          }
          vm.reverse = reverse;
          this.$nextTick(() => {
            vm.selected = selected;
          })
        })
      },
      // 自动播放
      automatically () {
        if (this.timerId) {
          return;
        }
        let run = () => {
          let index = this.names.indexOf(this._getSelected());
          let newIndex = index + 1;
          this.selectDots(newIndex);
          this.timerId = setTimeout(run, this.timer * 1000)
        };
        this.timerId = setTimeout(run, this.timer * 1000)
      },
      // 暂停slide
      pause () {
        window.clearTimeout(this.timerId);
        this.timerId = undefined;
      },
      // 获取选中的元素
      _getSelected () {
        const first = this.items[0];
        return this.selected || first.name
      },
      selectDots (index) {
        this.lastSelectedIndex = this.selectedIndex;
        if (index === -1) {
          index = this.names.length - 1
        }
        if (index === this.names.length) {
          index = 0
        }
        this.$emit('update:selected', this.names[index]);
      },
    }
  }
</script>

<style scoped lang="scss">
  .g-slide {
    &-container {
      position: relative;
      overflow: hidden;
    }
    &-dots {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 8px 0;
      > span {
        width: 20px;
        height: 20px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        margin: 0 8px;
        &:hover {
          cursor: pointer;
        }
        &.active {
          background: black;
          color: white;
          &:hover {
            cursor: default;
          }
        }
      }
    }
  }
</style>
