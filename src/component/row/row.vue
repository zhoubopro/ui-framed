<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "g-row",
    props: {
      gutter: {
        type: [Number, String]
      },
      align: {
        type: String,
        validator (value) {
          return ['left', 'right', 'center'].includes(value)
        }
      }
    },
    computed: {
      rowClass(){
        const {align} = this
        return [
          align && `align-${align}`
        ]
      },
      rowStyle () {
        return {
          marginLeft: `-${this.gutter / 2}px`,
          marginRight: `-${this.gutter / 2}px`
        }
      }
    }, created () {
      // 没有children
      // console.log(this.$children);
      console.log('row created');
    },
    mounted () {
      console.log(this.$children);
      console.log('row mounted');
      this.$children.forEach(vm => {
        vm.gutter = this.gutter
      })
    }
  }
</script>

<style scoped lang="scss">
  .row {
    display: flex;
    &.align-left{
      justify-content: flex-start;
    }
    &.align-right{
      justify-content: flex-end;
    }
    &.align-center{
      justify-content: center;
    }
  }
</style>
